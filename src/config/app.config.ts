interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Game Owner'],
  customerRoles: ['Player'],
  tenantRoles: ['Game Owner'],
  tenantName: 'Organization',
  applicationName: 'Guess the price',
  addOns: ['notifications'],
};
