const express = require("express");
const router = express.Router();
const {
  registerPage,
  loginPage,
  homePage,
  aboutPage,
  accountPage,
  articlePage,
  viewArticle,
} = require("../controllers/pages");

router.get("/", registerPage);
router.get("/login", loginPage);
router.get("/home", homePage);
router.get("/about", aboutPage);
router.get("/account", accountPage);
router.get("/article", articlePage);
router.get("/view-article", viewArticle);

module.exports = router;
