import { version } from '../assets/package.json';
import * as core from '@actions/core';
export async function main() {
  console.log('xxxxxxxx');
  let { $ } = await import('execa');
  let result2 = await $`git tag`;
  console.log(result2.stdout);
  let exist = result2.stdout
    .trim()
    .split(/\r\n|\n/)
    .some((item) => item === version);
  if (exist) {
    console.log('相同');
    return;
  }
  console.log(version);
  // await $({ stdio: 'inherit' })`npm run local-publish`;
  // await $({ stdio: 'inherit' })`git tag ${version}`;
  // await $({ stdio: 'inherit' })`git push origin ${version}`;
  process.env['VERSION'] = version;
  console.log(process.env);
  core.setOutput('VERSION', version);
  return { version };
}
main();
