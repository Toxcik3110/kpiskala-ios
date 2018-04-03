var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
    app.get('/users/:id', (req, res) => {
        // const id = req.params.id;
        // const details = { '_id': new ObjectID(id) };
        // console.log(req.params.fbid);        
        const details = { 'fbid':req.params.id};
        db.collection('users').findOne(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    });
    app.post('/users', (req, res) => {
      const note = { 
          fbid: req.body.fbid, 
          firstName: req.body.firstName, 
          lastName: req.body.lastName 
        };
        db.collection('users').insert(note, (err, result) => {
            if (err) { 
                res.send({ 'error': 'An error has occurred' }); 
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    app.delete('/users/:id', (req, res) => {
        // const id = req.params.id;
        // const details = { '_id': new ObjectID(id) };
        const details = { 'fbid': req.params.id };
        db.collection('users').remove(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send('Note ' + id + ' deleted!');
            } 
        });
    });
    app.put ('/users/:id', (req, res) => {
        // const id = req.params.id;
        const details = { fbid: req.params.id };
        const user = { 
            fbid: req.params.id, 
            firstName: req.body.firstName,
            lastName: req.body.lastName
        };
        db.collection('users').update(details, user, (err, result) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(user);
          } 
        });
    });
};