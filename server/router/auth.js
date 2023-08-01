const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// router.use(bodyParser.urlencoded({extended:true}));
const authenticate = require("../middleware/authenticate")
require('../db/conn');

router.use(express.json()); //it instructs the router to automatically parse any incoming request with a JSON payload and make the parsed data available in req.body. This allows you to access the JSON data sent in the request body in a structured manner.

const User = require('../models/userScheme.js')


router.get('/', (req, res) => {
    res.send("hello from server")
});

router.post('/register', (req, res) => {
    const { nm, em, pw, gender } = req.body;
    console.log(req.body);


    if (!nm || !em || !pw || !gender) {
        return res.status(422).json({ error: "Please fill the form completely" })
    }
    //  res.json({message:req.body})  creates problem as we cann't send multiple responses
   


    User.findOne({ email: em }).then((exist) => {
        if (exist) {

            return res.status(422).json({ error: "Email already exists!" });
        }
        const us = new User({ name: nm, email: em, password: pw, gender: gender })
        //  const user=new User(req.body)

        console.log("My entered user is:", us);

        us.save().then(() => {
            return res.status(201).json({ message: "User registered successfully!" });
        }).catch(() => {

            res.status(500).json({ error: "Failed to register !" })
        });
    }).catch(err => {

        console.log(err);
    })


})


router.post('/login', async (req, res) => {
    try {
        let token;
        const { em, pw } = req.body;
        console.log(req.body);

        if (!em || !pw) {
            return res.status(400).json({ error: "Invalid" })
        }

        const userLogin = await User.findOne({ email: em })
        if (userLogin) {
            const isMatch = await bcrypt.compare(pw, userLogin.password);

            if (isMatch) {
                token = await userLogin.generateAuthToken();
                console.log(token);

                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 250000000),
                    httpOnly: true
                })

                return res.json({ message: "User signin successfully!" })
            }
            else {
                return res.status(400).json({ error: "Invalid password" })
            }
        }
        else {
            return res.status(400).json({ error: "User doesn't exist, register first!" })

        }
    }
    catch (err) {
        console.log(err);
    }
})


router.get('/about', authenticate, (req, res) => {
    res.send(req.rootUser);
})
router.get('/home', authenticate, (req, res) => {
    res.send(req.rootUser);
})
router.get('/exercise', authenticate, (req, res) => {
    res.send(req.rootUser);
})

module.exports = router;