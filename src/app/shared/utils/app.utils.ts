import {environment} from 'src/environments/environment';

// @ts-ignore-next-line
export const fileHash = environment.production ? `.${__BUILD_DATE__}` : "";
