const eventEmitter = require("./register-events");

function userRegisterOnWebsite() {
  eventEmitter.emit("User Registered Dhaval", { name: "Dhaval" });
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
