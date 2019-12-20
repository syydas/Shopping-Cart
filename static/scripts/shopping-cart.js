var carProducts = [{
        "id": 1,
        "name": "英雄牌 钢笔",
        "count": 1,
        "price": 69,
        "checked": false
    },
    {
        "id": 2,
        "name": "晨光牌 铅字笔",
        "count": 2,
        "price": 5.5,
        "checked": true
    },
    {
        "id": 3,
        "name": "晨光牌 铅笔",
        "count": 1,
        "price": 2,
        "checked": false
    },
    {
        "id": 4,
        "name": "狗熊牌 橡皮擦",
        "count": 1,
        "price": 1,
        "checked": false
    },
    {
        "id": 5,
        "name": "瑞士牌 双肩书包",
        "count": 1,
        "price": 199,
        "checked": true
    },
    {
        "id": 6,
        "name": "晨光牌 作业本",
        "count": 5,
        "price": 2.5,
        "checked": false
    }
]

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
                    var hasSelected = itemInfo.checked ? "checked" : "";
                    var checkbox = document.createElement("input");
                    checkbox.setAttribute("type", "checkbox");
                    checkbox.setAttribute("id", itemInfo.id);
                    checkbox.checked = hasSelected;
                    itemCol.appendChild(checkbox);
                    break;
                case 1:
                    itemCol.innerHTML = itemInfo.name
                    break;
                case 2:
                    itemCol.innerHTML = itemInfo.price;
                    break;
                case 3:
                    itemCol.innerHTML = '<button>-</button>' +
                        '<input type = "text" value = "1" />' +
                        '<button>+</button>';
                    break;
                default:
                    var total = document.createElement("span");
                    total.innerHTML = (itemInfo.price *= itemInfo.count)
                    itemCol.appendChild(total);
                    break;
            }
        }
    }
}

addItem();