
  export const environment = {
    production: true,
    api_gateway_url: 'https://localhost:8243',
    user_info_url: "https://localhost:8243/userinfo",
    username: "",
    openid : {
      strictDiscoveryDocumentValidation : false,
      issuer : 'https://localhost:9445/oauth2/token',
      loginUrl : "https://localhost:9445/oauth2/authorize",
      redirectUri : "http://localhost:4200",
      clientId : "Hot31mSP_frSZfb91UIQLdHl1rsa",
      scope : "openid profile email",
      oidc : true
    },
    access_token: ""
  };