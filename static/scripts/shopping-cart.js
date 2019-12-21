var carProducts = [{
        id: 1,
        name: "英雄牌 钢笔",
        count: 1,
        price: 69,
        checked: false
    },
    {
        id: 2,
        name: "晨光牌 铅字笔",
        count: 2,
        price: 5.5,
        checked: true
    },
    {
        id: 3,
        name: "晨光牌 铅笔",
        count: 1,
        price: 2,
        checked: false
    },
    {
        id: 4,
        name: "狗熊牌 橡皮擦",
        count: 1,
        price: 1,
        checked: false
    },
    {
        id: 5,
        name: "瑞士牌 双肩书包",
        count: 1,
        price: 199,
        checked: true
    },
    {
        id: 6,
        name: "晨光牌 作业本",
        count: 5,
        price: 2.5,
        checked: false
    }
];

var itemList = document.getElementsByTagName("tbody")[0];

function addItem() {
    for (var item = 0; item < carProducts.length; item++) {
        var itemInfo = carProducts[item];
        var itemRow = document.createElement("tr");
        itemList.appendChild(itemRow);
        for (var col = 0; col < document.getElementsByTagName("th").length; col++) {
            var itemCol = document.createElement("td");
            itemRow.appendChild(itemCol);
            switch (col) {
                case 0:
                    addChecxbox(itemInfo, itemCol);
                    break;
                case 1:
                    itemCol.innerHTML = itemInfo.name;
                    break;
                case 2:
                    itemCol.innerHTML = itemInfo.price;
                    break;
                case 3:
                    addItemCount(itemInfo, itemCol);
                    break;
                default:
                    addEachTotalPrice(itemInfo, itemCol);
                    break;
            }
        }
    }
}

function addChecxbox(info, col) {
    var hasSelected = info.checked ? "checked" : "";
    col.innerHTML = `<input class = "select" type = "checkbox" name = "has-selected" ${hasSelected} />`;
}

function addItemCount(info, col) {
    col.innerHTML =
        `<button class = "minus-Btn">-</button>` +
        `<input class = "item-num" type = "text" value = "${info.count}" />` +
        `<button class = "plus-Btn">+</button>`;
}

function addEachTotalPrice(info, col) {
    col.innerHTML = `<span class = "total">${(info.price *= info.count)}<span>`;
}

var shoppCart = document.getElementsByTagName("table")[0];
shoppCart.addEventListener("click", function(e) {
    var event = e.target;
    var eventName = event.className;
    var tdElement = event.parentNode;
    switch (eventName) {
        case "minus-Btn":
            reduce(tdElement);
            eachTotal(tdElement);
            allTotal();
            break;
        case "plus-Btn":
            add(tdElement);
            eachTotal(tdElement);
            allTotal();
            break;
        case "select":
            allTotal();
            break;
        case "check-all":
            allChoose();
            break;
    }
});

function reduce(element) {
    element.childNodes[1].value--;
    console.log(element.childNodes[1]);
    if (element.childNodes[1].value <= 0) {
        element.parentNode.remove();
    }
}

function add(element) {
    element.childNodes[1].value++;
}

function eachTotal(element) {
    var price = element.previousSibling.innerHTML;
    var count = element.childNodes[1].value;
    element.nextSibling.childNodes[0].innerHTML = price * count;
}

var selected = document.getElementsByName("has-selected");
var chooseAll = document.getElementById("check-all");

function allTotal() {
    var totalCount = document.getElementsByClassName("total-count");
    var totalPrice = document.getElementsByClassName("total-price");
    var itemCount = document.getElementsByClassName("item-num");
    var total = document.getElementsByClassName("total");
    var totalNum = 0;
    var totalMoney = 0;
    for (var i = 0; i < selected.length; i++) {
        if (selected[i].checked) {
            totalNum += parseFloat(itemCount[i].value);
            totalMoney += parseFloat(total[i].innerHTML);
        }
    }
    if (isAllChoose() === true) {
        chooseAll.checked = true;
    } else {
        chooseAll.checked = false;
    }
    totalCount[0].innerHTML = totalNum;
    totalPrice[0].innerHTML = totalMoney;
}

function allChoose() {
    for (var i = 0; i < selected.length; i++) {
        if (chooseAll.checked) {
            selected[i].checked = true;
        } else {
            selected[i].checked = false;
        }
    }
    allTotal();
}

function isAllChoose() {
    var isAllSeleced = true;
    for (var i = 0; i < selected.length; i++) {
        if (!selected[i].checked) {
            isAllSeleced = false;
            break;
        }
    }
    return isAllSeleced;
}

addItem();
allTotal();