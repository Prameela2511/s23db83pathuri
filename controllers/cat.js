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

    // Handle cat delete on DELETE.
exports.cat_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await cat.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    // Handle a show one view with id specified by query
exports.cat_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await cat.findById( req.query.id)
    res.render('catdetail',
    { title: 'cat Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }
    // Handle building the view for creating a cat.
// No body, no in path parameter, no query.
// Does not need to be async
exports.cat_create_Page = function(req, res) {
console.log("create view")
try{
res.render('catcreate', { title: 'cat Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle building the view for updating a cat.
// query provides the id
exports.cat_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await cat.findById(req.query.id)
    res.render('catupdate', { title: 'cat Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle a delete one view with id from query
    exports.cat_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await cat.findById(req.query.id)
    res.render('catdelete', { title: 'cat Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    