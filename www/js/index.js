
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    
    window.open = cordova.InAppBrowser.open;
    window.open("https://www.webrtc-experiment.com/video-conferencing/#7523070650961738", '_self',
        'location=no,zoom=no,toolbar=no');
 
}
