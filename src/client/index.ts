import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
    antialias: true,
    backgroundColor: 0x2F2F2F,
    height: 256,
    resolution: 1,
    transparent: false,
    width: 256,
});

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

window.onload = () => {
    const rootNode = document.getElementById('root');

    if (rootNode === null) {
        console.error('Could not mount view.');
        return;
    }

    rootNode.appendChild(app.view);
}
