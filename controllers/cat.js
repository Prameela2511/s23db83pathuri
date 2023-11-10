var cat = require('../models/cat');
// List of all cats
exports.cat_list = async function(req, res) {
    try{
        thecats = await cat.find();
        res.send(thecats);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }        
};

// Handle cat create on POST.
exports.cat_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: cat create POST');
};
// Handle cat delete form on DELETE.
exports.cat_delete = function(req, res) {
res.send('NOT IMPLEMENTED: cat delete DELETE ' + req.params.id);
};
// Handle cat update form on PUT.
exports.cat_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: cat update PUT' + req.params.id);
};
exports.cat_view_all_Page = async function(req, res) {
    try{
    thecats = await cat.find();
    res.render('cat', { title: 'cat Search Results', results: thecats });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   exports.cat_create_post = async function(req, res) {
    console.log(req.body)
    let document = new cat();
    document.cat_color = req.body.cat_color;
    document.cat_breed = req.body.cat_breed;
    document.cat_price = req.body.cat_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   }

// for a specific cat.
exports.cat_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await cat.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    