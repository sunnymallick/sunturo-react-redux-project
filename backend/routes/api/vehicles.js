const express = require('express');
const asyncHandler = require('express-async-handler');
const { Vehicle } = require('../../db/models');

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

module.exports = router;
