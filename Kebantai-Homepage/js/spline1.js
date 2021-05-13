const app = new SpeRuntime.Application();

const changeScene = () => {
    if (window.innerWidth <= 500) {
        app.start('./scene2.json');
    } else {
        app.start('./scene1.json')
    }
}

changeScene();

window.addEventListener('resize', () => {
    changeScene();
})
