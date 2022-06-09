"use strict";
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "admin";
    ROLES["USER"] = "user";
})(ROLES || (ROLES = {}));
let javier = {
    name: "javier",
    role: ROLES.ADMIN
};
