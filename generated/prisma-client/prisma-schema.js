module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.12). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateCountry {
  count: Int!
}

type AggregateRegion {
  count: Int!
}

type AggregateSchool {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Country {
  id: ID!
  name: String!
  createdAt: DateTime
  updatedAt: DateTime
}

type CountryConnection {
  pageInfo: PageInfo!
  edges: [CountryEdge]!
  aggregate: AggregateCountry!
}

input CountryCreateInput {
  id: ID
  name: String!
}

input CountryCreateOneInput {
  create: CountryCreateInput
  connect: CountryWhereUniqueInput
}

type CountryEdge {
  node: Country!
  cursor: String!
}

enum CountryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CountryPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime
  updatedAt: DateTime
}

type CountrySubscriptionPayload {
  mutation: MutationType!
  node: Country
  updatedFields: [String!]
  previousValues: CountryPreviousValues
}

input CountrySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CountryWhereInput
  AND: [CountrySubscriptionWhereInput!]
  OR: [CountrySubscriptionWhereInput!]
  NOT: [CountrySubscriptionWhereInput!]
}

input CountryUpdateDataInput {
  name: String
}

input CountryUpdateInput {
  name: String
}

input CountryUpdateManyMutationInput {
  name: String
}

input CountryUpdateOneInput {
  create: CountryCreateInput
  update: CountryUpdateDataInput
  upsert: CountryUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CountryWhereUniqueInput
}

input CountryUpsertNestedInput {
  update: CountryUpdateDataInput!
  create: CountryCreateInput!
}

input CountryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [CountryWhereInput!]
  OR: [CountryWhereInput!]
  NOT: [CountryWhereInput!]
}

input CountryWhereUniqueInput {
  id: ID
}

scalar DateTime

enum Level {
  PRESCHOOL
  PRIMARY
  HIGHSCHOOL
  GENERAL
}

scalar Long

