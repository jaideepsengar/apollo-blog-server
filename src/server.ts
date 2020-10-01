import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer, Server } from 'http';
import compression from 'compression';
import cors from 'cors';

import schema from './schema';
import datasources from './datasources'

const app = express();

const server = new ApolloServer({
  schema,
  dataSources: () => datasources,
  validationRules: [depthLimit(7)],
});

app.use('*', cors());
app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

const httpServer: Server = createServer(app);
httpServer.listen(
  {
    port: 3000
  },
  (): void => console.log(`GraphQL is now running on http://localhost:3000/graphql`)
);