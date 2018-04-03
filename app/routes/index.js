const userRoutes = require('./userRoutes');
const routeRoutes = require('./routeRoutes');
module.exports = function(app, db) {
    userRoutes(app, db);
    routeRoutes(app, db);
  // Тут, позже, будут и другие обработчики маршрутов 
};