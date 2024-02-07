const name = document.getElementById("name-id");
const labelContainer = document.getElementById('labelContainer');
let switchMode = document.getElementById('themeSwitch');
let labelCount = 0;

// Смена темы

switchMode.onclick = function () {
    let theme = document.getElementById('theme');

    if (theme.getAttribute("href") == "css/theme-light.css")
        theme.href = "css/theme-dark.css";
    else
        theme.href = "css/theme-light.css";
};


// Проверка на тип

function validName() {
    if (isNaN(name.value.charAt(0)))
        createRandomLabel();

    else
        alert('Введи текст епта');
    
};

// Создание рандомного label



function createRandomLabel() {
    if (labelCount >= 3) {
        labelCount = 0;
        labelContainer.innerHTML = '';
};

fetch('/assets/words.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            const randomLine = lines[Math.floor(Math.random() * lines.length)];
            const labelContainer = document.getElementById('labelContainer');
            const label = document.createElement('label');
            label.textContent = `${name.value} - ${randomLine}`;
            labelContainer.appendChild(label);
            labelCount++;
        })
        .catch(error => console.error('Ошибка', error));
};