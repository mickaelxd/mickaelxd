// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';

export default async (req, res) => {
  const folderPath = './src/pages/api/certificados/';
  const files = await fs.readdirSync(folderPath);

  const jsonResponse = [];

  await files.forEach(file => {
    const item = fs.readFileSync(folderPath + file);

    jsonResponse.push({
      filename: file,
      base64: `data:image/jpg;base64,${Buffer.from(item).toString('base64')}`,
    });
  });

  return res.status(200).json(jsonResponse);
};
