import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.setHeader('content-type', 'application/importmap+json');

  res.send(JSON.stringify({
    "imports": {
      "@poc/root-config": "//localhost:9000/poc-root-config.js",
      "@poc/angular-app1": "//localhost:9001/main.js",
      "@poc/angular-nav": "//localhost:9002/main.js",
      "@poc/angular-acessos": "//localhost:9003/main.js",
      "@poc/angular-footer": "//localhost:9004/main.js",
      "@poc/react-app1": "//localhost:8500/poc-poc-react.js",
      "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.5.1/lib/system/single-spa.min.js",
      "react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",
      "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js"
    }
  }));
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
