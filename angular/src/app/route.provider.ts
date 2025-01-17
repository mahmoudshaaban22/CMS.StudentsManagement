import { AuthService, RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService, AuthService], multi: true },
];


function configureRoutes(routesService: RoutesService, authService: AuthService) {

  const isAuthenticated = authService.isAuthenticated;
  return () => {
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: 'students',
        name: '::Students::Students',
        iconClass: 'fas fa-user',
        order: 2,
        layout: eLayoutType.empty,
        requiredPolicy :'StudentsManagement.Students.ListStudent',
        
        
      },
    ]);
  };
}
