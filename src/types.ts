import { reviewDTO } from "./assets/review";

export enum retval {
    USERNAME_EXISTS = "Username already exists.",
    PASSWORD_NOT_STRONG = "Password is not strong enough. ",
    USER_CREATED = "User created successfully",
    LOGGED_IN = "Successful login",
    WRONG_USERNAME_OR_PW = "Wrong username or password"
  }

export enum JWT_ENUM {
    LOCALSTORAGE_JWT_TOKEN = "JWT_TOKEN"
  }
export interface base {
    token: string,
    loggedin?: boolean,
}
export enum STATUSCODES {
    OK =  "OK",
    NOK = "NOK"
  }

export interface basicresponse extends base{
    statusMessage: string;
    statusCode:  STATUSCODES.OK | STATUSCODES.NOK
}

export interface loginresponse extends basicresponse {
    JWT_CREATE_TIME : number
}

export interface credentials extends base{
        username: string,
        password: string
}

export interface excercise extends base {
    id: number,
    name: string    
}

export interface workout extends base {
    userCurrentTime: number;
}

export interface registerresponse extends basicresponse {
    hasVisitedBefore?: boolean,
    shouldContinueToLogin: boolean
}

export interface environmentoptions {
    databasename : string,
    databaseusername : string,
    databasepassword : string,
    expresshttpsport : number,
    ssl_key_path: string,
    ssl_cert_path: string,
    ssl_ca_path: string,
    ssloptions: {
        key: Buffer | ""
        cert: Buffer | "",
        passphrase: string,
    }
    env_type: "LOCAL" | "PROD";

}

export interface frontenvoptions {
    api_url: string
}

export interface tokendata extends base  {
    
}

export interface reviewdata{
    reviewmessage: string,
    business: string,
    acknowledged: boolean
}
export interface reviewsentresponse{
    status: STATUSCODES.OK | STATUSCODES.NOK,
    message: string;
}
export interface unAcReviews{
    status: string,
    reviews: reviewDTO[]
}

export const statuses =  {
    OK: "OK",
    NOK: "NOK"
}

export interface logindata{
    destination: string
}

export interface authenticate extends base {
    
}

export interface authresponse extends base {
    loggedin : boolean
}


export const paths = {
    saveReview: "/savereview",
    unacknowledgedReviews: "/unacknowledgedreviews",
    ackReview: "/ackReview",
    login: "/login",
    authenticate: "/authenticate",
    loginmailclickurl: "/auth/magiclogin/callback"
}