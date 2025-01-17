import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'StudentsManagement',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44374/',
    redirectUri: baseUrl,
    clientId: 'StudentsManagement_App',
    responseType: 'code',
    scope: 'offline_access StudentsManagement',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44374',
      rootNamespace: 'CMS.StudentsManagement',
    },
  },
} as Environment;
