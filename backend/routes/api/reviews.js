const express = require('express');
const asyncHandler = require('express-async-handler');
const { Vehicle, Review, User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth')

const router = express.Router();

router.get('/:id', restoreUser, asyncHandler(async function (req, res) {
    const reviews = await Review.findAll({
        include: ['Vehicle', 'User']
    })
    return res.json(reviews)
}))

router.post('/:id', restoreUser, asyncHandler(async function(req, res) {
    const { review, rating } = req.body
    const vehicleId = req.params.id
    const userId = req.user.id

   const newReview = await Review.create({
        vehicleId: vehicleId,
        userId: userId,
        review: review,
        rating: rating
    })

    // res.redirect(`/vehicles/${vehicleId}`)
    return res.json({ newReview })
}))

router.put('/:id', restoreUser, asyncHandler(async function(req, res) {
    const reviewId = req.params.id
    const updatedReview = await Review.update({
        where: {
            id: reviewId
        },
    })

    return res.json(updatedReview)
}))

router.delete('/:id', asyncHandler(async function (req, res) {
    const reviewId = req.params.id;
    const review = await Review.findByPk(reviewId);

    await Review.destroy({
        where: {
            id: reviewId
        }
    });
    return res.json({review})
}))

module.exports = router;
