module.exports = (author) => {
  const Author = require("../controllers/author.controller");
  author.get("/getauthor", Author.getauthor);
};
