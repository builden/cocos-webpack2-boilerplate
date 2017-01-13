import res from './resource';
import HelloWorldScene from './app';
import './ws-test';

const resources = [];
Object.keys(res).forEach((key) => {
  resources.push(res[key]);
});

cc.game.esStart = () => {
  if (!cc.sys.isNative && document.getElementById('cocosLoading')) {
    // If referenced loading.js, please remove it
    document.body.removeChild(document.getElementById('cocosLoading'));
  }

  // Pass true to enable retina display, on Android disabled by default to improve performance
  cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS);

  // Adjust viewport meta
  cc.view.adjustViewPort(true);

  // Uncomment the following line to set a fixed orientation for your game
  // cc.view.setOrientation(cc.ORIENTATION_PORTRAIT);

  // Setup the resolution policy and design resolution size
  cc.view.setDesignResolutionSize(960, 640, cc.ResolutionPolicy.SHOW_ALL);

  // The game will be resized when browser size change
  cc.view.resizeWithBrowserSize(true);

  // load resources
  cc.LoaderScene.preload(resources, () => {
    cc.director.runScene(new HelloWorldScene());
  }, this);
};

if (module.hot) {
  module.hot.accept();
}
