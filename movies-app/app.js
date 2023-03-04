$(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    const title = $("#title").val();
    const rating = $("#rating").val();

    $("body").append(
      `<div><h3>Title: ${title}</h3><p>Rating: ${rating}</p><input class = "delete" type="button" value="Delete"/></div`
    );
    $("form").trigger("reset");
  });

  $("body").on("click", ".delete", function () {
    $(this).parent().remove();
  });
});
