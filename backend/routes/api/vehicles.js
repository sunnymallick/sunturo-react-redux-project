const express = require('express');
const asyncHandler = require('express-async-handler');
const { Vehicle, Review } = require('../../db/models');
const { check, validationResult } = require('express-validator')

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


router.post('/:id', asyncHandler(async function(req, res) {
    const { review, rating } = req.body
    const vehicleId = req.params.id;
    const vehicle = await Vehicle.findByPk(vehicleId);
    const userId = req.session.auth.userId

    await Review.create({
        userId = userId,
        
    })
}))
module.exports = router;
