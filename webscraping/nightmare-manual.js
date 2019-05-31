const cheerio = require('cheerio');
const Nightmare = require('nightmare');
const fs = require('fs');

const nightmare = Nightmare({ show: true });
const url = "https://www.houseplant411.com/houseplant/how-to-grow-a-bird-of-paradise-plant-indoors";

nightmare
    .goto(url)
    .wait('body')
    .evaluate(() => document.querySelector('body').innerHTML)
    .end()
    .then(response => {
        console.log(getData(response));
    }).catch(err => {
        console.log(err);
    });

let getData = html => {
    const $ = cheerio.load(html);
    let data = [];
    let care = [];

    $(".post-meta-value").each((i, element) => {
        care.push($(element).text());
    });

    $("#bodycontent").each((i, element) => {
        data.push({
            commonName: $(element).find(".title").text(),
            scientificName: $(element).find(".resultSpecies").text(),
            lightNeeds: care[0],
            waterNeeds: care[1],
            tempNeeds: `${care[3]} ${care[4]}`,
            soilNeeds: care[8],
            potSize: care[9],
            poisonous: care[13]
        });
    });

    fs.appendFile('plants.json', JSON.stringify(data, null, 2), (err) => {
        if (err) throw err;
    });

    return data;
}