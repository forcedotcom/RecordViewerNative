# Record Viewer&mdash;React Native

This React Native app shows you how easy it is to use the Salesforce [User Interface API](https://developer.salesforce.com/docs/atlas.en-us.uiapi.meta/uiapi) to create, read, update, and delete Salesforce records.

Salesforce uses User Interface API to build the Salesforce1 and Lightning Experience apps. Not only do you get data and metadata in a single response, but the response matches metadata changes made to the org by Salesforce admins. You don’t have to worry about layouts, picklists, field-level security, or sharing&mdash;all you have to do is build an app that users love.

## Set Up the App

The Record Viewer app gets and sets data from a Salesforce organization.

To authenticate Record Viewer with a Salesforce org:

1. In the Salesforce org, [configure a connected app](https://help.salesforce.com/articleView?id=connected_app_overview.htm).
    * For the Callback URL, enter any URL that starts with `https://`.
    * For OAuth Scope, select either `api` or `full`. 
    * Make a note of the OAuth consumer key to enter in the Record Viewer Config.js file.

1. Clone the RecordViewerNative repository.
1. In the Config.js file:
   * Set `oauthRedirect` to the callback URL in the connected app. 
   * Set `consumerKey` to the OAuth consumer key in the connected app.
   

## Build the App

1. Install `react-native`, `watchman`, and `XCode`.
1. From the RecordViewerNative directory:
    1. Run `npm install`.
    1. Run `react-native run-ios`. (The Android build might work, but we haven't tested it.)
