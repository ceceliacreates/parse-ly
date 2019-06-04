$(function() {
  //declares variables for survey values globally
  let name;
  let isPoisonous;
  let difficulty;
  let diffRangeStart;
  let diffRangeEnd;
  let temperature;
  let light;
  let plantType;
  let potSize;

<<<<<<< HEAD
  //button event listener with switch case for question# id
  $('#survey').on('click', 'button', function(event) {
    event.preventDefault();
    const buttonId = $(this).attr('id');
    switch (buttonId) {
      case 'question2':
        name = $('#name').val();
        $('#survey').empty();
        $('#survey').append(
          `<h4>Hi ${name}! Do you have any pets?</h4><label for="yes">Yes </label><input type="radio" name="hasPets" id="yes" value="false"><label for="no">No </label><input type="radio" name="hasPets" id="no" value="true"><button id="question3">Next</button>`
        );
        break;
      case 'question3':
        isPoisonous = $('input:checked').val();
        $('#survey').empty();
        $('#survey').append(
          `<h4>What kind of challenge are you looking for?</h4><label for="easy">Easy </label><input type="radio" name="difficulty" id="easy" value="1"><label for="moderate">Moderate </label><input type="radio" name="difficulty" id="moderate" value="moderate"><label for="difficult">Difficult </label><input type="radio" name="difficulty" id="difficult" value="difficult"><button id="question4">Next</button>` // pictures/icons to represent difficulty here
        );
        break;
      case 'question4':
        difficulty = $('input:checked').val();
        switch (difficulty) {
          case easy: 
          diffRangeStart = 3;
          diffRangeEnd = 5;
          break;
          case moderate:
            diffRangeStart = 6;
            diffRangeEnd = 8;
            break;
            case difficult:
              diffRangeStart = 9;
              diffRangeEnd = 9;
              break;
        }
        $('#survey').empty();
        $('#survey').append(
          `<h4>At what temperature do you keep your home?</h4><label for="lt60">Less than 65&deg; </label><input type="radio" name="temperature" id="lt60" value="cold"><label for="60-70">Between 65&deg; - 75&deg; </label><input type="radio" name="temperature" id="60-70" value="cool"><label for="gt70">Greater than 75&deg; </label><input type="radio" name="temperature" id="gt70" value="warm"><button id="question5">Next</button>`
        );
        break;
      case 'question5':
        temperature = $('input:checked').val();
        $('#survey').empty();
        $('#survey').append(
          `<h4>How much natural light is there in your home?</h4><label for="lowLight">Low Light </label><input type="radio" name="light" id="lowLight" value="low"><label for="medium Light">Medium Light</label><input type="radio" name="light" id="medium Light" value="medium"><label for="highLight">High Light </label><input type="radio" name="light" id="highLight" value="high"><button id="question6">Next</button>`
        );
        break;
      case 'question6':
        light = $('input:checked').val();
        $('#survey').empty();
        $('#survey').append(
          `<h4>What kind of plant are you looking for?</h4><label for="flower">Flower</label><input type="checkbox" name="plantType" id="flower" value="flower"><label for="succulent">Succulent </label><input type="checkbox" name="plantType" id="succulent" value="succulent"><label for="herb">Herb </label><input type="checkbox" name="plantType" id="herb" value="herb"><label for="fern">Fern </label><input type="checkbox" name="plantType" id="fern" value="fern"><button id="question7">Next</button>`
        );
        break;
      case 'question7':
        plantType = [];
        console.log($('input:checked'));
        // const checkedArr = $("input:checked");
=======
//button event listener with switch case for question# id
$("#survey").on("click", "button", function(event) {
  event.preventDefault();
  const buttonId = $(this).attr("id");
  switch (buttonId) {
    case "question2":
      name = $("#name").val();
      $("#survey").empty();
      $("#survey").append(
        `<h4>Hi ${name}! Do you have any pets?</h4><input type="radio" name="hasPets" id="yes" value="yes"><label for="yes">Yes </label><input type="radio" name="hasPets" id="no" value="no"><label for="no">No </label><button id="question3">Next</button>`
      );
      break;
    case "question3":
      hasPets = $("input:checked").val();
      $("#survey").empty();
      $("#survey").append(
        `<h4>What kind of challenge are you looking for?</h4><input type="radio" name="difficulty" id="easy" value="easy"><label for="easy">Easy </label><input type="radio" name="difficulty" id="moderate" value="moderate"><label for="moderate">Moderate </label><input type="radio" name="difficulty" id="difficult" value="difficult"><label for="difficult">Difficult </label><button id="question4">Next</button>`
      );
      break;
    case "question4":
      difficulty = $("input:checked").val();
      $("#survey").empty();
      $("#survey").append(
        `<h4>At what temperature do you keep your home?</h4><input type="radio" name="temperature" id="less-than-65" value="less than 65"><label for="less-than-65">Less than 65&deg; </label><input type="radio" name="temperature" id="65-75" value="between 65-75"><label for="65-75">Between 65&deg; - 75&deg; </label><input type="radio" name="temperature" id="greater-than-75" value="greater than 75"><label for="greater-than-75">Greater than 75&deg; </label><button id="question5">Next</button>`
      );
      break;
    case "question5":
      temperature = $("input:checked").val();
      $("#survey").empty();
      $("#survey").append(
        `<h4>How much natural light is there in your home?</h4><input type="radio" name="light" id="lowLight" value="low light"><label for="lowLight">Low Light </label><input type="radio" name="light" id="medium Light" value="medium Light"><label for="medium Light">Medium Light </label><input type="radio" name="light" id="highLight" value="high light"><label for="highLight">High Light </label><button id="question6">Next</button>`
      );
      break;
    case "question6":
      light = $("input:checked").val();
      $("#survey").empty();
      $("#survey").append(
        `<h4>What kind of plant are you looking for?</h4><input type="checkbox" name="plantType" id="flower" value="flower"><label for="flower">Flower</label><input type="checkbox" name="plantType" id="succulent" value="succulent"><label for="succulent">Succulent </label><input type="checkbox" name="plantType" id="tropical" value="tropical"><label for="tropical">Tropical </label><input type="checkbox" name="plantType" id="fern" value="fern"><label for="fern">Fern </label><input type="checkbox" name="plantType" id="vine" value="vine"><label for="vine">Vine </label><input type="checkbox" name="plantType" id="shrub" value="shrub"><label for="shrub">Shrub </label><input type="checkbox" name="plantType" id="palm" value="palm"><label for="palm">Palm </label><button id="question7">Next</button>`
      );
      break;
    case "question7":
      plantType = [];
      $(":checkbox:checked").each(function(i) {
        plantType[i] = $(this).val();
      });
>>>>>>> 8c5673af1f0171abda96c544b03ca2adcfd09f18

      $("#survey").empty();
      $("#survey").append(
        `<h4>What pot size would you prefer?</h4><input type="radio" name="potSize" id="small" value="small"><label for="small">Small </label><input type="radio" name="potSize" id="medium" value="medium"><label for="medium">Medium </label><input type="radio" name="potSize" id="large" value="large"><label for="large">Large </label><input type="radio" name="potSize" id="noPreference" value="noPreference"><label for="noPreference">No preference </label><button id="submit">Submit!</button>`
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
      getPlantMatch();
  }

<<<<<<< HEAD
        console.log(plantType);
        $('#survey').empty();
        $('#survey').append(
          `<h4>What pot size would you prefer?</h4><label for="small">Small </label><input type="radio" name="potSize" id="small" value="small"><label for="medium">Medium </label><input type="radio" name="potSize" id="medium" value="medium"><label for="large">Large </label><input type="radio" name="potSize" id="large" value="large"><label for="noPreference">No preference</label><input type="radio" name="potSize" id="noPreference" value="noPreference"><button id="submit">Submit!</button>`
        );
        break;
      case 'submit':
        potSize = $('input:checked').val();
        $('#survey').empty();
        let request = {
          "isPoisonous": isPoisonous,
          "diffRangeStart": diffRangeStart,
          "diffRangeEnd": diffRangeEnd,
          "temperature": temperature,
          "light": light,
          plantType: plantType,
          potSize: potSize
        };
        console.log(request);
    }
  });

  $.get('/api/plants').then(function(data) {
    console.log(data);
  });
});
=======
  function getPlantMatch() {
    $.get(function(data) {
      console.log(data.request);
    });
  }
})
})
>>>>>>> 8c5673af1f0171abda96c544b03ca2adcfd09f18
