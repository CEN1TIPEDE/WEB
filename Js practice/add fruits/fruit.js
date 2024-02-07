var fruits = ["Apple","Orange","Banana"];

function LoadFruits(){
    document.getElementById("fruits").innerHTML = listFruits(fruits);
}

function addFruits(){
    var fruit = prompt("Let's add another favorite fruit :");
    fruits[fruits.length] = fruit;
    document.getElementById("fruits").innerHTML = listFruits(fruits);
}

function listFruits(listFruits){
    var fruitsList = "List of my favorite fruit :\n<ul>";
    //list items here
    for(i=0 ; i<listFruits.length; i++){
        var fruit = ("" + listFruits[i]).trim(); 
        if(fruit.length != 0){
            fruitsList += "<li>" + fruit + "<\/li>";
        }
    }

    fruitsList += "<\/ul>";

    return fruitsList;
}