var AppLovinMAX;
var INTER_AD_UNIT_ID;
var REWARDED_AD_UNIT_ID;
var BANNER_AD_UNIT_ID;
// Assume Android
INTER_AD_UNIT_ID = 'ed2d8896f2bc2fcc';
REWARDED_AD_UNIT_ID = 'ee479fb7bcdc18c3';
BANNER_AD_UNIT_ID = 'ff8cabd57baf7b8a';
var SDK_KEY = "4Lf7icebFUhL60MpoZ107TLTRlsqTDtMX1pLCkWUFKxq0p13IDN8gZOGDTGnl4zDzCA6_sbMp1vbEsGRetqgMt";
var  loadTextStart2 = document.getElementById('loadingText1');
function onDeviceReadyAL() {
    // console.log('Running cordova-' + cordova.platformId + 'v' + cordova.version);
    
  
    try{  AppLovinMAX = cordova.require('cordova-plugin-applovin-max.AppLovinMAX');
    }catch(err){ loadTextStart2.innerText = "----Cordova load failed with " + err;}

    try { AppLovinMAX.initialize(SDK_KEY, function (configuration) {
        loadTextStart2.innerText = "Villagers Loading...";  
        initializeBannerAds();       
        initializeInterstitialAds();
                initializeRewardedAds();  
                setTimeout(function(){ showBannerMF();}, 500); 
               
           
                loadTextStart2.innerText = "Villagers Loaded";
            });
    } catch (error) {loadTextStart2.innerText = loadTextStart2.innerText +   "  -----INITALIZE Appplovin  failed with " + error; }
        //   function showMediationDebugger() {  AppLovinMAX.showMediationDebugger(); }
     
}

function onInterButtonClicked() {
    try {
        if (AppLovinMAX.isInterstitialReady(INTER_AD_UNIT_ID)) {
            AppLovinMAX.showInterstitial(INTER_AD_UNIT_ID);           
        } else { loadInterstitial();
            setTimeout(function(){
                if (AppLovinMAX.isInterstitialReady(INTER_AD_UNIT_ID)) { AppLovinMAX.showInterstitial(INTER_AD_UNIT_ID);}
                else{ console.log('No ad ready');}  
            }, 250);        
        }
    } catch (error) {console.log('onInterClicked error ' + error); }
}
function initializeBannerAds(){    
    AppLovinMAX.createBanner(BANNER_AD_UNIT_ID, AppLovinMAX.AdViewPosition.BOTTOM_CENTER);
    AppLovinMAX.setBannerBackgroundColor(BANNER_AD_UNIT_ID, '#e6fff5');
}

function initializeInterstitialAds() {
    window.addEventListener('OnInterstitialLoadedEvent', function (adInfo) { console.log("Inter ad loaded with success");    });
 var retries2 = 0;
    window.addEventListener('OnInterstitialLoadFailedEvent', function (adInfo) {
        console.log('OnInterstitialLoadFailedEvent is true - RETRY');
        setTimeout( function (){ onInterButtonClicked();}, 200);  
    });
    window.addEventListener('OnInterstitialClickedEvent', function (adInfo) {});
    window.addEventListener('OnInterstitialDisplayedEvent', function (adInfo) { console.log('OnInterstitialDisplayedEvent is true'); 
    try{Enhance.logEvent('InterDisplayed');} catch(err){console.log(err);}
    });
    window.addEventListener('OnInterstitialAdFailedToDisplayEvent', function (adInfo) {
         console.log('OnInterstitialAdFailedToDisplayEvent is true - RETRY');
        setTimeout( function (){ onInterButtonClicked();}, 200);  
    });
    window.addEventListener('OnInterstitialHiddenEvent', function (adInfo) {
        let boosted = localStorage.getItem('MedFarm_NoBoost');
        if (boosted){  localStorage.setItem('MedFarm_NoBoost', 0);        }
        else{   localStorage.setItem('adWatched', 1);}

     
        try {   soundCheck();    } catch (error) {   console.log('soundcheck failed');      }
        setTimeout( function (){  loadInterstitial(); localStorage.setItem('adWatched', 0);}, 3000);
    });
    // Load the first interstitial
    try {loadInterstitial(); } catch (error) { console.log("load interstational 1st INNER failed with " + error); }
}

function loadInterstitial() {
    try { AppLovinMAX.loadInterstitial(INTER_AD_UNIT_ID); console.log("inter ad loaded");
    } catch (error) {  console.log("AppLovinMAX.loadInterstitial  failed with " + error);    }      
}

function onRewardedAdButtonClicked() {
    try {
        if (AppLovinMAX.isRewardedAdReady(REWARDED_AD_UNIT_ID)) {
            AppLovinMAX.showRewardedAd(REWARDED_AD_UNIT_ID);
            
        } else {loadRewardedAd();     
            setTimeout(function(){
                if (AppLovinMAX.isRewardedAdReady(REWARDED_AD_UNIT_ID)) {AppLovinMAX.showRewardedAd(REWARDED_AD_UNIT_ID); }
                else{console.log('No Rewarded ad ready');}  
            }, 250);        
        }
    } catch (error) { console.log("onRewardedAdButtonClicked  failed with " + error);}

}

