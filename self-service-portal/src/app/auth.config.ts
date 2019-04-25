import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://localhost:9443/oauth2/token',
  redirectUri: 'http://localhost:4200',
  strictDiscoveryDocumentValidation: false,
  clientId: 'Hot31mSP_frSZfb91UIQLdHl1rsa',
  scope: 'openid profile email',
}