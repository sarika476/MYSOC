db.createUser(
{
    user: "root",
    pwd: "admin",
    roles: [
      { role: "userAdminAnyDatabase", db: "admin" }
    ]
});
