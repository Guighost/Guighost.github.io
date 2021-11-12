/*jshint esversion: 8 */


// import * as haptics from '@capacitor/haptics';
// import * as app_1 from '@capacitor/app';
// import * as splashScreen from '@capacitor/splash-screen';
// import * as core from '@capacitor/core';
// const { App2 } = app_1.App;
// var app = {
//     initialize: function() { document.addEventListener('deviceready', this.onDeviceReady, false);    hapticsVibrate();}

//     };

//     app.onDeviceReady = function() { app.amendLinks('external-link'); };
//     app.loadSplash= function() {
//         splashScreen.SplashScreen.show({
//             showDuration: 5000,
//             fadeInDuration: 750,
//             fadeOutDuration: 750,
//             autoHide: true
//           });
//     };
//     // Find everything with class className and open it
//     // with the InAppBrowser
//     app.amendLinks = function(className) {
//         var n = 0,
//             links = document.getElementsByClassName(className);

//         for (; n < links.length; n++) {
//             links[n].onclick = function(e) {
//                 e.preventDefault();
//                 window.open(''.concat(this.href), '_blank');
//             };
//         }
//     };
//     const ionRouter = useIonRouter();

//     document.addEventListener('ionBackButton', (ev) => {
//       ev.detail.register(10, () => {
//        try{ 
//          presentAlertConfirm();
//         }catch(err){console.log('back button err = ' + err);}

//       });
//     });
//  core.LocalNotifications.createChannel ({
//         id: 'FarmAlerts',
//         name: 'FarmAlerts',
//         importance: 5,
//         description: 'alerts from Medieval Farms',
//         sound: 'nice.mp3',
//         visibility: 1,  
//     });
//     var today = new Date();
//     var tomorrow = new Date();
//     tomorrow.setDate(today.getDate()+1);
//     tomorrow.setHours(16);
//     tomorrow.setMinutes(0);
//     tomorrow.setSeconds(0);
//     var tomorrow_at_4pm = new Date(tomorrow);
//     const notifs =  core.LocalNotifications.schedule({
//         notifications: [
//           {
//             title: "Medieval Farms Awaits",
//             body: "Your crops need your attention. Get Farming!",
//             id: 1,
//             schedule: { at: tomorrow_at_4pm  },
//             channel: 'FarmAlerts'
//           }
//         ]
//       });
//       console.log('scheduled notifications', notifs);

//     function presentAlertConfirm() {
//         const alert = document.createElement('ion-alert');
//         alert.cssClass = 'my-custom-class';
//         alert.header = 'Quit App?';
//         alert.message = 'Are you sure you want to leave?';
//         alert.buttons = [
//           {
//             text: 'Cancel',
//             role: 'cancel',
//             cssClass: 'secondary',
//             handler: (blah) => {
//               console.log('Confirm Cancel: blah');

//             }
//           }, {
//             text: 'Okay',
//             handler: () => {
//               console.log('Confirm Okay');
//               app_1.App.exitApp();
//             }
//           }
//         ];
      
//         document.body.appendChild(alert);
//         return alert.present();
//       }

//     window.addEventListener('backbutton', function(event) {
//         // The popstate event is fired each time when the current history entry changes.
//         console.log("back button");
        
//         alert("Press Back again to Quit");
//         if (r == true) {
//             // Call Back button programmatically as per user confirmation.
//             app_1.App.exitApp();
//             // Uncomment below line to redirect to the previous page instead.
//             // window.location = document.referrer // Note: IE11 is not supporting this.
//         } else {
//             // Stay on the current page.
//             console.log('canceled exit');
//         }       
    
//     }, false);
//     var popOnceBackBtn = 0;
//   window.onpopstate = function(e) { 
//     if(popOnceBackBtn == 0) {alert("Press Back again to Quit"); popOnceBackBtn = 1;}else{app_1.App.exitApp();}
    
//   };

  
//   const hapticsVibrate = async () => {
//     await haptics.Haptics.vibrate();
//   };
  
 


// app.initialize();