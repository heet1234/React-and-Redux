const { getAllScreams, postOneScream } = require("./handlers/screams");
const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getUserDetails,
} = require("./handlers/users");
const functions = require("firebase-functions");
const isLoggedIn = require("./util/middlewares");
const app = require("express")();

app.get("/screams", getAllScreams);
app.post("/scream", isLoggedIn, postOneScream);
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", isLoggedIn, uploadImage);
app.post("/user", isLoggedIn, addUserDetails);
app.get("/user", isLoggedIn, getUserDetails);

exports.api = functions.region("asia-south1").https.onRequest(app);
