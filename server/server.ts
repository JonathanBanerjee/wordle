import express, { Request, Response } from 'express';

const app = express();
const port = 3002;

app.use(express.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Pass to next layer of middleware
  next();
});

app.get('/solutions', (_req: Request, res: Response) => {
  res.status(200).json([{ id: 1, word: 'equip' }]);
});

app.get('/letters', (_req: Request, res: Response) => {
  res
    .status(200)
    .json([
      { key: 'a' },
      { key: 'b' },
      { key: 'c' },
      { key: 'd' },
      { key: 'e' },
      { key: 'f' },
      { key: 'g' },
      { key: 'h' },
      { key: 'i' },
      { key: 'j' },
      { key: 'k' },
      { key: 'l' },
      { key: 'm' },
      { key: 'n' },
      { key: 'o' },
      { key: 'p' },
      { key: 'q' },
      { key: 'r' },
      { key: 's' },
      { key: 't' },
      { key: 'u' },
      { key: 'v' },
      { key: 'w' },
      { key: 'x' },
      { key: 'y' },
      { key: 'z' },
    ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
