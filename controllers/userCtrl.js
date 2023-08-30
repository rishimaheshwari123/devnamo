const userModel = require("../models/user");

const createInfo = async (req, res) => {
    const user = new userModel(req.body);
    try {
        const infoSave = await user.save();
        res.status(200).json(infoSave);
    } catch (error) {
        res.status(500).send({ message: "Somethig went wrong", success: false });
        console.log(error)
    }
}

const getAllInfo = async (req, res) => {
    try {
        const hotels = await userModel.find();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).send({ success: false, message: "Something went wrong" })
    }
}
module.exports = { createInfo, getAllInfo };