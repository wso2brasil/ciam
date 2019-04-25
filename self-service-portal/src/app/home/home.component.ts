import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { TdDigitsPipe } from '@covalent/core/common';
import { TdLoadingService } from '@covalent/core/loading';

import { ItemsService, ProductsService, AlertsService } from '../../services';

import { OAuthService } from 'angular-oauth2-oidc';
import { UserManagerService } from '../../services/usermanager.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'qs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  viewProviders: [ UserManagerService ],
})
export class HomeComponent implements OnInit {

  // Current date
  year: any = new Date().getFullYear();
  _env = environment;
  items: Object[];
  products: Object[];
  alerts: Object[];

  // Chart
  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Sales';

  colorScheme: any = {
    domain: ['#1565C0', '#2196F3', '#81D4FA', '#FF9800', '#EF6C00'],
  };

  // line, area
  autoScale: boolean = true;
  username: string = '';

  constructor(
              private oauthService: OAuthService,
              private _uService: UserManagerService) {

  }

  ngOnInit(): void {

    try {
      let self = this;
      this._uService.setAccessToken( this.oauthService.getAccessToken() );
    } catch (error) {
      console.log( error );
    } finally {
    }

  }

  // ngx transform using covalent digits pipe
  axisDigits(val: any): any {
    return new TdDigitsPipe().transform(val);
  }
}
