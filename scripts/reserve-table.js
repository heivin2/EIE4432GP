$(document).ready(function () {
    let bookedTables = JSON.parse(localStorage.getItem("bookedTable")) || [];
    let selectedTable = null;

    function updateTableStatus() {
        $(".table").each(function () {
            const tableId = $(this).attr("id");
            if (bookedTables.includes(tableId)) {
                $(this).addClass("booked");
            }
        });
    }
    updateTableStatus();
    $(".table").on("click", function () {
        const tableId = $(this).attr("id");
        if (bookedTables.includes(tableId)) {
            alert(`Table ${tableId} is not available. Please select another table.`);
            selectedTable = null;
            $("#selected-table").text("Click a Table to book");
            $("#booking-buttons").addClass("d-none");
            return;
        }
        selectedTable = tableId;
        $("#selected-table").text(`Do you want to book Table ${selectedTable}?`);
        $("#booking-buttons").removeClass("d-none");
    });
    $("#confirm-btn").on("click", function () {
        if (selectedTable === null) return;
        if (!bookedTables.includes(selectedTable)) {
            bookedTables.push(selectedTable);
        }
        localStorage.setItem("bookedTable", JSON.stringify(bookedTables));
        $(".table").each(function () {
            if ($(this).attr("id") === selectedTable) {
                $(this).addClass("booked");
            }
        });
        $("#selected-table").text(`Table ${selectedTable} is booked successfully!`);
        $("#booking-buttons").addClass("d-none");
        selectedTable = null;
    });

    $("#dismiss-btn").on("click", function () {
        selectedTable = null;
        $("#selected-table").text("Click a Table to book");
        $("#booking-buttons").addClass("d-none");
    });
});

