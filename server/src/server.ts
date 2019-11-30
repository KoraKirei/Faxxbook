import * as express from "express";
import * as cors from "cors";
import * as path from "path";
require("dotenv").config();

import models from './models';
import { ApolloServer, gql } from "apollo-server-express";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import { importSchema } from "graphql-import";


const { PORT } = process.env;

const typeDefs = importSchema("schemas/schema.graphql");
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, "./resolvers"))
);

const apollo = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { models }
});

const app = express();

app.use(cors());
app.use(express.json());
apollo.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`http://localhost:${PORT}/graphql`)
);