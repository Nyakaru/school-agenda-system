//@ts-check
const schoolFragment = /* GraphQL */ `
    fragment SchoolWithDetails on School {
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

const countryFragment = /* GraphQL */ `
    fragment CountryWithDetails on Country {
        id
        name
    }
`;

export default {
    schoolFragment,
    userFragment,
    countryFragment,
};