function initializeRewardedAds() {
    window.addEventListener('OnRewardedAdLoadedEvent', function (adInfo) {   console.log("rewarded ad loaded");    });
    var retries2 = 0;
    window.addEventListener('OnRewardedAdLoadFailedEvent', function (adInfo) {
         console.log("rewarded ad load failed - retrying");  
        setTimeout( function (){ onRewardedAdButtonClicked();}, 200);             
    });
    window.addEventListener('OnRewardedAdClickedEvent', function (adInfo) {});
    window.addEventListener('OnRewardedAdDisplayedEvent', function (adInfo) {
        localStorage.setItem('rewardWatched', 1);       
        try{Enhance.logEvent('RewardedAdDisplayed');} catch(err){console.log(err);}
    });
    window.addEventListener('OnRewardedAdAdFailedToDisplayEvent', function (adInfo) { setTimeout( function (){ onRewardedAdButtonClicked();}, 200);});
    window.addEventListener('OnRewardedAdHiddenEvent', function (adInfo) {
        setTimeout( function (){ loadRewardedAd(); localStorage.setItem('rewardWatched', 0);}, 3000);
        try {   soundCheck();    } catch (error) {   console.log('soundcheck failed');      }
    });
    window.addEventListener('OnRewardedAdReceivedRewardEvent', function (adInfo) { console.log("rewarded ad succeed"); });

    // Load the first rewarded ad
    try { loadRewardedAd(); } catch (error) {console.log(" loadRewardedAd INNER failed with " + error); }
}

function loadRewardedAd() {
     try { AppLovinMAX.loadRewardedAd(REWARDED_AD_UNIT_ID);} catch (error) {console.log("AppLovinMAX.loadRewardedAd  failed with " + error);} 
}

var enableBanner = 1;
var bannerLoaded = 0;
var interTries4 = 0;
var rewardedTries = 0;
function AppLovinCheck(){
      //inter
    if (localStorage.getItem('MedFarm_LoadAd') == 1 && localStorage.getItem('MedFarm_StarCashBoost') == 0) {
        interTries4 = interTries4 + 1;
        if (interTries4 > 3){localStorage.setItem('MedFarm_LoadAd',0); interTries4 = 0; }
        try{ onInterButtonClicked();localStorage.setItem('MedFarm_LoadAd',0);interTries4 = 0;        
        }catch(err){console.log('Load inter failed with ' + err); console.log('Load inter failed with ' + err); }               
     }

    ///rewarded
    if (localStorage.getItem('MedFarm_StarCashBoost') == 1) {
        rewardedTries = rewardedTries + 1;
        console.log("tries = " + rewardedTries);
        if (rewardedTries > 3){localStorage.setItem('MedFarm_StarCashBoost',0); rewardedTries = 0;}
      try{  onRewardedAdButtonClicked();            
            localStorage.setItem('MedFarm_StarCashBoost', 0);
            rewardedTries = 0;
        }catch(err){console.log('Load inter failed with ' + err); console.log( 'LoadRewarded failed with ' + err);}
    }
    //  if (enableBanner == 1 && bannerLoaded == 0){
        
    //     setTimeout(function(){ 
    //         showBannerMF();  bannerLoaded = 1; }, 6000);
    //     // var language3 = window.navigator.languages;
    //     // if(language3.includes('en-US' ||'en-us' ||'en-gb'||'en-GB' || 'en-ca' ||'en-CA') ){ enableBanner = 1; }
    //     // else{ 
            
    //     //     setTimeout(function(){ 
    //     //             showBannerMF();  bannerLoaded = 1; 
    //     //             // setTimeout(function(){
    //     //             //      try {AppLovinMAX.hideBanner(BANNER_AD_UNIT_ID);} catch (error) {console.log(error); } 
    //     //             //     setTimeout(function(){ bannerLoaded = 0;   }, 30000);
    //     //             // try{   Enhance.logEvent('bannerAd_shown');}catch(err){console.log(err);}
    //     //         // }, 12000);                
    //     //     }, 5000);
    //     // }            
    //         // setTimeout(function(){  bannerLoaded = 0;}, 12000);
       
    //  }         
    setTimeout(() => { AppLovinCheck(); },500);
}
// var languages = window.navigator.languages;

// if(languages.includes('en-US')){
//     console.log('language = ' + languages[0]);
//     enableBanner = 1;    
// }
// else{  enableBanner = 0;}

function showBannerMF(){
     try { AppLovinMAX.showBanner(BANNER_AD_UNIT_ID);} catch (error) {console.log(error); } 
    try{   Enhance.logEvent('bannerAd_shown');}catch(err){console.log(err);}
   
}



try{
    AppLovinMAX.setIsAgeRestrictedUser(false);
    AppLovinMAX.setDoNotSell(false);
}catch(err){console.log(err);}

//start the loop
setTimeout(() => { onDeviceReadyAL(); 
    loadTextStart2.innerText = 'Building Village';
    setTimeout(() => {  AppLovinCheck();
        loadTextStart2.innerText = 'Loading Villagers';
    }, 2000);
}, 3000);