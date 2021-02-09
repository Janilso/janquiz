/* eslint-disable no-undef */
import { MongoClient } from 'mongodb';

const { USER_MONGODB, PASS_MONGODB, DB_MONGODB } = process.env;

if (!USER_MONGODB) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!PASS_MONGODB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

if (!DB_MONGODB) {
  throw new Error('Please define the DB_MONGODB environment variable inside .env.local');
}

const url = `mongodb+srv://${USER_MONGODB}:${PASS_MONGODB}@janquizcluster.ffwrn.mongodb.net/${DB_MONGODB}?retryWrites=true&w=majority`;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(url, opts).then((client) => {
      return {
        client,
        db: client.db(DB_MONGODB),
      };
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
