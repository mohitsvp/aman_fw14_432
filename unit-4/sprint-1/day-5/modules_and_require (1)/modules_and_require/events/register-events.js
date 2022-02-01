const EventEmitter = require("events");

const sendVerificationEmail = require("./send-verification-email");
const sendWelcomeEmail = require("./send-welcome-mail");
const sendAdminEmail = require("./send-admin-mail");

const eventEmitter = new EventEmitter();

const eventListeners = [
  sendVerificationEmail,
  sendWelcomeEmail,
  sendAdminEmail,
];

for (listener of eventListeners) {
  eventEmitter.on("User Registered Srinidhi", listener);
}

module.exports = eventEmitter;