type Mutation {
  createCountry(data: CountryCreateInput!): Country!
  updateCountry(data: CountryUpdateInput!, where: CountryWhereUniqueInput!): Country
  updateManyCountries(data: CountryUpdateManyMutationInput!, where: CountryWhereInput): BatchPayload!
  upsertCountry(where: CountryWhereUniqueInput!, create: CountryCreateInput!, update: CountryUpdateInput!): Country!
  deleteCountry(where: CountryWhereUniqueInput!): Country
  deleteManyCountries(where: CountryWhereInput): BatchPayload!
  createRegion(data: RegionCreateInput!): Region!
  updateRegion(data: RegionUpdateInput!, where: RegionWhereUniqueInput!): Region
  updateManyRegions(data: RegionUpdateManyMutationInput!, where: RegionWhereInput): BatchPayload!
  upsertRegion(where: RegionWhereUniqueInput!, create: RegionCreateInput!, update: RegionUpdateInput!): Region!
  deleteRegion(where: RegionWhereUniqueInput!): Region
  deleteManyRegions(where: RegionWhereInput): BatchPayload!
  createSchool(data: SchoolCreateInput!): School!
  updateSchool(data: SchoolUpdateInput!, where: SchoolWhereUniqueInput!): School
  updateManySchools(data: SchoolUpdateManyMutationInput!, where: SchoolWhereInput): BatchPayload!
  upsertSchool(where: SchoolWhereUniqueInput!, create: SchoolCreateInput!, update: SchoolUpdateInput!): School!
  deleteSchool(where: SchoolWhereUniqueInput!): School
  deleteManySchools(where: SchoolWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  country(where: CountryWhereUniqueInput!): Country
  countries(where: CountryWhereInput, orderBy: CountryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Country]!
  countriesConnection(where: CountryWhereInput, orderBy: CountryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CountryConnection!
  region(where: RegionWhereUniqueInput!): Region
  regions(where: RegionWhereInput, orderBy: RegionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Region]!
  regionsConnection(where: RegionWhereInput, orderBy: RegionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RegionConnection!
  school(where: SchoolWhereUniqueInput!): School
  schools(where: SchoolWhereInput, orderBy: SchoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [School]!
  schoolsConnection(where: SchoolWhereInput, orderBy: SchoolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SchoolConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Region {
  id: ID!
  name: String!
  country: Country
  createdAt: DateTime
  updatedAt: DateTime
}

type RegionConnection {
  pageInfo: PageInfo!
  edges: [RegionEdge]!
  aggregate: AggregateRegion!
}

input RegionCreateInput {
  id: ID
  name: String!
  country: CountryCreateOneInput
}

input RegionCreateOneInput {
  create: RegionCreateInput
  connect: RegionWhereUniqueInput
}

type RegionEdge {
  node: Region!
  cursor: String!
}

enum RegionOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RegionPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime
  updatedAt: DateTime
}

type RegionSubscriptionPayload {
  mutation: MutationType!
  node: Region
  updatedFields: [String!]
  previousValues: RegionPreviousValues
}

input RegionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RegionWhereInput
  AND: [RegionSubscriptionWhereInput!]
  OR: [RegionSubscriptionWhereInput!]
  NOT: [RegionSubscriptionWhereInput!]
}

input RegionUpdateDataInput {
  name: String
  country: CountryUpdateOneInput
}

input RegionUpdateInput {
  name: String
  country: CountryUpdateOneInput
}

input RegionUpdateManyMutationInput {
  name: String
}

input RegionUpdateOneInput {
  create: RegionCreateInput
  update: RegionUpdateDataInput
  upsert: RegionUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: RegionWhereUniqueInput
}

input RegionUpsertNestedInput {
  update: RegionUpdateDataInput!
  create: RegionCreateInput!
}

input RegionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  country: CountryWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RegionWhereInput!]
  OR: [RegionWhereInput!]
  NOT: [RegionWhereInput!]
}

input RegionWhereUniqueInput {
  id: ID
}

enum Role {
  ADMIN
  TEACHER
  PARENT
  ACCOUNTANT
  STOREMAN
  USER
}

type School {
  id: ID!
  name: String!
  region: Region
  address: String
  email: String
  phone: String!
  schoolCode: String!
  imageUrl: String
  level: Level!
  createdAt: DateTime
  updatedAt: DateTime
}

type SchoolConnection {
  pageInfo: PageInfo!
  edges: [SchoolEdge]!
  aggregate: AggregateSchool!
}

input SchoolCreateInput {
  id: ID
  name: String!
  region: RegionCreateOneInput
  address: String
  email: String
  phone: String!
  schoolCode: String!
  imageUrl: String
  level: Level
}

input SchoolCreateOneInput {
  create: SchoolCreateInput
  connect: SchoolWhereUniqueInput
}

type SchoolEdge {
  node: School!
  cursor: String!
}

enum SchoolOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  address_ASC
  address_DESC
  email_ASC
  email_DESC
  phone_ASC
  phone_DESC
  schoolCode_ASC
  schoolCode_DESC
  imageUrl_ASC
  imageUrl_DESC
  level_ASC
  level_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SchoolPreviousValues {
  id: ID!
  name: String!
  address: String
  email: String
  phone: String!
  schoolCode: String!
  imageUrl: String
  level: Level!
  createdAt: DateTime
  updatedAt: DateTime
}

type SchoolSubscriptionPayload {
  mutation: MutationType!
  node: School
  updatedFields: [String!]
  previousValues: SchoolPreviousValues
}

input SchoolSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SchoolWhereInput
  AND: [SchoolSubscriptionWhereInput!]
  OR: [SchoolSubscriptionWhereInput!]
  NOT: [SchoolSubscriptionWhereInput!]
}

input SchoolUpdateDataInput {
  name: String
  region: RegionUpdateOneInput
  address: String
  email: String
  phone: String
  schoolCode: String
  imageUrl: String
  level: Level
}

input SchoolUpdateInput {
  name: String
  region: RegionUpdateOneInput
  address: String
  email: String
  phone: String
  schoolCode: String
  imageUrl: String
  level: Level
}

input SchoolUpdateManyMutationInput {
  name: String
  address: String
  email: String
  phone: String
  schoolCode: String
  imageUrl: String
  level: Level
}

input SchoolUpdateOneInput {
  create: SchoolCreateInput
  update: SchoolUpdateDataInput
  upsert: SchoolUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: SchoolWhereUniqueInput
}

input SchoolUpsertNestedInput {
  update: SchoolUpdateDataInput!
  create: SchoolCreateInput!
}

input SchoolWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  region: RegionWhereInput
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  schoolCode: String
  schoolCode_not: String
  schoolCode_in: [String!]
  schoolCode_not_in: [String!]
  schoolCode_lt: String
  schoolCode_lte: String
  schoolCode_gt: String
  schoolCode_gte: String
  schoolCode_contains: String
  schoolCode_not_contains: String
  schoolCode_starts_with: String
  schoolCode_not_starts_with: String
  schoolCode_ends_with: String
  schoolCode_not_ends_with: String
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  level: Level
  level_not: Level
  level_in: [Level!]
  level_not_in: [Level!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SchoolWhereInput!]
  OR: [SchoolWhereInput!]
  NOT: [SchoolWhereInput!]
}

input SchoolWhereUniqueInput {
  id: ID
  phone: String
  schoolCode: String
}

type Subscription {
  country(where: CountrySubscriptionWhereInput): CountrySubscriptionPayload
  region(where: RegionSubscriptionWhereInput): RegionSubscriptionPayload
  school(where: SchoolSubscriptionWhereInput): SchoolSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  email: String
  school: School
  phone: String
  password: String!
  role: Role!
  createdAt: DateTime
  updatedAt: DateTime
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  username: String!
  email: String
  school: SchoolCreateOneInput
  phone: String
  password: String!
  role: Role
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  phone_ASC
  phone_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String
  phone: String
  password: String!
  role: Role!
  createdAt: DateTime
  updatedAt: DateTime
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  username: String
  email: String
  school: SchoolUpdateOneInput
  phone: String
  password: String
  role: Role
}

input UserUpdateManyMutationInput {
  username: String
  email: String
  phone: String
  password: String
  role: Role
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  school: SchoolWhereInput
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  phone: String
}
`
      }
    