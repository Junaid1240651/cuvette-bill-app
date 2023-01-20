var inputText;
var peopleCounter = 0;
var totalTipAmt;
var totalAmt;

function getTip(tipPercentage) {
  inputText = document.getElementById("amtInput").value;

  removeShadowFunction();
  if (tipPercentage == "one") {
    totalTipAmt = (inputText * 5) / 100;
    addShadow(0);
  } else if (tipPercentage == "two") {
    totalTipAmt = (inputText * 10) / 100;
    addShadow(1);
  } else if (tipPercentage == "three") {
    totalTipAmt = (inputText * 15) / 100;
    addShadow(2);
  } else if (tipPercentage == "four") {
    totalTipAmt = (inputText * 25) / 100;
    addShadow(3);
  } else if (tipPercentage == "five") {
    totalTipAmt = (inputText * 50) / 100;
    addShadow(4);
  } else if (tipPercentage == "six") {
    totalTipAmt = (inputText * 75) / 100;
    addShadow(5);
  }
}
function getPeople(people) {
  if (people == "add") {
    peopleCounter++;
    document.getElementById("people").innerHTML = peopleCounter;
  } else if (people == "subtract" && peopleCounter != 0) {
    peopleCounter--;
    document.getElementById("people").innerHTML = peopleCounter;
  }
}

document.getElementById("generateBill").onclick = function () {
  if (inputText == undefined) {
    alert("Please Enter Bill Amount and Select Tip Amount");
  } else {
    totalAmt = inputText * peopleCounter;
    document.getElementById("tipAmt").innerHTML = totalTipAmt + " Rs";
    document.getElementById("totalAmt").innerHTML =
      totalAmt + totalTipAmt + " Rs";
    console.log(totalAmt);
    console.log(totalTipAmt);
    document.getElementById("generateBill").disabled = true;
    totalAmt = 0;
  }
};

document.getElementById("resetBill").onclick = function () {
  peopleCounter = 1;
  totalAmt = 0;
  totalTipAmt = 0;
  document.getElementById("people").innerHTML = peopleCounter;
  document.getElementById("tipAmt").innerHTML = totalTipAmt;
  document.getElementById("totalAmt").innerHTML = totalAmt;
  document.getElementById("amtInput").value = "";
  removeShadowFunction();
  document.getElementById("generateBill").disabled = false;
  console.log(totalAmt);
};

function addShadow(btnNumber) {
  document.querySelectorAll(".tipButton")[btnNumber].classList.add("btnShadow");
}

function removeShadow(btnNumber) {
  document
    .querySelectorAll(".tipButton")
    [btnNumber].classList.remove("btnShadow");
}
function removeShadowFunction() {
  removeShadow(0);
  removeShadow(1);
  removeShadow(2);
  removeShadow(3);
  removeShadow(4);
  removeShadow(5);
}
