import * as PIXI from 'pixi.js';

const app = new PIXI.Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1,
    backgroundColor: 0x2F2F2F
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