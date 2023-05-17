import bcrypt from "bcryptjs";

const users = [
  {
    name: "Musicol",
    email: "musicoladmin@gmail.com",
    password: bcrypt.hashSync("1235340177", 10),
    isAdmin: true,
  },
];

export default users;
