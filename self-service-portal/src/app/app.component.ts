import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

//#DEMO001-START
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { environment } from '../environments/environment';
import { TdMediaService } from '@covalent/core/media';
//#DEMO001-END

@Component({
  selector: 'qs-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  routes: Object[] = [{
    icon: 'home',
    route: 'home',
    title: 'Home',
  }, {
    icon: 'library_books',
    route: '.',
    title: 'Documentation',
  }, {
    icon: 'color_lens',
    route: '.',
    title: 'Style Guide',
  }, {
    icon: 'view_quilt',
    route: '.',
    title: 'Layouts',
  }, {
    icon: 'picture_in_picture',
    route: '.',
    title: 'Components & Addons',
  },
];
usermenu: Object[] = [{
    icon: 'swap_horiz',
    route: '.',
    title: 'Switch account',
  }, {
    icon: 'tune',
    route: '.',
    title: 'Account settings',
  }, {
    icon: 'exit_to_app',
    route: '.',
    title: 'Sign out',
  },
];
navmenu: Object[] = [{
    icon: 'looks_one',
    route: 'perfil',
    title: 'Meus Dados',
    description: 'Atualização de Perfil',
  }, {
    icon: 'looks_two',
    route: '.',
    title: 'Alterar Senha',
    description: 'Alterar minha senha',
  }, {
    icon: 'looks_3',
    route: '.',
    title: 'Mais Proteção',
    description: 'Token via Aplicativo, SMS ou Email',
  },
];

  constructor(private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer,
              private oauthService: OAuthService,
              public media: TdMediaService) {
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'github',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent-mark.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-ux.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'appcenter',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/appcenter.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'listener',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/listener.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'querygrid',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/querygrid.svg'));
    this._iconRegistry.addSvgIconInNamespace('assets', 'wso2',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/wso2.svg'));
      
      //#DEMO001-START
      console.log("configureWithNewConfigApi() - start");
      this.configureWithNewConfigApi();
      console.log("configureWithNewConfigApi() - end");
      //#DEMO001-END
  }

  //#DEMO001-START
  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin();
    environment.access_token = this.oauthService.getAccessToken();
    console.log( "environment.access_token: " + environment.access_token );
    console.log( "Access Token after loadDiscoveryDocumentAndLogin()");
  }  
  //#DEMO001-END

  public logout() {
    console.log( "Logout");
    this.oauthService.logOut();
  }
}
