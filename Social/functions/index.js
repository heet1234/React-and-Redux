const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login } = require("./handlers/users");
const functions = require("firebase-functions");
const isLoggedIn = require("./util/middlewares");
const app = require("express")();

app.get("/screams", getAllScreams);
app.post("/scream", isLoggedIn, postOneScream);
app.post("/signup", signup);
app.post("/login", login);

exports.api = functions.region("asia-south1").https.onRequest(app);
