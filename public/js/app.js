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
        `<h4>Hi ${name}! Do you have any pets?</h4><label for="yes">Yes </label><input type="radio" name="hasPets" id="yes" value="yes"><label for="no">No </label><input type="radio" name="hasPets" id="no" value="no"><button id="question3">Next</button>`
      );
      break;
    case "question3":
      hasPets = $("input:checked").val();
      console.log(hasPets);
      $("#survey").empty();
      $("#survey").append(
        `<h4>What kind of challenge are you looking for?</h4><label for="easy">Easy </label><input type="radio" name="difficulty" id="easy" value="easy"><label for="moderate">Moderate </label><input type="radio" name="difficulty" id="moderate" value="moderate"><label for="difficult">Difficult </label><input type="radio" name="difficulty" id="difficult" value="difficult"><button id="question4">Next</button>` // pictures/icons to represent difficulty here
      );
      break;
    case "question4":
      difficulty = $("input:checked").val();
      console.log(difficulty);
      $("#survey").empty();
      $("#survey").append(
        `<h4>At what temperature do you keep your home?</h4><label for="lt60">Less than 60&deg; </label><input type="radio" name="temperature" id="lt60" value="less than 60"><label for="60-70">Between 60&deg; - 70&deg; </label><input type="radio" name="temperature" id="60-70" value="between 60-70"><label for="gt70">Greater than 70&deg; </label><input type="radio" name="temperature" id="gt70" value="greater than 70"><button id="question5">Next</button>`
      );
      break;
    case "question5":
      temperature = $("input:checked").val();
      console.log(temperature);
      $("#survey").empty();
      $("#survey").append(
        `<h4>How much natural light is there in your home?</h4><label for="low">Low </label><input type="radio" name="light" id="low" value="low"><label for="medium">Medium</label><input type="radio" name="light" id="medium" value="medium"><label for="high">High </label><input type="radio" name="light" id="high" value="high"><button id="question6">Next</button>`
      );
      break;
    case "question6":
      light = $("input:checked").val();
      console.log(light);
      $("#survey").empty();
      $("#survey").append(
        `<h4>What kind of plant are you looking for?</h4><label for="flower">Flower </label><input type="radio" name="plantType" id="flower" value="flower"><label for="succulent">Succulent </label><input type="radio" name="plantType" id="succulent" value="succulent"><label for="herb">Herb </label><input type="radio" name="plantType" id="herb" value="herb"><label for="fern">Fern </label><input type="radio" name="plantType" id="fern" value="fern"><button id="submit">Submit!</button>`
      );
      break;
    case "submit":
      plantType = $("input:checked").val();
      console.log(plantType);
      $("#survey").empty();
  }
});
