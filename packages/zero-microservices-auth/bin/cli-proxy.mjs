#!/usr/bin/env node

import { spawn } from 'node:child_process';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const cliPath = require.resolve('@zeroopensource/zero-cli/bin/cli-proxy.cjs');

spawn(process.execPath, [cliPath, ...process.argv.slice(2)], {
  stdio: 'inherit',
}).on('exit', process.exit);

/**
 * How to create a pipeline when one build produces a "bin" which is used by another build?
 * https://github.com/vercel/turbo/discussions/446
 */
// require('./../dist/zero-id-cli.cjs')
