const cheerio = require('cheerio');
const Nightmare = require('nightmare');

const nightmare = Nightmare({ show: true });

let pageNumber = 1;
let url = "https://www.houseplant411.com/houseplant/page/" + pageNumber;

nightmare
    .goto(url)
    .wait('body')
    .evaluate(() => document.querySelector('body').innerHTML)
    .click('.resultsInd a')
    .end()
    .then(response => {
        console.log(getData(response));
    }).catch(err => {
        console.log(err);
    });

let getData = html => {
    data = [];
    const $ = cheerio.load(html);

    $(".resultsMid").each((i, element) => {
        data.push({
            title: $(element).find(".resultName").text(),
            image: $(element).find("img").attr("src"),
            link: $(element).find("a").attr("href")
        });
    });

    return data;
}
