const express = require('express');
const asyncHandler = require('express-async-handler');
const { Booking } = require('../../db/models');
const { restoreUser } = require('../../utils/auth')

const router = express.Router();

router.get('/', asyncHandler(async function (req, res) {
    const bookings = await Booking.findAll();
    return res.json(bookings)
}))

