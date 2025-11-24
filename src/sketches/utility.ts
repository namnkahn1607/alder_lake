type User = {
    id: number,
    username: string,
    role: 'member' | 'contributor' | 'admin'
};

type UpdatedUser = Partial<User>;

let nextID = 1;

const users: Array<User> = [
    { id: nextID++, username: "john_doe", role: "member" },
    { id: nextID++, username: "jane_smith", role: "contributor" },
    { id: nextID++, username: "alice_jones", role: "admin" },
    { id: nextID++, username: "charlie_brown", role: "member" },
];

const updateUser = (id: number, updates: UpdatedUser) => {
    const selectedUser = users.find(user => user.id == id);

    if (!selectedUser) {
        console.error(`Cannot find user with id: ${id}`);
        return;
    }

    Object.assign(selectedUser, updates);
};

updateUser(1, { username: "new_john_doe"} );
updateUser(4, { role: "contributor"} );

console.log(users);

type OmitUser = Omit<User, 'id'>;

const addNewUser = (newUser: OmitUser): User => {
    const user = {
        id: nextID++, ...newUser
    };

    users.push(user);
    return user;
};

addNewUser({ username: "harry_osborn", role: "admin" });
addNewUser({ username: "peter_parker", role: "contributor" });

console.log(users);