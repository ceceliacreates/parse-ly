//declares variables for survey values globally
let name;
let hasPets;
let difficulty;
let temperature;
let light;
let plantType;
let potSize;

//button event listener with switch case for question# id
$("#survey").on("click", "button", function(event) {
  event.preventDefault();
  const buttonId = $(this).attr("id");
  switch (buttonId) {
    case "question2":
      name = $("#name").val();
      $("#survey").empty();
      $("#survey").append(
        `<h4>Hi ${name}! Do you have any pets?</h4><label for="yes">Yes</label> <input type="radio" name="hasPets" id="yes" value="yes"><label for="no">No </label><input type="radio" name="hasPets" id="no" value="no"><button id="question3">Next</button>`
      );
      break;
    case "question3":
      hasPets = $("input:checked").val();
      $("#survey").empty();
      $("#survey").append(
        `<h4>What kind of challenge are you looking for?</h4><label for="easy">Easy </label><input type="radio" name="difficulty" id="easy" value="easy"><label for="moderate">Moderate </label><input type="radio" name="difficulty" id="moderate" value="moderate"><label for="difficult">Difficult </label><input type="radio" name="difficulty" id="difficult" value="difficult"><button id="question4">Next</button>` // pictures/icons to represent difficulty here
      );
      break;
    case "question4":
      difficulty = $("input:checked").val();
      $("#survey").empty();
      $("#survey").append(
        `<h4>At what temperature do you keep your home?</h4><label for="lt60">Less than 60&deg; </label><input type="radio" name="temperature" id="lt60" value="less than 60"><label for="60-70">Between 60&deg; - 70&deg; </label><input type="radio" name="temperature" id="60-70" value="between 60-70"><label for="gt70">Greater than 70&deg; </label><input type="radio" name="temperature" id="gt70" value="greater than 70"><button id="question5">Next</button>`
      );
      break;
    case "question5":
      temperature = $("input:checked").val();
      $("#survey").empty();
      $("#survey").append(
        `<h4>How much natural light is there in your home?</h4><label for="lowLight">Low Light </label><input type="radio" name="light" id="lowLight" value="low light"><label for="medium Light">Medium Light</label><input type="radio" name="light" id="medium Light" value="medium Light"><label for="highLight">High Light </label><input type="radio" name="light" id="highLight" value="high light"><button id="question6">Next</button>`
      );
      break;
    case "question6":
      light = $("input:checked").val();
      $("#survey").empty();
      $("#survey").append(
        `<h4>What kind of plant are you looking for?</h4><label for="flower">Flower</label><input type="checkbox" name="plantType" id="flower" value="flower"><label for="succulent">Succulent </label><input type="checkbox" name="plantType" id="succulent" value="succulent"><label for="herb">Herb </label><input type="checkbox" name="plantType" id="herb" value="herb"><label for="fern">Fern </label><input type="checkbox" name="plantType" id="fern" value="fern"><button id="question7">Next</button>`
      );
      break;
    case "question7":
      plantType = [];
      console.log($("input:checked"));
      // const checkedArr = $("input:checked");

      // checkedArr.forEach(plant => {
      //   plantType.push(plant.val())
      // });

      $(':checkbox:checked').each(function(i){
        plantType[i] = $(this).val();
      });


      console.log(plantType);
      $("#survey").empty();
      $("#survey").append(
        `<h4>What pot size would you prefer?</h4><label for="small">Small </label><input type="radio" name="potSize" id="small" value="small"><label for="medium">Medium </label><input type="radio" name="potSize" id="medium" value="medium"><label for="large">Large </label><input type="radio" name="potSize" id="large" value="large"><label for="noPreference">No preference</label><input type="radio" name="potSize" id="noPreference" value="noPreference"><button id="submit">Submit!</button>`
      );
      break;
    case "submit":
      potSize = $("input:checked").val();
      $("#survey").empty();
      let request = {
        hasPets: hasPets,
        difficulty: difficulty,
        temperature: temperature,
        light: light,
        plantType: plantType,
        potSize: potSize
      };
      console.log(request);
  }
});
