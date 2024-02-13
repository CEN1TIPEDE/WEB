var defaultFruitsList = document.getElementById("defaultFruits").getElementsByTagName("li");
var defaultFruits = [];
for (var i = 0; i < defaultFruitsList.length; i++) {
    defaultFruits.push(defaultFruitsList[i].textContent);
}
var userFruits = [];

function LoadFruits() {
    document.getElementById("fruits").innerHTML = listFruits(userFruits); // Display user-added fruits
}

function addFruits() {
    var fruit = prompt("Let's add another favorite fruit :");
    userFruits.push(fruit);
    document.getElementById("fruits").innerHTML = listFruits(userFruits); // Update displayed fruits
}

function listFruits(listFruits) {
    var fruitsList = "<ul>";
    for (var i = 0; i < listFruits.length; i++) {
        var fruit = ("" + listFruits[i]).trim();
        if (fruit.length != 0) {
            fruitsList += "<li>" + fruit + "</li>";
        }
    }
    fruitsList += "</ul>";
    return fruitsList;
}
