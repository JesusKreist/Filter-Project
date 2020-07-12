const el = document.getElementsByClassName("store-item");
const inputBar = document.getElementById("search-item");
const filterButtons = document.getElementsByClassName("filter-btn");

const setBlock = (event) => {
    if (event) {
        event.preventDefault();
    }
    for (let i = 0; i < 12; i++) {
        el[i].style.display = "block";
    }
};


const filtering = (inputValue) => {
    setBlock();
    for (let i = 0; i < 12; i++) {
        let storeItem = el[i].dataset.item;
        if ((!storeItem.includes(inputValue))) {
            el[i].style.display = "none";
        }
    }
};

const displayValue = (event) => {
    if (event.keyCode === 13) {
        setBlock();
        let myInput = inputBar.value.toLowerCase();
        event.preventDefault();
        filtering(myInput);
    }

};

const makeHandler = (param) => {
    return function (event) {
        event.preventDefault();
        filtering(param);
    };
};



for (let i = 1; i < filterButtons.length; i++) {
    // gets all the items i.e cakes, doughnuts... and sets them to handlerParam per loop
    let handlerParam = filterButtons[i].dataset.filter;
    filterButtons[i].addEventListener("click", makeHandler(handlerParam));
};

filterButtons[0].addEventListener("click", setBlock);
inputBar.addEventListener("keyup", displayValue);
