import Users from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id', 'name', 'email']
        });
        res.json(users);
    } catch(error) {
        console.log(error);
    }
}

export const Register = async(req, res) => {
    const {name, email, password, confPassword} = req.body;
    //check passwords match
    if(password !== confPassword) return res.status(400).json({msg: "Passwords do not match"})
    //encrypt password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        //create user
        await Users.sync();
        await Users.create({
            name: name,
            email: email,
            password: hashPassword
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        console.log(error);
    }
}

export const Login = async(req, res) => {
    try {
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }
        });
        //check if user found
        const match = await bcrypt.compare(req.body.password, user[0].password)
        if (!match) return res.status(400).json({msg: "Wrong Password"})
        const userID = user[0].id;
        const name = user[0].name;
        const email = user[0].email
        const accessToken = jwt.sign({userID, name, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({userID, name, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken}, {
            where: {
                id: userID
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch(error) {
        res.status(404).json({msg: 'Email not found'});
    }
}

export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    });
    if (!user[0]) return res.sendStatus(204);
    const userID = user[0].id;
    await Users.update({refreshToken: null}, {
        where:{
            id: userID
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}