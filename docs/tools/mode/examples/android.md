# MODE Integration Guide for data collection on Android devices

The MODE smartphone library (`libmode`) provides a complete, out-of-the-box
solution for mobility data collection via smartphones. It is built as an
autonomous component that can easily be integrated into third party apps. For
the standard use-case (trip data collection) the library can be integrated into
existing Apps with little effort:

The most recent version of the MODE library will be provided by AIT
[upon request](mailto:martin.stubenschrott@ait.ac.at). 

You will also be granted Git access to 
[https://gitlab.ait.ac.at/energy/commons/smartsurvey/android/smartsurvey_demo_app/]()
which hosts a very basic demo app, showing how to use the MODE library.

**Step 1: Add the library to the App as a build dependency**

The library can be added to the App by adding a corresponding dependency to the build. The following example shows how to add `libmode` to the `build.gradle` of an Android App.

We will provide the library with enough meta-data according to the Maven standard.
When putting the library into your `~/.m2/repository/` folder, you can add the dependency
like this:
```
dependencies {
    implementation 'at.ac.ait.mode:libmode:2.0.6'
}
```

Of course, you can also just copy the `libmode.jar` file to a `libs` folder
in your project, and add the dependency like this:
```
dependencies {
    implementation fileTree(dir: 'libs', include: ['*.jar'])
}
```


**Step 2: Initialize the library and start data collection**

The library needs to be initialized before it can start recording data: 

```java
private void initLibMode() {
    Context ctx = getApplicationContext();

    Mode.initialize(ctx);

    // Optional: allow data uploading via cellular network (otherwise data only gets uploaded when on WiFi)
    Mode.getConfigurationEntry(Configuration.CONFIG_METERED_UPLOADING_ALLOWED).setBooleanValue(ctx, true);

    // set Backend Server
    Mode.setBaseServerURL("http://localhost:8080");

    // Set OAUTH2 token manually
    // This will be sent to the backend service on each request
    Mode.setAuthorizationToken("MY_OAUTH2_TOKEN");

    // Start
    Mode.startSurvey();
}
```

Note that we need to ask first for permission to access the location.
(`ANDROID_PERMISSION_ACCESS_FINE_LOCATION`).
Only when this is granted, we should initialize the library as in the example above.
The provided [demo app](https://gitlab.ait.ac.at/energy/commons/smartsurvey/android/smartsurvey_demo_app/) shows how to handle this.

## Support and Contact

- For any questions, contact Martin Stubenschrott directly at
  [martin.stubenschrott@ait.ac.at](mailto:martin.stubenschrott@ait.ac.at)