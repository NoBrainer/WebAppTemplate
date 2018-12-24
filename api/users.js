#!/usr/bin/env node
'use strict';

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('User endpoint under construction.');
});

module.exports = router;