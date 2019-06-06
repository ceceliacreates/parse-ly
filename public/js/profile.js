$("#results").on("click", function (event) {
    event.preventDefault;
    const email = $("#email").val();
    const request = {
        email: email
    };
    $("#profile").empty();
    $.ajax({
        method: "POST",
        url: "/api/users",
        data: request
}).then(function (response) {
    console.log(response);
    response.forEach(function(plant) {
        const name = plant.commonName;
        const petSafe = plant.isPoisonous == 0 ? "Yes" : "No";
        const type = plant.plantType;
        let src;
        switch (type) {
          case "evergreen":
            src = "/assets/evergreen.svg";
            break;
          case "fern":
            src = "/assets/fern.svg";
            break;
          case "flowering":
            src = "/assets/flowering.svg";
            break;
          case "palm":
            src = "/assets/palm.svg";
            break;
          case "shrub":
            src = "/assets/shrub.svg";
            break;
          case "succulent":
            src = "/assets/succulent.svg";
            break;
          case "tropical":
            src = "/assets/tropical.svg";
            break;
          case "vine":
            src = "/assets/vine.svg";
        }
        const light = plant.light;
        const temperature = plant.temperature;
        const needsDirectLight =
          plant.needsDirectLight == "true" ? "Yes" : "No";
        $("#profile").append(
          `<span class="plantCard"><p>Plant Name:${name}</p><p>Safe for Pets? ${petSafe}</p><p>Plant Type: ${type}</p><img src=${src}><p>Light Needs: ${light}</p><p>Needs Direct Light? ${needsDirectLight}</p><p>Best Temperature Range: ${temperature}</p></span>`
        );
      })
});
}
)