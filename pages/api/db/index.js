import questionsMock from '../../../src/utils/mock/questions';
import { bgSite, descriptionSite, titleSite } from '../../../src/utils/constants/site';
import externalURIs from '../../../src/utils/mock/external';
import themes from '../../../src/utils/themes';

const db = (request, response) => {
  const questions = questionsMock();
  const bg = bgSite;
  const title = titleSite;
  const description = descriptionSite;
  const external = externalURIs();
  const theme = themes.normal;

  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

  const returno = {
    bg,
    title,
    description,
    questions,
    external,
    theme,
  };

  response.json(returno);
};

export default db;
