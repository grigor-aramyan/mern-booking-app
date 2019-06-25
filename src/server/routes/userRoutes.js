import express from 'express';
import bcrypt from 'bcryptjs';
import config from 'config';
import jwt from 'jsonwebtoken';

import auth from '../../../middleware/auth';

// Schemas
import User from '../schemas/UserSchema';

const router = express.Router();

router.post('/', function(req, res) {
    const { name, email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Email and Password required' });
    }

    User.findOne( { email } )
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists' });

            const newUser = new User({
                name,
                email,
                password
            });

            bcrypt.genSalt(10, (err, salt) => {
                if (err) return res.status(500).json({ msg: "Something weird in our side(("});
                
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) return res.status(500).json({ msg: "Something weird in our side(("});

                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user._id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) return res.status(500).json({ msg: "Something weird in our side with auth((" });

                                    res.json({
                                        token,
                                        user: {
                                            id: user._id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    });
                                }
                            )
                        });
                });
            });
        });
});

export default router;