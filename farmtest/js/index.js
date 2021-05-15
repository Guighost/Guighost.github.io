import { BackButtonEvent } from '@ionic/core';
import { Plugins } from '@capacitor/core';
const { App2 } = Plugins;
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		
	};
	
    },

    onDeviceReady: function() {
        app.amendLinks('external-link');
    },

    // Find everything with class className and open it
    // with the InAppBrowser
    amendLinks: function(className) {
        var n = 0,
            links = document.getElementsByClassName(className);

        for (; n < links.length; n++) {
            links[n].onclick = function(e) {
                e.preventDefault();
                window.open(''.concat(this.href), '_blank');
            }
        }
    },
	const routerEl = document.querySelector('ion-router');
	document.addEventListener('ionBackButton', (ev: BackButtonEvent) => {
		ev.detail.register(-1, () => {
			const path = window.location.pathname;
			if (path === routerEl.root) {
			App2.exitApp();
			}
		};
	}
	
app.initialize();