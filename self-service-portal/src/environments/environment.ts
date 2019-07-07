// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api_gateway_url: 'https://gateway.wso2training.com',
  user_info_url: "https://identity.wso2training.com/oauth2/userinfo",
  username: "",
  openid : {
    strictDiscoveryDocumentValidation : false,
    issuer : 'https://identity.wso2training.com/oauth2/token',
    loginUrl : "https://identity.wso2training.com/oauth2/authorize",
    redirectUri : "http://ciam.wso2training.com",
    clientId : "XVcRah2DKEObGUEquyqwjn7GP9ga",
    scope : "openid profile email",
    oidc : true
  },
  access_token: ""
};
