var jar = require('../models/jar'); 
 
// List of all jar 
exports.jar_list = async function(req, res) { 
    try{ 
        thejar = await jar.find(); 
        res.send(thejar); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
 
// for a specific jar. 
exports.jar_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await jar.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle jar create on POST. 
exports.jar_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new jar(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"jar_type":"goat", "cost":12, "size":"large"} 
    document.length = req.body.length; 
    document.weight = req.body.weight; 
    document.height = req.body.height; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle jar delete on DELETE. 
exports.jar_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await jar.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle jar update form on PUT. 
exports.jar_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await jar.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.length)  
               toUpdate.length = req.body.length; 
        if(req.body.weight) toUpdate.weight = req.body.weight; 
        if(req.body.height) toUpdate.height = req.body.height; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
};  
// VIEWS 
// Handle a show all view 
exports.jar_view_all_Page = async function(req, res) { 
    try{ 
        thejar = await jar.find(); 
        res.render('jar', { title: 'jar Search Results', results: thejar }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};