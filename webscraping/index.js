const axios = require('axios');
const cheerio = require('cheerio');

let pageNumber = 1;
let url = "https://www.houseplant411.com/houseplant/page/" + pageNumber;

axios.get(url).then(response => {
    console.log(response.data);

    let getData = html => {
        data = [];
        const $ = cheerio.load(html);
        $(".resultsMid").each((i, element) => {
            data.push({
                title: $(element).find(".resultName").text(),
                link: $(element).find("a").attr("href")
            });
        });
        console.log(data);
    }

    getData(response.data);

}).catch(error => {
    console.log(error);
});