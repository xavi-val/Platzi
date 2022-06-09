enum ROLES{
  ADMIN="admin",
  USER="user"
}

type person = {
  name:string,
  role: ROLES
}

let javier:person ={
  name:"javier",
  role: ROLES.ADMIN
}



