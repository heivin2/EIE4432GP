/*
Student ID: 26015839D
Student Name: Chui Chun Hei
*/

$(document).ready(function () {
    $.get("assets/drink-menu.json", function (data) {  
               console.log(data);
               //Iterates through every object in the data array one by one
  	  data.forEach(function (drink) {
                     // ${drink.name}: Displays the drink title.
        let drinkCard = 
            `
            <div class="col border rounded p-0 overflow-hidden">
                <img src="${drink.image}" class="w-100 h-75 object-fit-cover border rounded">
                <h3 class="mx-1">${drink.name}</h3>
                <span class="p-1 mx-1 text-white bg-success rounded fw-semibold">${drink.type}</span>
            <p class="mx-1">${drink.price}</p>    
            </div>
            `
        ;
        //Injects the newly constructed card HTML at the end of the container element (#drink-menu).           //Each item in the loop adds another column to the grid.
            $("#drink-menu").append(drinkCard);
        });
    }).
    fail(function (error) {
        // Fail Case Handling Here
	  // Error: handle the failed AJAX request
	    $("#drink-menu").html("<span class='p-2 bg-danger-subtle text-body rounded w-auto'>Failed to fetch drink menu. Please try again later.</span>");
        console.error("Failed to fetch drink menu data:", error);
        return;
    });
});
