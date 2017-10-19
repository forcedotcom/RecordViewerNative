# Record Viewer&mdash;React Native

This React Native app shows you how easy it is to use the Salesforce [User Interface API](https://developer.salesforce.com/docs/atlas.en-us.uiapi.meta/uiapi) to create, read, update, and delete Salesforce records.

Salesforce uses User Interface API to build the Salesforce1 and Lightning Experience apps. Not only do you get data and metadata in a single response, but the response matches metadata changes made to the org by Salesforce admins. You don’t have to worry about layouts, picklists, field-level security, or sharing&mdash;all you have to do is build an app that users love.

## Set Up the App

The Record Viewer app gets and sets data from a Salesforce organization.

To authenticate Record Viewer with a Salesforce org:

1. In the Salesforce org, [configure a connected app](https://help.salesforce.com/articleView?id=connected_app_overview.htm).
   * Select Enable OAuth Settings.
   * For the Callback URL, enter `https://`. 
    
    **Tip**: *The app intercepts the redirect message and loads the app (it doesn't redirect the browser to the callback URL), so it doesn't matter what the callback URL is as long as it starts with `https://`. Config.js is preconfigured with `https://`, so it's easiest to use that in your connected app.* 
    
    * For OAuth Scope, select either `api` or `full`. 
    * Make a note of the OAuth consumer key to enter in the Record Viewer Config.js file.
1. In the Salesforce org, visit a few records. The app loads recently used items, and if you don't have any, it won't show any. 
1. Clone the RecordViewerNative repository.
1. In the Config.js file:
   * If you entered a Callback URL in the connected app other than `https://`, set `oauthRedirect` to that value. 
   * Set `consumerKey` to the OAuth consumer key in the connected app.
   

## Build the App

1. Install `react-native`, `watchman`, and `XCode`.
1. From the RecordViewerNative directory:
    1. Run `npm install`.
    1. Run `react-native run-ios`. (The Android build might work, but we haven't tested it.)
    
## Use the App

To view a record, click a record in the Recent Items list. This list contains recently used items. If you don't see any records, go to your Salesforce org and select a record or two, then return to the app.

When viewing a record, you can click to Edit or Delete the record.
