"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "School",
    embedded: false
  },
  {
    name: "Country",
    embedded: false
  },
  {
    name: "Region",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "Level",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/nyakaru477/school-agenda-system/dev`
});
exports.prisma = new exports.Prisma();
