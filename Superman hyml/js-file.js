function checkValue() {
    var B1val = document.getElementById("B1").value;
    var B2val = document.getElementById("B2").value;
    var P1val = document.getElementById("P1").value;
    var P2val = document.getElementById("P2").value;
    var K1val = document.getElementById("K1").value;
    var K2val = document.getElementById("K2").value;
    var count = 0;//check if user fill 5 boxes

    if (B1val == ""){
        var B1 = (((B2val * P2val) * K1val) / (K2val * P1val));
        document.getElementById("B1").value = B1;
        count++;

    }else if(P1val == "") {
        var P1 = (((P2val * B2val) * K1val) / (B1val * K2val));
        document.getElementById("P1").value = P1;
        count++;
        
    }else if(K1val == "") {
        var K1 = (((P2val * B2val) * K1val) / (P2val * B2val));
        document.getElementById("K1").value = K1;
        count++;

    }else if(B2val == "") {
        var B2 = (((B1val * P1val) * K2val) / (K1val * P2val));
        document.getElementById("B2").value = B2;
        count++;
        
    }else if(P2val == "") {
        var P2 = (((B1val * P1val) * K2val) / (K1val * B2val));
        document.getElementById("P2").value = P2;
        count++;
        
    }else if(K2val == "") {
        var K2 = (((B2val * P2val) * K1val) / (B1val * P1val));
        document.getElementById("K2").value = K2;
        count++;
    }

    if(count < 5){
        alert("Please fill in boxes at least 5 boxes before calculate");
        return;
    }
}
