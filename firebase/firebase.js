const { initializeApp, applicationDefault, cert } = require("firebase-admin/app");
const { getFirestore, Timestamp, FieldValue } = require("firebase-admin/firestore");

var serviceAccount = require("../.keys/fir-tutorial-express-firebase-adminsdk-5y6hc-a064a3b489.json");

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = {
  db: db
};
