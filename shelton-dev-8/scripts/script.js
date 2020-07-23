$(function () {
  $("#btnId").on("click", function (e) {
    e.preventDefault();
    var getInput = $("#textInputId").val();

    if (getInput) {
      $("#textInputId").val("");
      $("#someOtherDivId").html("<b>" + getInput + "</b>");
    }
  });
});