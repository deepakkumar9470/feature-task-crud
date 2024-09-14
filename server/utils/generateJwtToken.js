import jwt from 'jsonwebtoken';

const generateJwtToken = (res,userId) => {

    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, { expiresIn: '30d' });

    res.cookie('jwttoken', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
    })
    return token;
}

export default generateJwtToken;
