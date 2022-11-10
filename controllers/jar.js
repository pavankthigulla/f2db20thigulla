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
exports.jar_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: jar detail: ' + req.params.id); 
}; 
 
// Handle jar create on POST. 
exports.jar_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: jar create POST'); 
}; 
 
// Handle jar delete form on DELETE. 
exports.jar_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: jar delete DELETE ' + req.params.id); 
}; 
 
// Handle jar update form on PUT. 
exports.jar_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: jar update PUT' + req.params.id); 
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