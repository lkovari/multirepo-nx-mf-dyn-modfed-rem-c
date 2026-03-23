import { withModuleFederation } from '@nx/module-federation/angular';
import config from './module-federation.config';

const REMOTE_BASE = '/multirepo-nx-mf-dyn-modfed-rem-c/';

export default async (baseConfig: unknown) => {
  const withMF = await withModuleFederation({ ...config }, { dts: false });
  const configWithMF = withMF(baseConfig as Record<string, unknown>);
  return {
    ...configWithMF,
    output: {
      ...(configWithMF as { output?: Record<string, unknown> }).output,
      publicPath: REMOTE_BASE,
    },
  };
};
