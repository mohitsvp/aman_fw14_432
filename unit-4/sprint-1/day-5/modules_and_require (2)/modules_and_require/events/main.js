const EventEmitter = require("events");

const sendVerificationEmail = require("./send-verification-email");
const sendWelcomeEmail = require("./send-welcome-mail");
const sendAdminEmail = require("./send-admin-mail");

const eventEmitter = new EventEmitter();

function userRegisterOnWebsite() {
  eventEmitter.on("User Registered", sendVerificationEmail);
  eventEmitter.on("User Registered", sendWelcomeEmail);
  eventEmitter.on("User Registered", sendAdminEmail);
  eventEmitter.emit("User Registered", { name: "Dhaval" });
}

userRegisterOnWebsite();

/*
    events: {
        "User Registered": [
            () => {
                console.log("Send Verification Email");
            },
            () => {
                console.log("Send Welcome Email");
            },
            () => {
                console.log("Send Admin Email");
            }
        ]
    }
*/
