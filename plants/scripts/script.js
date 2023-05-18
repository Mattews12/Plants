
// Burger menu

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav')
    const menuCloseItem = document.querySelector('.nav-close');
    const menuLinks = document.querySelectorAll('.nav-item');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    });
    if (window.innerWidth <= 380) {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('nav-active');
            });
        }
    }
}());


// Blur to the cards
let serviceButton = document.querySelectorAll('.s-btn');
let gardenCare = document.querySelectorAll('.garden');
let planting = document.querySelectorAll('.planting');
let lawnCare = document.querySelectorAll('.lawn');


serviceButton.forEach((button) =>
    button.addEventListener('click', () => {
        button.classList.toggle('s-btn-active');
    })
);

const blur = (pick) => {
    pick.classList.toggle("blur")
}

serviceButton.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("gardens-btn")) {
            planting.forEach(blur);
            lawnCare.forEach(blur);
        } else if (button.classList.contains("lawn-btn")) {
            planting.forEach(blur);
            gardenCare.forEach(blur);
        } else if (button.classList.contains("planting-btn")) {
            gardenCare.forEach(blur);
            lawnCare.forEach(blur);
        }
    });
});


// Accardion 
let accordions = document.getElementsByClassName('arrow');
let closedPanels = document.querySelectorAll('.box-list');
let panels = document.querySelectorAll('.tab-content');
let arrows = document.querySelectorAll('.arrow');
for (let i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        // Перед тем как раскрыть нужную нам панель, мы пробегаем по всем панелям и закрываем их
        for (let x = 0; x < accordions.length; x++) {
            if (accordions[x] !== accordions[i]) {

                panels[x].classList.remove('tab-content-show');
                closedPanels[x].classList.remove('box-list-active');
                arrows[x].classList.remove('arrow-active');

            } else {
                // Тут мы раскрываем небходимую панель
                panels[i].classList.toggle('tab-content-show');
                closedPanels[i].classList.toggle('box-list-active');
                arrows[i].classList.toggle('arrow-active');
            }
        }

    }
}


// Dropdown
let contactDropDown = document.querySelector(".contacts-form");
let contactLi = document.querySelectorAll(".contacts-list-item");
let contactDescription = document.querySelector(".current-form-text");
let contactUl = document.querySelector(".contacts-list");

let contactArrow = document.querySelector(".current-form-arrow");
let contactWrapArrow = document.querySelector(".form-arrow");


let canandaigua = document.querySelector("#canandaigua");
let newyork = document.querySelector("#newyork");
let yonkers = document.querySelector("#yonkers");
let sherrill = document.querySelector("#sherill");


let contactContent = document.querySelectorAll(".contacts-town-content")

contactDropDown.addEventListener("click", () => {
    contactDropDown.classList.toggle("contacts-form-active");
    contactUl.classList.toggle("contacts-list-active");
    contactArrow.classList.toggle("current-form-arrow-active");
    contactWrapArrow.classList.toggle("form-arrow-active");
});

contactLi.forEach((element) => {
    element.addEventListener("click", () => {
        contactDescription.textContent = element.textContent;
        contactContent.forEach((element) => {
            element.classList.remove("contacts-town-content-active");
        });
        if (element.id == "canand") {
            canandaigua.classList.toggle("contacts-town-content-active");
        } else if (element.id == "newy") {
            newyork.classList.toggle("contacts-town-content-active");
        } else if (element.id == "yonk") {
            yonkers.classList.toggle("contacts-town-content-active");
        } else if (element.id == "sher") {
            sherrill.classList.toggle("contacts-town-content-active");
        }
    });
});

function part1() {
    console.log(`Part 1

    Вёрстка валидная +10
    Вёрстка семантическая +20
    Вёрстка соответствует макету +48
    Требования к css + 12
    Интерактивность, реализуемая через css +20
    100 / 100`);
}

function part2() {
    console.log(`Part 2

    Вёрстка соответствует макету. Ширина экрана 768px +20
    Вёрстка соответствует макету. Ширина экрана 380px +23
    Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15
    На ширине экрана 380рх и меньше реализовано адаптивное меню +22
    80 / 85`);
    

}

function part3() {
    console.log(`Part 3

    При нажатии на кнопки происходит смена фокуса на услугах в разделе service +30
    Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах +50
    В разделе contacts реализован select с выбором городов +25
    105 / 125`);
}

part1();
part2();
part3();


