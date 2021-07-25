const express = require('express');
const asyncHandler = require('express-async-handler');
const { Booking, Vehicle, User } = require('../../db/models');
const vehicle = require('../../db/models/vehicle');
const { restoreUser } = require('../../utils/auth')

const router = express.Router();

router.get('/', asyncHandler(async function (req, res) {
    const bookings = await Booking.findAll();
    return res.json(bookings)
}))

router.post('/:id', restoreUser, asyncHandler(async function (req, res) {
    const { startDate, endDate } = req.body
    const vehicleId = req.params.id;
    const userId = req.user.id

    const book = await Booking.create({
        userId: userId,
        vehicleId: vehicleId,
        startDate: startDate,
        endDate: endDate
    })

    return res.json({book})
}))

router.put('/:id', restoreUser, asyncHandler(async function(req, res) {
    const bookingId = req.params.id;
    const updatedBooking = await Booking.update({
        where: {
            id: bookingId
        }
    })
    return res.json(updatedBooking)
}))

router.delete('/:id', asyncHandler(async function(req, res) {
    const vehicleId = req.params.id
    const booked = await Booking.findByPk(vehicleId)

    await Booking.destroy({
        where: {
            id: vehicleId
        }
    });
    return res.json({booked})
}))

module.exports = router
