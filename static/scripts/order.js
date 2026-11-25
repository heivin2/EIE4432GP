/*
Student ID: 26015839D
Student Name: Chui Chun Hei
*/

function getSelectedValue(name) {
  const selected = document.querySelector("input[name='" + name + "']:checked");
  return selected ? selected.value : "";
}

function calculatePrice() {
  let price = 0;
  const drink_select = document.getElementById("drink");
  const drink = drink_select.value;
  const size = getSelectedValue("size");
  console.log(drink);
  console.log(size);
  if (drink.trim() === "") {
    // Only warn when the user picks a size before choosing a drink.
    if (size) {
      alert("Please select a drink first.");
      document.querySelectorAll("input[name='size']").forEach((option) => {
        option.checked = false;
      });
    }
  } else if (drink === "bubble-milktea") {
    price === 30;
    if (size === "large") {
      price += 10;
      console.log(price);
    } else if (size === "medium") {
      price += 5;
    }
    document.getElementById("price").textContent = price;
  } else if (drink === "iced-latte") {
    price === 28;
    if (size === "large") {
      price += 10;
    } else if (size === "medium") {
      price += 5;
    }
    document.getElementById("price").textContent = price;
  }
}
function validateForm() {
  const name = document.getElementById("name").value.trim();
  if (name == "") {
    alert("Please enter your name.");
    return false;
  }
  if (document.getElementById("drink").value.trim() == "") {
    alert("Please select a drink first.");
    return false;
  }
  return true;
}
function placeOrder(event) {
  event.preventDefault();
  if (!validateForm()) {
    return;
  } else {
    const orderData = [
      document.getElementById("name").value,
      document.getElementById("drink").value,
      getSelectedValue("size"),
      getSelectedValue("ice"),
      getSelectedValue("sweetness"),
    ];

    // 2. Retrieve existing orders from localStorage (or start with an empty array)
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // 3. Add the new order array to the list
    orders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(orderData));
    alert("Order placed successfully! Thank you for your order.");
  }
}
