const express = require("express");
const router = express.Router({mergeParams:true});
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewcontroller = require("../controllers/review.js");
const { destroyListing } = require("../controllers/listing.js");

// Reviews
// POST ROUTE
router.post(
    "/" ,
    isLoggedIn,
    validateReview, 
    wrapAsync(reviewcontroller.createReview));

// delete review
router.delete(
    '/:reviewId' ,
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewcontroller.destroyReview));

module.exports = router;