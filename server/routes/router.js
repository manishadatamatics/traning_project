const express = require("express");
const router = express.Router();
const multer = require('multer')
var User = require('../model/user');
var Upload = require('../model/upload');
const { findByIdAndUpdate } = require("../model/user");

const uploadimg = multer({
    fileFilter(req, file, cb) {
        if (!file.originalname.endsWith('.PNG')) {
            return cb('use only .PNG images')
        }
        cb(undefined, true)
    }
})

const uploadpdf = multer({
    fileFilter(req, file, cb) {
        if (!file.originalname.endsWith('.pdf')) {
            return cb('use only pdf file')
        }
        cb(undefined, true)
    }
})

router.post('/create', async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            dob: req.body.dob,
            firstname: req.body.firstname,
            lastname: req.body.lastname
        });
        await user.save();
        res.send(user)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

router.post('/uploadimage', uploadimg.single('image'), async (req, res) => {
    try {
        const img = req.file.buffer.toString('base64')
        const upload = new Upload({
            _id: req.body._id,
            name: "hjhh",
        });
    //   await findByIdAndUpdate(req.body);
      Upload.findByIdAndUpdate(req.body._id, { name: 'Gourav' },
                            function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User : ", docs);
    }
});
      console.log(req.body)
        res.send(upload)
        console.log(upload)
    } catch (err) {
        res.status(500).json(err)
        console.log(err);
    }
})

router.post('/uploadpdf', uploadpdf.single('file'), async (req, res) => {
    try {
        const pdf = req.file.buffer.toString('base64')
        const upload = new Upload({
            content: pdf,
            id: req.body.id,
            file: req.body.file
        });
        await upload.save();
        res.send(upload)
    } catch (err) {
        res.status(500).json(err)
        console.log(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const result = await User.findById(req.params.id)
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

router.get('/read', async (req, res) => {
    try {
        const result = await User.find()
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

router.get('/read/:id', async (req, res) => {
    try {
        const result = await User.findById(req.params.id)
        res.send(result)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

router.put('/update/:id', async (req, res) => {
    try {
        const result = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send(result)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const result = await User.findByIdAndDelete(req.params.id)
        res.status(200).send(result)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

module.exports = router;