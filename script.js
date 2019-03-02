


function calculateTip() {
var totalCost = document.querySelector("#total-cost input[type=number]").value;
var selectedService = document.querySelector("#service-type select").value;   
var billShare = document.querySelector("#bill-share input[type=number]").value;

var tipValue =  parseInt(totalCost) * parseInt(selectedService) / 100 /parseInt(billShare);
return tipValue;
}

var button = document.querySelector("#button-container button");
button.addEventListener("click" ,function (event) {
    event.preventDefault();
    calculateTip();
    button.innerHTML = calculateTip() + "$ each!";
});















