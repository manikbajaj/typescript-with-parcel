enum Roles {
  admin = "admin",
  author = "author",
  editor = "editor",
}

interface Role {
  role: Roles;
}

enum PermissionsList {
  read = "read",
  write = "write",
  execute = "execute",
}

interface UserPermissions {
  permissions: PermissionsList[];
}

interface User {
  name: string;
  email: string;
  phone: number;
  gender: string;
}

interface AdminUser extends User, Role, UserPermissions {
  numberOfUsersReporting: number;
}

interface UserWithAddress extends User {
  address: string;
}

const user = {
  name: "John",
  email: "john@email.com",
  phone: 9876543,
  gender: "male",
};

const userWithAddress: UserWithAddress = {
  name: "mark",
  email: "mark@email.com",
  phone: 987654345,
  gender: "male",
  address: "This is an address",
};

const rob: AdminUser = {
  name: "rob",
  email: "rob@email.com",
  phone: 99876787,
  gender: "male",
  role: Roles.admin,
  permissions: [
    PermissionsList.read,
    PermissionsList.write,
    PermissionsList.execute,
  ],
  numberOfUsersReporting: 5,
};

console.log(user);
console.log(userWithAddress);
console.log(rob);
