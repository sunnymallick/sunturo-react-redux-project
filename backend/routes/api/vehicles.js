const express = require('express');
const asyncHandler = require('express-async-handler');
const { Vehicle, User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth')

const router = express.Router();

router.get('/', asyncHandler(async function (req, res) {
    const vehicles = await Vehicle.findAll({
        include: ['User']
    });
    return res.json(vehicles)
}))

router.get('/:id', asyncHandler(async function(req, res) {
    const vehicleId = req.params.id;
    const oneVehicle = await Vehicle.findByPk(vehicleId, {
        include: ['User']
    });

    return res.json(oneVehicle)
}))


module.exports = router;
