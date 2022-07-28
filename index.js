const { runServer } = require("verdaccio");

const PORT = process.env.PORT || 4000;

runServer("./config.yml").then((app) => {
  app.listen(PORT, (event) => {
    console.log(`Verdaccio is now running on port ${PORT}`);
  });
});
