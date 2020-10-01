/*
 * A holder for OAuth settings
 */
export interface OAuthConfiguration {

    // The Authorization Server base URL
    authority: string;

    // The OAuth client trust entry
    clientId: string;

    // The URL on which we receive the response
    redirectUri: string;

    // The scopes requested
    scope: string;

    // Support custom logout behaviour
    customLogoutEndpoint: string;

    // The URL to which we return after a logout
    postLogoutRedirectUri: string;

    // The post logout location within the app, which is 'logoutcallback'
    // Do a view source in the below page to understand the path sent back to the desktop app
    // https://authsamples.com/apps/finaldesktopapp/postlogout.html
    logoutCallbackPath: string;

    // Identity provider specific details can be configured by an install program
    idpParameterName: string;
    idpParameterValue: string;
}
