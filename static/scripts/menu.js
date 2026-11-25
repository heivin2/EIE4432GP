$(document).ready(function () {
    $.get("assets/drink-menu.json", function (data) {
        console.log(data);
  	    data.forEach(function (drink) {
            const drinkCard = `
                    <div class="col">
                        <div class="card h-100">
                            <img class="card-img-top" src="${drink.image}" >
                            <div class="card-body" style="text-align: left;">
                                <h5 class="drink-name"><strong>${drink.name}</strong></h5>
                                <span class="drink-type badge bg-success mb-2">${drink.type}</span>
                                <p>${drink.price}</p>
                            </div>
                        </div>
                    </div>`;
                    $("#drink-menu").append(drinkCard);
        })
     }).fail(function (error) {
        console.error("Failed to fetch drink menu data:", error);
	    $("#drink-menu").html("Failed to fetch drink menu. Please try again later.");
    });

     
});

