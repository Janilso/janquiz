import { connectToDatabase } from '../utils/db/connect';

const getAllQuestions = async () => {
  const { db } = await connectToDatabase();

  return new Promise((resolve, reject) => {
    db.collection('questions')
      .find({})
      .limit(20)
      .toArray()
      .then((questions) => {
        resolve(JSON.parse(JSON.stringify(questions)));
      })
      .catch((err) => reject(err));
  });
};

export default getAllQuestions;
