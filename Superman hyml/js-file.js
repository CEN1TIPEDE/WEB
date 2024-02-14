// var value = document.getElementsById("val").values;


function checkValue() {
    var B1val = document.getElementById("B1").value;
    var B2val = document.getElementById("B2").value;
    var P1val = document.getElementById("P1").value;
    var P2val = document.getElementById("P2").value;
    var K1val = document.getElementById("K1").value;
    var K2val = document.getElementById("K2").value;
    var count = 0;//check if user fill 5 boxes

    if(count == 5){
        if (B1val == ""){
            var B1 = (((B2val * P2val) * K1val) / (K2val * P1val));
            document.getElementById("B1").value = B1;

        // }else if(B2val == "") {
        //     var B2 = (((B2val * P2val) * K1val) / (K2val * P1val));
        //     document.getElementById("B1").value = B1;
        
        // }else if(B1val == "") {
        //     var B1 = (((B2val * P2val) * K1val) / (K2val * P1val));
        //     document.getElementById("B1").value = B1;

    } else{
        var advice = prompt("Please fill in boxes at lest 5 boxes before calculate");
    }
}

// function calMethod(){
//     for(i = 0 ; i<value.length ; i++){
//         var result1 = ((B1*P1)/K1);
//         var result2 = ((P2*B2)/K2);