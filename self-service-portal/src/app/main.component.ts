import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'layouts-nav-list',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent {

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
      route: '.',
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

  constructor(public media: TdMediaService) {

  }

}