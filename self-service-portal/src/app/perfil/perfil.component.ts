import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { TdDigitsPipe } from '@covalent/core/common';
import { TdLoadingService } from '@covalent/core/loading';

import { ItemsService, ProductsService, AlertsService } from '../../services';

import { OAuthService } from 'angular-oauth2-oidc';
import { UserManagerService } from '../../services/usermanager.service';
import { environment } from '../../environments/environment';
import { Perfil } from './perfil';

@Component({
  selector: 'qs-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  viewProviders: [ UserManagerService ],
})
export class PerfilComponent implements OnInit {

  public perfil: Perfil = new Perfil();

  constructor(private _titleService: Title, private _userService: UserManagerService, private _oauthService: OAuthService) {

  }

  ngOnInit() {
    let _self = this;
    let claims: any = this._oauthService.getIdentityClaims();
    this.perfil.firstName = claims.given_name;
  }

  // ngx transform using covalent digits pipe
  axisDigits(val: any): any {
    return new TdDigitsPipe().transform(val);
  }
}
