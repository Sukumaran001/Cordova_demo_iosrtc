cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "cordova-plugin-iosrtc.Plugin",
      "file": "plugins/cordova-plugin-iosrtc/www/cordova-plugin-iosrtc.js",
      "pluginId": "cordova-plugin-iosrtc",
      "clobbers": [
        "cordova.plugins.iosrtc"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-inappbrowser": "5.0.0",
    "cordova-plugin-iosrtc": "8.0.1"
  };
});