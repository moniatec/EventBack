const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { getUserToken, requireAuth } = require("../auth");
const router = express.Router();
const db = require("../db/models");

const { User, Event, Member } = db;

const validateEmailAndPassword = [
    check("email")
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide a valid email."),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a password."),
    handleValidationErrors,
];

//get user wiht id
router.get(
    "/:id",
    // requireAuth,
    asyncHandler(async (req, res, next) => {
        const userId = parseInt(req.params.id, 10);
        const user = await User.findByPk(userId);
        res.json({ user });
    })
);

//create/set new user
router.post(
    "/",
    check("username")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a username"),
    validateEmailAndPassword,
    asyncHandler(async (req, res) => {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, hashedPassword });

        const token = getUserToken(user);
        res.status(201).json({
            user: { id: user.id },
            token,
            currentUserId: user.id,
        });
    })
);

router.post(
    "/token",
    validateEmailAndPassword,
    asyncHandler(async (req, res, next) => {
        const { email, password, username } = req.body;
        const user = await User.findOne({
            where: {
                email,
                username
            },
        });

        if (!user || !user.validatePassword(password)) {

            const err = new Error("Login failed");
            err.status = 401;
            err.title = "Login failed";
            err.errors = ["The provided credentials were invalid."];
            return next(err);
        }

        const token = getUserToken(user);

        res.json({ token, user: { id: user.id }, currentUserId: user.id, });
    })
);

//get all events for a user wiht userId=id passed on the params from the client side
router.get(
    "/:id/events",
    asyncHandler(async (req, res, next) => {
        const userId = parseInt(req.params.id, 10);
        const events = await User.findOne({
            where: { id: userId },
            include: [{
                model: Event,
                as: "events",
                order: [["time", "DESC"]],
            }],

        });
        res.json({ events });
    })
);

module.exports = router;