var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var cat_controller = require('../controllers/cat');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// cat ROUTES ///
// POST request for creating a cat.
router.post('/cats', cat_controller.cat_create_post);
// DELETE request to delete cat.
router.delete('/cats/:id', cat_controller.cat_delete);
// PUT request to update cat.
router.put('/cats/:id', cat_controller.cat_update_put);
// GET request for one cat.
router.get('/cats/:id', cat_controller.cat_detail);
// GET request for list of all cat items.
router.get('/cats', cat_controller.cat_list);
module.exports = router;
