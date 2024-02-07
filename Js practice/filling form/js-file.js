function billingFunction(){
    //if checkbox is check ,we'll copy and paste else we leave them be
    if(document.getElementById("same").checked){
        // xxxxx.value = ...;
        // yyyyy.value = ...;
        document.getElementById("billingName").value = document.getElementById("shippingName").value;
        document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
    } else{
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
}