/// <reference types="node" />
import { reviewDTO } from "./assets/review";
export declare enum retval {
    USERNAME_EXISTS = "Username already exists.",
    PASSWORD_NOT_STRONG = "Password is not strong enough. ",
    USER_CREATED = "User created successfully",
    LOGGED_IN = "Successful login",
    WRONG_USERNAME_OR_PW = "Wrong username or password"
}
export declare enum JWT_ENUM {
    LOCALSTORAGE_JWT_TOKEN = "JWT_TOKEN"
}
export interface base {
    token: string;
    message?: string;
    loggedin?: boolean;
}
export declare enum STATUSCODES {
    OK = "OK",
    NOK = "NOK"
}
export interface basicresponse extends base {
    statusMessage: string;
    statusCode: STATUSCODES.OK | STATUSCODES.NOK;
}
export interface loginresponse extends base {
}
export interface credentials extends base {
    username: string;
    password: string;
}
export interface excercise extends base {
    id: number;
    name: string;
}
export interface workout extends base {
    userCurrentTime: number;
}
export interface registerresponse extends basicresponse {
    hasVisitedBefore?: boolean;
    shouldContinueToLogin: boolean;
}
export interface environmentoptions {
    databasename: string;
    databaseusername: string;
    databasepassword: string;
    expresshttpsport: number;
    ssl_key_path: string;
    ssl_cert_path: string;
    ssl_ca_path: string;
    ssloptions: {
        key: Buffer | "";
        cert: Buffer | "";
        passphrase: string;
    };
    env_type: "LOCAL" | "PROD";
}
export interface frontenvoptions {
    api_url: string;
}
export interface tokendata extends base {
}
export interface reviewdata {
    reviewmessage: string;
    business: string;
    acknowledged: boolean;
}
export interface reviewsentresponse {
    status: STATUSCODES.OK | STATUSCODES.NOK;
    message: string;
}
export interface unAcReviews {
    status: string;
    reviews: reviewDTO[];
}
export declare const statuses: {
    OK: string;
    NOK: string;
};
export interface logindata {
    destination: string;
}
export interface authenticate extends base {
}
export interface authenticationresponse extends base {
    loggedin: boolean;
    status: STATUSCODES.OK | STATUSCODES.NOK;
}
export interface setvalue extends base {
    setvalue: string;
}
export interface genericresponse extends base {
    status: STATUSCODES.OK | STATUSCODES.NOK;
}
export declare const paths: {
    saveReview: string;
    unacknowledgedReviews: string;
    ackReview: string;
    login: string;
    authenticate: string;
    loginmailclickurl: string;
    updatebusinessname: string;
};
