import { RoutesService } from '@abp/ng.core';
import { eThemeSharedRouteNames } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
    <abp-internet-status></abp-internet-status>
  `,
})
export class AppComponent {
  constructor(private routes: RoutesService) {
    this.routes.patch(eThemeSharedRouteNames.Administration, { invisible: false });
  }
}
