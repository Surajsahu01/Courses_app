import jwt from "jsonwebtoken";


const userMiddleware = (req, res, next) => {
    // const token = req.header('x-auth-token');
    const authHeader = req.header.authorization;
    if(!authHeader || !authHeader.startWith("Bearer")){
        return res.status(401).json({ error: 'No token, authorization denied' });

    }
    // 
    const token = authHeader.split(" ")[1];
    // 
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id
        next();
        
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

// module.exports = userMiddleware;
export default userMiddleware;