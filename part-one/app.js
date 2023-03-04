$(function () {
  console.log("Let’s get ready to party with jQuery!");

  $("article img").addClass("image-center");

  $("article").children().last().remove();

  $("#title").css("font-size", function () {
    return Math.random() * 100;
  });

  $("ol").append("<li>This is my li.</li>");

  $("aside").empty().append("<p>Sorry the list existed :(<p/>");

  $(".form-control").on("input", function () {
    $("body").css("background-color", function () {
      return `rgba(${$(".form-control")
        .eq(0)
        .val()},${$(".form-control").eq(1).val()},${$(".form-control").eq(2).val()}) `;
    });
  });

  $("body").on("click", "img", function () {
    this.remove();
  });
});
