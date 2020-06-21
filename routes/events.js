const express = require("express");
const { check } = require("express-validator");
const { handleValidationErrors, asyncHandler } = require("../utils");
const { requireAuth } = require("../auth");
const router = express.Router();
const db = require("../db/models");

const { Event, User, Member } = db;

// router.use(requireAuth);

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const events = await Event.findAll({
            include: [{ model: User, as: "host", attributes: ["username", "id"] }],
            order: [["createdAt", "DESC"]],
            attributes: ["eventName", "description", "id", "time", "photoUrl", "location"],
        });
        res.json({ events });
    })
);

const eventNotFoundError = (id) => {
    const err = Error("Event not found");
    err.errors = [`Event with id of ${id} could not be found.`];
    err.title = "Event not found.";
    err.status = 404;
    return err;
};

const validateEvent = [
    check("eventName")
        .exists({ checkFalsy: true })
        .withMessage("Event can't be empty."),
    //  message cannot be longer than 280 characters:
    check("eventtName")
        .isLength({ max: 250 })
        .withMessage("event name can't be longer than 250 characters."),
    handleValidationErrors,
];

router.get(
    "/:id",
    asyncHandler(async (req, res, next) => {
        const event = await Event.findOne({
            include: [{ model: User, as: "host", attributes: ["username", "id"] }],
            where: {
                id: req.params.id,
            },
        });
        if (event) {
            res.json({ event });
        } else {
            next(eventNotFoundError(req.params.id));
        }
    })
);

router.post(
    "/",
    validateEvent,
    asyncHandler(async (req, res) => {
        const { eventName, time, description, location, photoUrl, hostId } = req.body;
        const parsedId = await parseInt(hostId, 10);
        const event = await Event.create({ eventName, time, description, location, photoUrl, hostId: parsedId });
        res.json({ event });
    })
);

router.put(
    "/:id",

    asyncHandler(async (req, res, next) => {
        const event = await Event.findOne({
            where: {
                id: req.params.id,
            },
        });
        // if (req.user.id !== event.hostId) {
        //     const err = new Error("Unauthorized");
        //     err.status = 401;
        //     err.message = "You are not authorized to edit this event.";
        //     err.title = "Unauthorized";
        //     throw err;
        // }
        if (event) {
            await event.update({ description: req.body.description }); //may need to add more to update for one event
            res.json({ event });
        } else {
            next(eventNotFoundError(req.params.id));
        }
    })
);

router.delete(
    "/:id",
    asyncHandler(async (req, res, next) => {
        const event = await Event.findOne({
            where: {
                id: req.params.id,
            },
        });
        // if (req.user.id !== event.hostId) {
        //     const err = new Error("Unauthorized");
        //     err.status = 401;
        //     err.message = "You are not authorized to delete this event.";
        //     err.title = "Unauthorized";
        //     throw err;
        // }
        if (event) {
            // const members = await Member.findAll({
            //     where: { eventId: req.params.id },
            // });
            // await members.destroy();
            await Member.destroy({ where: { eventId: req.params.id } })
            await event.destroy();
            res.json({ message: `Deleted event with id of ${req.params.id}.` });
        } else {
            next(eventNotFoundError(req.params.id));
        }
    })
);

router.get(
    "/:id/members",

    asyncHandler(async (req, res, next) => {
        // const eventId = parseInt(req.params.id, 10);
        const members = await Member.findAll({
            where: { eventId: req.params.id },
        });
        // let members = []
        // console.log(members1)
        // members2 = res.json({ members1 });
        // for (let i = 0; i < members2.lenght; i++) {

        //     let id = members2[i].userId
        //     let user = await User.findOne({
        //         where: {
        //             id
        //         }
        //     });
        //     members.push(user)
        // }
        res.json({ members });
        // console.log('here')
        // console.log(users)
    })
);

router.post(
    "/:eventId/join",

    asyncHandler(async (req, res) => {
        // const eventId = req.params.eventId
        const { userId } = req.body;
        const parsedId = await parseInt(userId, 10);
        // const parsedEventId = await parseInt(eventId, 10);
        console.log(parsedId)
        console.log(req.params.eventId)
        const member = await Member.create({ userId: parsedId, eventId: req.params.eventId, checkedIn: false });
        console.log(member)
        res.json({ member });

    })

);


module.exports = router;