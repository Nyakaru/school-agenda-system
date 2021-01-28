// @ts-check
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { Express } from 'express';
import { Prisma } from './generated/prisma-client';

export interface IRequestContext extends ExpressContext {
    prisma: Prisma;
    app: Express;
    user: IJWTPayload;
}

export interface IJWTPayload {
    id: ID;
    username: string;
    school: string;
    role: string;
    email: string;
    phone: string;
}
