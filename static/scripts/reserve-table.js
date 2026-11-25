/*
Student ID: 26015839D
Student Name: Chui Chun Hei
*/

$(document).ready(function () {
    let bookedTables = JSON.parse(localStorage.getItem("bookedTable")) || [];
    let selectedTable = null;

    function updateTableStatus() {
    $(".table").each(function () {
      const tableId = $(this).attr("id");
      if (bookedTables.includes(tableId)) {
        $(this).addClass("booked");
    }
      if(selectedTable != null){
      if(selectedTable.includes(tableId)){
        $(this).addClass("booked");
      }
    }
});
}
updateTableStatus();
$(".table").on("click", function () {
    if (selectedTable !=null)
    {
        ($(`#${selectedTable}`).removeClass("booked"));
    }
    const tableId = $(this).attr("id");
    if (bookedTables.includes(tableId)) {
        alert(`Table ${tableId} is not available. Please select another table.`);
        selectedTable = null;
        $("#selected-table").text("Click a Table to book");
        $("#booking-buttons").addClass("d-none");
        return;
    }
    
    selectedTable = tableId;
    updateTableStatus();
    $("#selected-table").text(`Do you want to book Table ${selectedTable}?`);
    $("#booking-buttons").removeClass("d-none");
    $("#tips").addClass("d-none");
    $(this).addClass("booked");
  });
  $("#confirm-btn").on("click", function () {
    bookedTables.push(selectedTable);
    localStorage.setItem("bookedTable", JSON.stringify(bookedTables));
    updateTableStatus();
    $("#selected-table").text(`Table ${selectedTable} is booked successfully!`);
    selectedTable = null;
    $("#booking-buttons").addClass("d-none");
    $("#tips").removeClass("d-none");
});
  $("#dismiss-btn").on("click", function () {
    ($(`#${selectedTable}`).removeClass("booked"));
    selectedTable = null;
    $("#selected-table").text("Click a Table to book");
    $("#booking-buttons").addClass("d-none");
    $("#tips").removeClass("d-none");
    updateTableStatus();
});
});




