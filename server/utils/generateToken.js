import jwt from "jsonwebtoken";

const generateTokenandSetCookie = (userId,res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });

    res.cookie("jwt",token,{
        maxAge: 1*24*60*60*1000,
        httpOnly: true, // xxs cross site scripting attacks 
        sameSite: "strict", // cross site request forgery attacks
        secure: true
    });
};

export default generateTokenandSetCookie;