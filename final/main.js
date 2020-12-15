var quiltSize = document.getElementById("quiltSize");
var blockSize = document.getElementById("blockSelect");
var submitButton = document.getElementById("submit");
var displayDemensions = document.getElementById("displayDemensions");
var displayBlockAmount = document.getElementById("displayBlockAmount");

var saveButton = document.getElementById("save");

submitButton.addEventListener("click", function(){

    var collection1 = quiltSize.selectedOptions;
    var collection2 = blockSize.selectedOptions;
    var displayDem = "";
    var displayBlock = "";

    for (let i=0; i<collection2.length; i++){
        if (displayDem === ""){
            displayDem = "Quilt size will be "
            displayBlock = "You will need "
    
            var newLabel = collection1[i].label;
            var newCollection = collection2[i].label

            if (newCollection == 3){
                if (newLabel == "baby"){
                    displayDem += "30 X 40 in"
                    displayBlock += "128 blocks"
                }
                if (newLabel == "twin"){
                    displayDem += "40 X 80 in"
                    displayBlock += "325 blocks"
                }
                if (newLabel == "queen"){
                    displayDem += "64 X 80 in"
                    displayBlock += "540 blocks"
                }
                if (newLabel == "king"){
                    displayDem += "80 X 80 in"
                    displayBlock += "702 blocks"
                }
            }
            else if (newCollection == 4){
                if (newLabel == "baby"){
                    displayDem += "24 X 48 in"
                    displayBlock += "72 blocks"
                }
                if (newLabel == "twin"){
                    displayDem += "40 X 80 in"
                    displayBlock += "190 blocks"
                }
                if (newLabel == "queen"){
                    displayDem += "64 X 80 in"
                    displayBlock += "300 blocks"
                }
                if (newLabel == "king"){
                    displayDem += "80 X 80 in"
                    displayBlock += "380 blocks"
                }
            }
            else if (newCollection == 5){
                if (newLabel == "baby"){
                    displayDem += "25 X 45 in"
                    displayBlock += "45 blocks"
                }
                if (newLabel == "twin"){
                    displayDem += "40 X 75 in"
                    displayBlock += "120 blocks"
                }
                if (newLabel == "queen"){
                    displayDem += "60 X 80 in"
                    displayBlock += "192 blocks"
                }
                if (newLabel == "king"){
                    displayDem += "80 X 80 in"
                    displayBlock += "256 blocks"
                }
            }
            else if (newCollection == 6){
                if (newLabel == "baby"){
                    displayDem += "24 X 48 in"
                    displayBlock += "32 blocks"
                }
                if (newLabel == "twin"){
                    displayDem += "40 X 80 in"
                    displayBlock += "91 blocks"
                }
                if (newLabel == "queen"){
                    displayDem += "64 X 80 in"
                    displayBlock += "130 blocks"
                }
                if (newLabel == "king"){
                    displayDem += "80 X 80 in"
                    displayBlock += "182 blocks"
                }
            }
            else if (newCollection == 8){
                if (newLabel == "baby"){
                    displayDem += "24 X 48 in"
                    displayBlock += "18 blocks"
                }
                if (newLabel == "twin"){
                    displayDem += "40 X 80 in"
                    displayBlock += "50 blocks"
                }
                if (newLabel == "queen"){
                    displayDem += "64 X 80 in"
                    displayBlock += "80 blocks"
                }
                if (newLabel == "king"){
                    displayDem += "80 X 80 in"
                    displayBlock += "100 blocks"
                }
            }
            else if (newCollection == 10){
                if (newLabel == "baby"){
                    displayDem += "30 X 40 in"
                    displayBlock += "12 blocks"
                }
                if (newLabel == "twin"){
                    displayDem += "40 X 80 in"
                    displayBlock += "32 blocks"
                }
                if (newLabel == "queen"){
                    displayDem += "64 X 80 in"
                    displayBlock += "48 blocks"
                }
                if (newLabel == "king"){
                    displayDem += "80 X 80 in"
                    displayBlock += "64 blocks"
                }
            }

        }
    }

    displayDemensions.innerHTML = displayDem;
    displayBlockAmount.innerHTML = displayBlock;

    toSave(displayDem, displayBlock)

}, false);

//deletes information
document.getElementById("displayInfo").onreset = function() {myFunction()};

function myFunction() {
  document.getElementById("displayDemensions").innerHTML = "";
  document.getElementById("displayBlockAmount").innerHTML = "";
}

//saves information


document.getElementById("save").onclick = function() {toSave()};
var text = document.getElementById("text");

function toSave(displayDem, displayBlock){

    const info = {
        saveName: text,
        dem: displayDem,
        block: displayBlock,
    }

    if (typeof(Storage) !== "undefined") {
        // Store
        window.localStorage.setItem('saveName', text);
        window.localStorage.setItem('dem', displayDem);
        window.localStorage.setItem('block', displayBlock);

        // Retrieve
        document.getElementById("displaySaved").innerHTML = localStorage.getItem('user');
        
        //document.getElementById("displaySaved2").innerHTML = localStorage.getItem('block');
      } else {
        document.getElementById("displaySaved").innerHTML = "Sorry, your browser does not support Web Storage...";
      }
};