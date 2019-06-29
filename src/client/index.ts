import * as PIXI from 'pixi.js';

let type: string = 'WebGL';

if (!PIXI.utils.isWebGLSupported())
    type = 'Canvas';

PIXI.utils.sayHello(type);