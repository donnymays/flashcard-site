$(document).ready(function() {
  $("h5.card-term").click(function() {
    $(".card-term").toggle();
    $(".card-definition").toggle();
  });
});

$(document).ready(function() {
  $("p.card-definition").click(function() {
    $(".card-term").toggle();
    $(".card-definition").toggle();
  });
});
