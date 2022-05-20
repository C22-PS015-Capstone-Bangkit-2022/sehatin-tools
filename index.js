const { initializeApp } = require('firebase-admin/app');
const serviceAccount = require("./key/keyGoogle.json");
const {getAuth} = require("firebase-admin/auth");
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sehatin-eab72.firebaseio.com",
});

getAuth()
    .getUserByEmail("igustiagungvivekananda@gmail.com")
    .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log({userRecord});
    })
    .catch((error) => {
        console.log('Error fetching user data:', error);
    });

getAuth()
    .setCustomUserClaims("7mdwVXeNKSguTzvdPlSySd3ZdWy1", { admin: true })
    .then(() => {
        // The new custom claims will propagate to the user's ID token the
        // next time a new one is issued.
        console.log("set claim success")
    });