import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://identity.wso2training.com/oauth2/token',
  redirectUri: 'http://ciam.wso2training.com',
  strictDiscoveryDocumentValidation: false,
  clientId: 'XVcRah2DKEObGUEquyqwjn7GP9ga',
  scope: 'openid profile email',
}
