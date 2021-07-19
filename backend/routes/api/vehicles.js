const express = require('express');
const asyncHandler = require('express-async-handler');

const { Vehicle } = require('../../db/models');

const router = express.Router();

router.get('/browse', asyncHandler(async function (req, res) {
    const vehicles = await Vehicle.list();
    return res.json(vehicles)
}))
