export var retval;
(function (retval) {
    retval["USERNAME_EXISTS"] = "Username already exists.";
    retval["PASSWORD_NOT_STRONG"] = "Password is not strong enough. ";
    retval["USER_CREATED"] = "User created successfully";
    retval["LOGGED_IN"] = "Successful login";
    retval["WRONG_USERNAME_OR_PW"] = "Wrong username or password";
})(retval || (retval = {}));
export var JWT_ENUM;
(function (JWT_ENUM) {
    JWT_ENUM["LOCALSTORAGE_JWT_TOKEN"] = "JWT_TOKEN";
})(JWT_ENUM || (JWT_ENUM = {}));
export var STATUSCODES;
(function (STATUSCODES) {
    STATUSCODES["OK"] = "OK";
    STATUSCODES["NOK"] = "NOK";
})(STATUSCODES || (STATUSCODES = {}));
export const statuses = {
    OK: "OK",
    NOK: "NOK"
};
export const paths = {
    saveReview: "/savereview",
    unacknowledgedReviews: "/unacknowledgedreviews",
    ackReview: "/ackReview",
    login: "/login",
    authenticate: "/authenticate",
    authenticatecb: "/#/authenticate",
    loginmailclickurl: "/auth/magiclogin/callback",
    updatebusinessname: "/business/update",
    getbusinessname: "/business/getname"
};
