var express = require('express');
const vehicle_controlers= require('../controllers/vehicle');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

router.get('/', vehicle_controlers.vehicle_view_all_Page );
router.get('/vehicle/:id', vehicle_controlers.vehicle_detail); 

router.get('/detail', secured,vehicle_controlers.vehicle_view_one_Page);

/* GET create vehicle page */
router.get('/create',secured, vehicle_controlers.vehicle_create_Page);

/* GET create vehicle page */
router.get('/update', secured,vehicle_controlers.vehicle_update_Page);

/* GET delete vehicle page */
router.get('/delete',secured, vehicle_controlers.vehicle_delete_Page);

module.exports = router;