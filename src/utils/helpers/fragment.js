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

const classRoomFragment = /* GraphQL */ `
    fragment classRoomWithDetails on Classroom {
        id
        name
        level
        school {
            id
            name
            schoolCode
            phone
            email
            level
            address
        }
        students {
            id
            name
            admNo
        }
        subjects {
            id
            assignee {
                id
                username
                email
                role
                phone
            }
            name
        }
        classTeacher {
            id
            username
            phone
            email
        }
    }
`;

const subjectFragment = /* GraphQL */ `
    fragment SubjectWithDetails on Subject {
        id
        name
        assignee {
            id
            username
            email
            role
            phone
        }
        class {
            id
            name
            level
        }
    }
`;

export default {
    schoolFragment,
    userFragment,
    regionFragment,
    classRoomFragment,
    subjectFragment,
};
