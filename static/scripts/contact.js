const concert_option = document.getElementById("concert");
const concert_date1 = document.getElementById("concert_date1");
const concert_date2 = document.getElementById("concert_date2");
const concert_date3 = document.getElementById("concert_date3");
const concert_date4 = document.getElementById("concert_date4");

concert_option.addEventListener("change", function() {
    if (concert_option.value === "concert1") {
        concert_date1.classList.remove("hidden");
    } else {
        concert_date1.classList.add("hidden");
    }
});

concert_option.addEventListener("change", function() {
    if (concert_option.value === "concert2") {
        concert_date2.classList.remove("hidden");
    } else {
        concert_date2.classList.add("hidden");
    }
});

concert_option.addEventListener("change", function() {
    if (concert_option.value === "concert3") {
        concert_date3.classList.remove("hidden");
    } else {
        concert_date3.classList.add("hidden");
    }
});

concert_option.addEventListener("change", function() {
    if (concert_option.value === "concert4") {
        concert_date4.classList.remove("hidden");
    } else {
        concert_date4.classList.add("hidden");
    }
});



function customerservice(event) {
  event.preventDefault();
    alert("Your problem has been submitted.");
  
}

