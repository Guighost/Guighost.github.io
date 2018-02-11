
        var config = {
            apiKey: "AIzaSyCh2cwFUUPEmBl5OfnOHBe79RRvFDgVn9Y",
            authDomain: "guighost-games.firebaseapp.com",
            databaseURL: "https://guighost-games.firebaseio.com",
            projectId: "guighost-games",
            storageBucket: "guighost-games.appspot.com",
            messagingSenderId: "113008996581"
        };
        firebase.initializeApp(config);
        var database = firebase.database();
        /**
         * Function called when clicking the Login/Logout button.
         */
        // [START buttoncallback]
        function toggleSignIn() {
            if (!firebase.auth().currentUser) {
                console.log("inToggleSignIn");
                // [START createprovider]
                var provider = new firebase.auth.GoogleAuthProvider();
                // [END createprovider]
                // [START addscopes]
                provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
                // [END addscopes]
                // [START signin]
                firebase.auth().signInWithPopup(provider).then(function (result) {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = result.credential.accessToken;
                    // The signed-in user info.
                    var user = result.user;
                    // [START_EXCLUDE]
                    //document.getElementById('quickstart-oauthtoken').textContent = token;
                    // [END_EXCLUDE]
                }).catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;
                    // [START_EXCLUDE]
                    if (errorCode === 'auth/account-exists-with-different-credential') {
                        alert('You have already signed up with a different auth provider for that email.');
                        // If you are using multiple auth providers on your app you should handle linking
                        // the user's accounts here.
                    } else {
                        console.error(error);
                    }
                    // [END_EXCLUDE]
                });
                // [END signin]
            } else {
                // [START signout]
                token = '';
                user = '';
                firebase.auth().signOut();
                
                console.log("signed out");
                // [END signout]
            }
            // [START_EXCLUDE]
            document.getElementById('quickstart-sign-in').disabled = true;
            // [END_EXCLUDE]
           
        }
        // [END buttoncallback]

        /**
         * initApp handles setting up UI event listeners and registering Firebase auth listeners:
         *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
         *    out, and that is where we update the UI.
         */
        function initApp() {
            // Listening for auth state changes.
            // [START authstatelistener]
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    // User is signed in.
                    //console.log("inOnAuthStateChanged");
                    var displayName = user.displayName;
                    var shortname = displayName.substr(0, displayName.indexOf(' '),2);
                    var email = user.email;
                    var emailVerified = user.emailVerified;
                    var photoURL = user.photoURL;
                    var isAnonymous = user.isAnonymous;
                    var uid = user.uid;
                    var providerData = user.providerData;
                    var savedStarCash = localStorage.getItem('starCash');
                    var guiStackHigh = JSON.parse(localStorage.getItem('GuiStack_HighScore'));
                    if (guiStackHigh == null || guiStackHigh == 'undefined') { guiStackHigh = 0; }
                    var guiStackPrevHigh = 0;
                 
                    // [START_EXCLUDE]
                    document.getElementById('quickstart-sign-in-status').textContent = 'Signed in with Google';
                    //document.getElementById('quickstart-sign-in').textContent = 'Sign out';
                    document.getElementById('quickstart-sign-in').style.backgroundImage = 'url(Images/Homepage/googleSignOut.png)';
                    //document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
                    function getExistingPlayer() {
                        var userId = firebase.auth().currentUser.uid;
                        firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
                            var prevStarCash = (snapshot.val() && snapshot.val().guiStarCash) || 'Anonymous';
                            console.log("getExistingPlayer - check preStarCash from cloudDb " + prevStarCash + " vs local starCash " + savedStarCash)
                            var sccheckCloud = parseInt(prevStarCash, 10);
                            var sccheckLocal = parseInt(savedStarCash, 10);
                            //console.log(sccheckCloud + " and " + sccheckLocal);
                            if (sccheckCloud >= sccheckLocal) {
                                console.log('%c' + savedStarCash + ' is < or = ' + prevStarCash + ' on clouddb for starCash---- writing new LOCAL value', 'background: #bada55; color: #222');
                                savedStarCash = prevStarCash;
                                localStorage["starCash"] = savedStarCash;
                            }
                            else {
                                console.log('%c' + savedStarCash + ' is > than ' + prevStarCash + ' on clouddb for starCash---- writing new CLOUD value', 'background: #B0E0E6; color: #222');

                            }
                            writeUserData(uid, displayName, email, photoURL, savedStarCash);
                        })
                       
                    }
                    getExistingPlayer();
                    function writeUserData(userId, name, email, imageUrl, savedStarCash) {
                        firebase.database().ref('users/' + userId).set({
                            username: name,
                            email: email,
                            profile_picture: imageUrl,
                            guiStarCash: savedStarCash
                           
                        });
                        //firebase.database().ref('GuiStack/HighScores/' + userId).set({
                        //    name: shortname,
                        //    guiStackHigh
                                                    
                            
                        //});
                    }
                    
                    
               
                    
                    var userId = firebase.auth().currentUser.uid;
                    return firebase.database().ref('/users/' + userId).once('value').then(function (snapshot) {
                        var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
                        document.getElementById('sign-in-message').textContent = 'Welcome ' + username;

                        function checkGSTackHigh() {
                            //check GuiStack HighScore and write new value if higher on device
                            //console.log('check guiStackHigh.score ');

                            var userId = firebase.auth().currentUser.uid;
                            firebase.database().ref('/GuiStack/HighScores/' + userId).once('value').then(function (snapshot) {
                                guiStackPrevHigh = (snapshot.val() && snapshot.val().guiStackHigh) || 'Anonymous';

                                console.log("check previous GuiStack High of " + guiStackPrevHigh.score + " vs machine stored score " + guiStackHigh.score);
                                if (parseInt(guiStackHigh.score, 10) > parseInt(guiStackPrevHigh.score, 10) || guiStackPrevHigh.score == null || guiStackPrevHigh.score == 'undefinded') {
                                    console.log('%c' + guiStackHigh.score + ' is higher than ' + guiStackPrevHigh.score + ' on clouddb for GuiStack---- writing new high score', 'background: #bada55; color: #222');
                                    firebase.database().ref('GuiStack/HighScores/' + userId).set({
                                        name: shortname,
                                        guiStackHigh

                                    });
                                }
                            });


                          
                        }
                       
                        checkGSTackHigh();
                     
                    });

                  


                   

                    // [END_EXCLUDE]
                } else {
                    // User is signed out.
                    // [START_EXCLUDE]
                    document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
                    //document.getElementById('quickstart-sign-in').textContent = 'Sign in with Google';
                    document.getElementById('quickstart-sign-in').style.backgroundImage = 'url(Images/Homepage/btn_google_signin_light_normal_web.png)';
                    document.getElementById('sign-in-message').textContent = ''
                    //document.getElementById('quickstart-account-details').textContent = 'null';
                    //document.getElementById('quickstart-oauthtoken').textContent = 'null';
                    // [END_EXCLUDE]
                }
                // [START_EXCLUDE]
                document.getElementById('quickstart-sign-in').disabled = false;
                // [END_EXCLUDE]
            });
            // [END authstatelistener]

            document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn(), false);
        }
       
        //window.onload = function () {
            initApp();
        //};
    