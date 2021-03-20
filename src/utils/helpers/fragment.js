//@ts-check
const schoolFragment = /* GraphQL */ `
    fragment SchoolWithDetails on School {
        schoolCode
        address
        phone
        region {
            name
            id
            country {
                name
                id
            }
        }
        id
        name
        email
        level
        imageUrl
    }
`;

const userFragment = /* GraphQL */ `
    fragment UserWithDetails on User {
        id
        role
        username
        password
        email
        phone
        school {
            schoolCode
            address
            region {
                name
                id
                country {
                    name
                    id
                }
            }
            id
            name
            email
            level
            imageUrl
        }
    }
`;

const regionFragment = /* GraphQL */ `
    fragment RegionWithDetails on Region {
        name
        id
        country {
            name
            id
        }
    }
`;

export default {
    schoolFragment,
    userFragment,
    regionFragment,
};
