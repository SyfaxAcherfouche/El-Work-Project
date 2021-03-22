const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, 'e369d8*044f56!8d26;9b&d²c611"4d746b(6e3da4e24689af2b2e.321c0850/7bf22dc5e$7ee1224:1a3b4a5;1d3d8?003ac768é75"9422e9c39c76dè3f06ç0càa)0d2=66_2908f48a0&8');
        
        const userId = decodedToken.user_id;
        if (req.body.user_id && req.body.user_id !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(401).json({ error: 'Requête non authentifiée !' });
    }
};