const { clearCache } = require('../services/cache.js');

module.exports = async(req, res, next) => {
    await next();

    clearCache(req.user.id);
};
