const tripModel = require('../models/trip.model')

async function tripAdditionController(req, res) {

    console.log("REQUEST BODY:", req.body)

    try {

        let tripDetail = new tripModel.Trip({
            tripName: req.body.tripName,
            startDateOfJourney: req.body.startDateOfJourney,
            endDateOfJourney: req.body.endDateOfJourney,
            nameOfHotels: req.body.nameOfHotels,
            placesVisited: req.body.placesVisited,
            totalCost: req.body.totalCost,
            tripType: req.body.tripType,
            experience: req.body.experience,
            image: req.body.image,
            shortDescription: req.body.shortDescription,
            featured: req.body.featured
        })

        const savedTrip = await tripDetail.save()

        console.log("SAVED DATA:", savedTrip)

        res.status(200).json({
            message: 'Trip added Successfully',
            data: savedTrip
        })

    } catch (error) {

        console.log("ACTUAL ERROR:", error)

        res.status(500).json({
            message: 'SOMETHING WENT WRONG',
            error: error.message
        })
    }
}

async function getTripDetailsController(req, res) {

    try {

        const trips = await tripModel.Trip.find({})

        res.status(200).json(trips)

    } catch (error) {

        console.log("FETCH ERROR:", error)

        res.status(500).json({
            message: 'SOMETHING WENT WRONG WHILE FETCHING',
            error: error.message
        })
    }
}

async function getTripDetailsByIdController(req, res) {

    try {

        const trip = await tripModel.Trip.findById(req.params.id)

        res.status(200).json(trip)

    } catch (error) {

        console.log("FETCH BY ID ERROR:", error)

        res.status(500).json({
            message: 'SOMETHING WENT WRONG',
            error: error.message
        })
    }
}

module.exports = {
    tripAdditionController,
    getTripDetailsController,
    getTripDetailsByIdController
}