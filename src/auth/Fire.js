import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBDOcCnkYmuMDX2y9rzIzCmaDW0Fe0m6-4",
    authDomain: "store-2dbb4.firebaseapp.com",
    databaseURL: "https://store-2dbb4.firebaseio.com",
    projectId: "store-2dbb4",
    storageBucket: "store-2dbb4.appspot.com",
    messagingSenderId: "201137928603",
    appId: "1:201137928603:web:755b9d5f09a90c4ccc893e",
    measurementId: "G-6K024103DV"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

var provider = new firebase.auth.GoogleAuthProvider();
var provider2 = new firebase.auth.FacebookAuthProvider();


const googleIn = () => {
    return firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log(user, token)
        return user
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorMessage);
        return {
            status: 500,
            error: errorMessage
        }
    })
};

const facebookIn = () => {
    return firebase.auth().signInWithPopup(provider2).then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log(user, token)
        return user
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorMessage);
        return {
            status: 500,
            error: errorMessage
        }
    })
};

const updateProfile = async (name) => {
    const user = await fire.auth().currentUser
    if (user != null) {
        console.log(user.uid)
        user.updateProfile({
            displayName: name,
        })
    } else {
        alert('There is no user')
    }
}

const register = async (name, email, password) => {
    console.log('register email ' + email + 'login password ' + password + 'name' + name)
    return await fire.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
            console.log(user)
            updateProfile(name);
            alert('User account created')
            return {
                status: 200,
                user: user.user
            };
        }).catch(err => {
            alert('User account not created.there was a problem')
            console.log(err)
        })
}

const login = async (email, password) => {
    // console.log('login email ' + email + 'login password ' + password )
    return await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(function () {

            return firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => {
                    alert('User signed in')
                    //console.log(user.user)
                    return user.user

                }).catch(err => {
                    alert('there was a problem signing you in')
                    return false
                })
        }
        )
}



export { register, login, googleIn, facebookIn };
