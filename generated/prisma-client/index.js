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
    name: "Classroom",
    embedded: false
  },
  {
    name: "Student",
    embedded: false
  },
  {
    name: "Subject",
    embedded: false
  },
  {
    name: "Department",
    embedded: false
  },
  {
    name: "ClassSubject",
    embedded: false
  },
  {
    name: "ClassLevel",
    embedded: false
  },
  {
    name: "TimeTable",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "Level",
    embedded: false
  },
  {
    name: "Prefect",
    embedded: false
  },
  {
    name: "Gender",
    embedded: false
  },
  {
    name: "SubjectStatus",
    embedded: false
  },
  {
    name: "WeekDays",
    embedded: false
  },
  {
    name: "TimetableType",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/nyakaru477/school-agenda-system/dev`
});
exports.prisma = new exports.Prisma();
