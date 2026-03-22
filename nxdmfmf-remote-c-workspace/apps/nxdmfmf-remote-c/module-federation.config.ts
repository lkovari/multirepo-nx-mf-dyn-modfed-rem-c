import type { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'nxdmfmf-remote-c',
  exposes: {
    './Routes': 'apps/nxdmfmf-remote-c/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
