const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');


// Update
router.put('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body

            }, {
                new: true
            })
            res.status(200).json(updatedUser)
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can only update your account!")
    }
})

// Delete
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id) {
        //delete all post of user
        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({username: user.username});

                //only delete user after all posts are deleted
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User and Posts has been deleted...")
            } catch (err) {
                return res.status(500).json(err);
            }
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("You can only delete your account!")
    }
})

// Get a user
router.get('/', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...other} = user._doc;
        res.status(200).json(other);
    } catch (err) {
        return res.status(500).json(err);
    }
})

module.exports = router;