import path from 'path';
import fs from 'fs';

// Make sure any symlinks in the project folder are resolved
const appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

const nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .filter(folder => !path.isAbsolute(folder))
  .map(resolveApp);

export default {
  appBuild: resolveApp('build'),
  appHtml: resolveApp('index.html'),
  appIndexJs: resolveApp('es6/index.js'),
  appPackageJson: resolveApp('package.json'),
  appLib: resolveApp('lib'),
  yarnLockFile: resolveApp('yarn.lock'),
  appNodeModules: resolveApp('node_modules'),
  ownNodeModules: resolveApp('node_modules'),
  nodePaths,
};

