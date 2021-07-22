const express = require('express');
const asyncHandler = require('express-async-handler');
const { Vehicle, Review } = require('../../db/models');
const { restoreUser } = require('../../utils/auth')

const router = express.Router();

router.get('/', asyncHandler(async function (req, res) {
    const vehicles = await Vehicle.findAll();
    return res.json(vehicles)
}))

router.get('/:id', asyncHandler(async function(req, res) {
    const vehicleId = req.params.id;
    const oneVehicle = await Vehicle.findByPk(vehicleId);

    return res.json(oneVehicle)
}))

router.post('/:id', restoreUser, asyncHandler(async function(req, res) {
    const { review, rating } = req.body
    const vehicleId = req.params.id
    const userId = req.user.id

    await Review.create({
        vehicleId: vehicleId,
        userId: userId,
        review: review,
        rating: rating
    })

    return res.redirect(`/vehicles`)
}))

module.exports = router;
