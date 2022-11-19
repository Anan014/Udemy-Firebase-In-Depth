// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD4cAYLv6weiGlhRk05oP06Le8tnMkL0D4",
    authDomain: "fir-course-recording-bd204.firebaseapp.com",
    projectId: "fir-course-recording-bd204",
    storageBucket: "fir-course-recording-bd204.appspot.com",
    messagingSenderId: "642287756984",
    appId: "1:642287756984:web:c828eacb91fd7cffc7364d",
  },
  api: {},
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import "zone.js/plugins/zone-error"; // Included with Angular CLI.
