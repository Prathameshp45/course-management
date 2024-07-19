const jwt = require('jsonwebtoken');

const auth = (req,res,next) =>{
    const token = req.header('Authorization');
    const bearerWord = token.split(" ")[0].trim();
    const bearerToken = token.split(" ")[1];

    if (bearerWord!= "Bearer") {
        return res.status(403).json({mesage : 'Invalid Header'});
    }
    if (!bearerToken) {
        return res.status(401).json({message : 'no token, authorization denied'});
    }
    try {
        const decoded = jwt.verify(bearerToken,'Prathamesh');
        req.user = decoded;
        
        next();
    } catch (error) {
        res.status(401).json({message:'token is not valid'});
    }
}
 
module.exports = auth;