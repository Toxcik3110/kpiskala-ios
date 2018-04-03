var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
    app.get('/routeUser/:fbid', (req, res) => {
        // const id = req.params.id;
        // const details = { '_id': new ObjectID(id) };
        // console.log(req.params.fbid);        
        const details = { 'fbid':req.params.fbid};
        db.collection('route').find(details).toArray((err, items) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(items);
            }
        });
    });
    app.get('/route/:routeName', (req, res) => {
        // const id = req.params.id;
        // const details = { '_id': new ObjectID(id) };
        // console.log(req.params.fbid);        
        const details = { 'routeName':req.params.routeName};
        db.collection('route').findOne(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    });
    app.post('/route', (req, res) => {
      const note = { 
            fbid: req.body.fbid, 
            routeName: req.body.routeName, 
            diff: req.body.diff,
            points: req.body.points,          
        };
        db.collection('route').insert(note, (err, result) => {
            if (err) { 
                res.send({ 'error': 'An error has occurred' }); 
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    app.delete('/route/:routeName', (req, res) => {
        // const id = req.params.id;
        // const details = { '_id': new ObjectID(id) };
        const details = { 'routeName': req.params.routeName };
        db.collection('route').remove(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send('Note ' + id + ' deleted!');
            } 
        });
    });
    app.put ('/route/:routeName', (req, res) => {
        // const id = req.params.id;
        const details = { routeName: req.params.routeName };
        const user = { 
            fbid: req.body.fbid, 
            routeName: req.body.routeName,
            diff: req.body.diff,
            points: req.body.points
        };
        db.collection('route').update(details, user, (err, result) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(user);
          } 
        });
    });
};