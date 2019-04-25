# Covalent QuickStart

Quickstart App with @covalent packages

## Setup

* Ensure you have Node 4.4+ and NPM 3+ installed.
* Install YARN `npm i -g yarn`
* Install Angular CLI `yarn global add angular-cli@latest`
* Install Typescript 2.0 `yarn global add typescript`
* Install TSLint `yarn global add tslint`
* Install Protractor for e2e testing `yarn global add protractor`
* Install Node packages `yarn i`
* Update Webdriver `webdriver-manager update` and `./node_modules/.bin/webdriver-manager update`
* Run local build `ng serve`

## OAuth OIDC 

These are the steps required to configure OpenID Connect with WSO2 Identity Server
* Install angular-oauth2-oidc `npm i angular-oauth2-oidc --save`
* Import OAuthModule `import { OAuthModule } from 'angular-oauth2-oidc';`
OAuthModule.forRoot()
* Create a file auth.config.ts on the same directory as the app.component.ts
import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
  redirectUri: window.location.origin + '/index.html',
  clientId: 'spa-demo',
  scope: 'openid profile email voucher',
}

* Configure the OAuthService with this config object when the application starts up:

