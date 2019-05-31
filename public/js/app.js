//declares variables for survey values globally
let name;
let hasPets;
let difficulty;
let temperature;
let light;
let plantType;

//button event listener with switch case for question# id
$("#survey").on("click", "button", function(event) {
  event.preventDefault();
  const buttonId = $(this).attr("id");
  switch (buttonId) {
    case "question2":
      name = $("#name").val();
      $("#survey").empty();
      $("#survey").append(
        `<h4>Hi ${name}! Do you have any pets?</h4><label for="yes">Yes</label><input type="radio" name="hasPets" id="yes" value="yes"><label for="no">No</label><input type="radio" name="hasPets" id="no" value="no"><button id="question3">Next</button>`
      );
      break;
    case "question3":
        hasPets = $("input:checked").val();
        $("#survey").empty();
        
  }
});
