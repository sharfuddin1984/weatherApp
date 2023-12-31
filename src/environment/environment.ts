// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    weatherApiBaseUrl: 'https://yahoo-weather5.p.rapidapi.com/weather?location=london&format=json&u=f',
    XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
    XRapidAPIHostHeaderValue: 'yahoo-weather5.p.rapidapi.com',
    XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
    XRapidAPIKeyHeaderValue: '3e15601368msh43e74c18da78082p1db38ajsnad8cda844d7f'
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.