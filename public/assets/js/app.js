$(document).ready(function () {
  $(".devour-form").on("submit", function (event) {
    event.preventDefault();
    var id = $(this).children(".id").val();
    console.log(id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + id,
    }).then(function (data) {
      location.reload();
    });
  });
});
