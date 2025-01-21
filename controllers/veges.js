const Vege = require("../models/Vege");

const index = async (req, res) => {
    try {
        const veges = await Vege.showAll();
        res.status(200).send(veges);
    } catch(err) {
        res.status(500).send({ error: "Server error" });
    }
}

module.exports = {index}