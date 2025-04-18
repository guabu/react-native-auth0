export { TimeoutError } from './utils/fetchWithTimeout';
export { default as useAuth0 } from './hooks/use-auth0';
export { default as Auth0Provider } from './hooks/auth0-provider';
export type { LocalAuthenticationOptions } from './credentials-manager/localAuthenticationOptions';
export { default as LocalAuthenticationLevel } from './credentials-manager/localAuthenticationLevel';
export { default as LocalAuthenticationStrategy } from './credentials-manager/localAuthenticationStrategy';
export * from './types';

import Auth0 from './auth0';
export default Auth0;
