import jwt from 'jsonwebtoken';

const authDoctor = (req, res, next) => {
    const token = req.headers.dtoken; // ✅ read from "dtoken" header

    if (!token) {
        return res.json({ success: false, message: 'Not Authorized. Login Again.' });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.docId = token_decode.id; // ✅ store doctor ID in request
        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export default authDoctor;
