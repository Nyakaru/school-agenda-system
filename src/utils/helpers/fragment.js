//@ts-check
const schoolFragment = /* GraphQL */ `
    fragment SchoolWithDetails on School {
        id
        name
        address
        phone
        email
        level
        region {
            id
            name
        }
        schoolCode
        subjects {
            name
            id
        }
        classes {
            name
        }
        classLevels {
            id
            levelName
            description
        }
    }
`;

const userFragment = /* GraphQL */ `
    fragment UserWithDetails on User {
        id
        role
        gender
        firstName
        middleName
        lastName
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
        name
        capacity
        level {
            id
            levelName
            description
        }
        classTeacher {
            firstName
            id
            lastName
        }
        id
        students {
            admNo
            id
            firstName
            lastName
            gender
            middleName
            feeBalance
        }
        subjects {
            assignee {
                firstName
                lastName
            }
            id
            subject {
                name
                id
            }
        }
    }
`;

const schoolSubjectFragment = /* GraphQL */ `
    fragment SubjectWithDetails on Subject {
        id
        name
        school {
            id
            name
            schoolCode
        }
    }
`;

const subjectFragment = /* GraphQL */ `
    fragment SubjectWithDetails on Subject {
        id
        assignee {
            id
            firstName
            email
            role
            phone
        }
        class {
            id
            name
            level
        }
        subject {
            id
            name
        }
    }
`;

const classLevelFragment = /* GraphQL */ `
    fragment ClassLevelWithDetails on ClassLevel {
        id
        levelName
        description
        classRooms {
            id
            name
            capacity
            students {
                id
            }
        }
    }
`;

const studentFragment = /* GraphQL */ `
    fragment StudentWithDetails on Student {
        id
        gender
        firstName
        middleName
        lastName
        prefect
        admNo
        domitory
        feeBalance
        class {
            id
            name
            level {
                id
                levelName
            }
            classTeacher {
                firstName
                id
                lastName
            }
        }
        subjects {
            id
            subject {
                name
            }
        }
    }
`;

export default {
    schoolFragment,
    userFragment,
    regionFragment,
    classRoomFragment,
    subjectFragment,
    classLevelFragment,
    studentFragment,
    schoolSubjectFragment,
};
