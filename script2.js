


window.onload = () => {
    main()
}

function main() {
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click', function () {
        const bgcolor = generateHexColor();
        output.value = bgcolor;
        root.style.backgroundColor = bgcolor;
    })
};

function generateHexColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}