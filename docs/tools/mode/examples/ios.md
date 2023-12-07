# MODE Integration Guide for data collection on iOS devices

The MODE smartphone library (`libmode`) provides a complete, out-of-the-box
solution for mobility data collection via smartphones. It is built as an
autonomous component that can easily be integrated into third party apps. For
the standard use-case (trip data collection) the library can be integrated into
existing Apps with little effort:

The most recent version of the MODE library will be provided by AIT
[upon request](mailto:martin.stubenschrott@ait.ac.at). 

You will also be granted Git access to 
[https://gitlab.ait.ac.at/energy/commons/smartsurvey/ios/SmartSurveyDemoApp/]()
which hosts a very basic demo app, showing how to use the MODE library.

**Step 1: Add the library to the App as a build dependency**

To make it easy to use libmode, we have published the library on our
Gitlab in https://gitlab.ait.ac.at/energy/commons/smartsurvey/ios/Libmode.git

You can then [add the swift package as a dependency](https://alexandersandberg.com/articles/managing-package-dependencies-with-swift-package-manager-in-xcode/)
in XCode.


**Step 2: Initialize the library and start data collection**

The library needs to be initialized before it can start recording data: 

```swift
func initLibMode() {
    // Allow uploading of trips also on cellular connection (default is Wi-Fi only)
    UserDefaultsStore.cellularUploadAllowed = true
    
    // Set the OAUTH2 token and the server address where trips are uploaded and analyzed.
    Mode.setAuthorizationToken(token: "myuser:abcdef123456")

    // Define where the backend server is located, waiting for the trips to be
    // uploaded
    //
    // By default, access to non-https is disabled by iOS. For development purposes one can change
    // Info.plist like described here, but that might not allow the app to be
    // accepted in the app store, so only use during development or install a local
    // SSL certificate:
    // https://stackoverflow.com/questions/63597760/not-allowed-to-make-request-to-local-host-swift
    Mode.setBaseServerURL(surveyUrl: "http://localhost:8080")
    
    // This call starts recording trip data. Once it has detected a trip, it is uploaded and analyzed
    Mode.startSurvey()
}
```

Also make sure that you request background location access in the manifest of the
project.

## Support and Contact

- For any questions, contact Martin Stubenschrott directly at
  [martin.stubenschrott@ait.ac.at](mailto:martin.stubenschrott@ait.ac.at)