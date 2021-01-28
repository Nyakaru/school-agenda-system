//@ts-check
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { verify } from 'jsonwebtoken';
import { prisma } from '../generated/prisma-client';
import { schema } from './schema';
import { configs } from './configs';

const app = express();
const PORT = 4000;

const server = new ApolloServer({
    schema,
    context: req => {
        const obj = {
            user: null,
            prisma,
            app,
            ...req,
        };

        const header = req['req']['headers']['authorization'];

        if (!header) {
            return obj;
        }

        const token = header.split('Bearer ')[1];

        if (!token) {
            return obj;
        }

        try {
            obj['user'] = verify(token, configs.appSecret);
        } catch (er) {
            console.log(er['name'], er['message']);
        }
        return obj;
    },
    introspection: true,
});

server.graphqlPath = '/graphql';

server.applyMiddleware({
    app,
});

app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
