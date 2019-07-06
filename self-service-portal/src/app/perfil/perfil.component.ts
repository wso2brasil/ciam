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

  private perfil: Perfil = new Perfil();

  constructor(private _titleService: Title, private _userService: UserManagerService) {

  }

  ngOnInit() {
    let _self = this;

    this._userService.getUserInfo().subscribe((data: {}) => {
      console.log( data["userName"] );
      console.log( data["emails"] );
      console.log( JSON.stringify(data) );

      this.perfil.emails = data["emails"];
      this.perfil.name = data["name"];
      //this.perfil.name.givenName = data["name"].givenName;
      //this.perfil.name.familyName = data["name"].familyName;

    })
  }

  // ngx transform using covalent digits pipe
  axisDigits(val: any): any {
    return new TdDigitsPipe().transform(val);
  }
}
