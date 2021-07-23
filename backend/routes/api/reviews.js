const express = require('express');
const asyncHandler = require('express-async-handler');
const { Vehicle, Review } = require('../../db/models');
const { restoreUser } = require('../../utils/auth')

const router = express.Router();

router.get('/:id', restoreUser, asyncHandler(async function (req, res) {
    const reviews = await Review.findAll({
        include: Vehicle
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

// router.put('/:id', restoreUser, asyncHandler(async function(req, res) {
//     const vehicleId = req.params.id;
//     const vehicle = await Vehicle.findByPk(vehicleId);
//     const userId = req.user.id

//     const updated = await Vehicle.update()
// }))

// router.delete('/:id', asyncHandler(async function (req, res) {
//     const vehicleId = req.params.id;
//     const vehicle = await Vehicle.findByPk(vehicleId);

//     await Vehicle.destroy({
//         where: {
//             id: vehicleId
//         }
//     });
//     return res.json({vehicle})
// }))

module.exports = router;
