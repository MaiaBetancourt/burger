// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".burger-status").on("click", function (event) {
    var id = $(this).data("id");
    var toEat = $(this).data("toeat");

    var newEatState = {
      devoured: 1,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState,
    }).then(function () {
      console.log("changed status to", toEat);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      // devoured: $("[burger_name=devoured]:checked").val(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});