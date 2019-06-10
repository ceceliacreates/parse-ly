# Parse.ly :seedling:

An application to survey people looking to become house plant hobbyists that will match you to customized results based off your lifestyle, skill, and preferences. Survey results can be saved for future reference.

### Technologies Used

- Flexbox-Grid CSS Library
- jQuery
- Express
- Sequelize
- Nightmare & Cheerio (webscraping)

### Challenges

- Many plants had multiple values for some table columns, requiring the use of the substring Sequelize query to find the matching value within the array of possible values
- Survey results didn't directly match all data types in the database, requiring the translation of the logic to compare the results and return the correct data
- Querying the database for multiple filters sometimes resulted in too few matches
- The use of a multi-step form without a rendering framework like React required a switch case and button IDs to dynamically render to the DOM while capturing input data

### Future Improvements

- Forum: integrate a forum-like feature where users can share feedback, personal experiences with specific plants, share tips & tricks of plant care
- User validation/login: add validation layer to allow users to create an account to store and save plants for future purchase
- Search all/filter: add another HTML page to view all plants in database, add method to filter so that user may search and see all plants in specified data type

### Team

- [Kim Thorsen](https://github.com/kthor93)
- [Cecelia Martinez](https://github.com/ceceliacreates)
- [Joel Gaeta](https://github.com/JoelGaeta)
- [Fang Yeh](https://github.com/fyeh0)

### Link

[Heroku](https://parse-ly.herokuapp.com/)
