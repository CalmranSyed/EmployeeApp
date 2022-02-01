$(document).ready(function () {
    $("#add-emp").click(function () {
        $("#add-form").toggleClass("d-block d-none");
    });
    $("#update-emp").click(function () {
        $("#update-form").toggleClass("d-block d-none");
    });
    $("#list-emp").click(function () {
        $("#emp-list").toggleClass("d-block d-none");
    });
    $("#search-emp").click(function () {
        $("#search-form").toggleClass("d-block d-none");
    });
    $("#delete-emp").click(function () {
        $("#delete-form").toggleClass("d-block d-none");
    });
});

