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
        department {
            id
            name
        }
        schoolCode
        subjects {
            name
            id
            subjectCode
            subjectAbv
            status
            department {
                id
                name
            }
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
        department {
            id
            name
        }
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
                subjectCode
                subjectAbv
                status
                department {
                    id
                    name
                }
            }
        }
    }
`;

const schoolSubjectFragment = /* GraphQL */ `
    fragment SubjectWithDetails on Subject {
        id
        name
        subjectCode
        subjectAbv
        status
        department {
            id
            name
        }
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
            level {
                id
                levelName
                school {
                    id
                }
            }
        }
        subject {
            id
            name
            subjectCode
            subjectAbv
            status
            department {
                id
                name
            }
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
            level {
                id
                levelName
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

const timetableFragment = /* GraphQL */ `
    fragment TimetableWithDetails on Timetable {
        id
        class {
            id
            name
            level {
                id
                levelName
            }
        }
        teacher {
            id
            firstName
        }
        weekday
        event
        type
        start
        end
        school {
            id
            name
        }
        subject {
            id
            subject {
                id
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
    timetableFragment,
};
