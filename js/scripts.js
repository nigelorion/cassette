$(document).ready(function() {

  $("#buyerInfo").submit(function(event) {
      var nameAddress = $("#name").val();
      var streetAddress = $("#street").val();
      var cityAddress = $("#city").val();
      var stateAddress = $("#state").val();
      var zipAddress = $("#zip").val();
      var contactNumber = $("#number").val();
      var tapeInput = $("input:radio[name=tape]:checked").val();
      $("#nameOutput").text(nameAddress);
      $("#streetOutput").text(streetAddress);
      $("#cityOutput").text(cityAddress);
      $("#stateOutput").text(stateAddress);
      $("#zipOutput").text(zipAddress);
      $("#numberOutput").text(contactNumber);
      $("#orderReceipt").fadeIn(500);
      event.preventDefault();

    });







});
