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

//Handle cat update form on PUT.
exports.cat_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await cat.findById( req.params.id)
// Do updates of properties
if(req.body.cat_color)
toUpdate.cat_color = req.body.cat_color;
if(req.body.cat_breed) toUpdate.cat_breed = req.body.cat_breed;
if(req.body.cat_price) toUpdate.cat_price = req.body.cat_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};