/*
Student ID: Kwok Chun Lai
Student Name: 26015388d
*/
function getSelectedValue(name){
      const selected = document.querySelector("input[name='" + name + "']:checked");
  return selected ? selected.value : "";

}

function calculatePrice() {

    const drink = document.getElementById("drink").value;
    const size = getSelectedValue("size");
    const priceElement = document.getElementById("price");


    if (drink === "default") {
        if (size) {
            alert("Please select a drink first.");
            document.querySelectorAll("input[name='size']").forEach((option) => {
                option.checked = false;
            });
        }
        priceElement.textContent = "0";
        return;
    }

    let basePrice = 0;
    if (drink === "bubble-milktea") {
        basePrice = 30;
    } else if (drink === "iced-latte") {
        basePrice = 28;
    }

    let sizeExtra = 0;
    if (size === "medium") {
        sizeExtra = 5;
    } else if (size === "large") {
        sizeExtra = 10;
    }

    let finalPrice = basePrice;
    if (size) {
        finalPrice = basePrice + sizeExtra;
    } else {
        finalPrice = basePrice; 
    }

    priceElement.textContent = finalPrice;
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const drink = document.getElementById("drink").value;
    const size = getSelectedValue("size");
    const ice = getSelectedValue("ice");
    const sweetness = getSelectedValue("sweetness");

    if (name === "") {
    alert("Please enter your name.");
    document.getElementById("name").focus();
    return false;
  }

  if (drink === "default") {
    alert("Please select a drink.");
    document.getElementById("drink").focus();
    return false;
  }
  return true;
}

function placeOrder(event) {

    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    const orderData = {
        name: document.getElementById("name").value.trim(),
        drink: document.getElementById("drink").value,
        size: getSelectedValue("size"),
        ice: getSelectedValue("ice"),
        sweetness: getSelectedValue("sweetness")
    };
    alert("Order placed successfully! Thank you for your order.");
}



