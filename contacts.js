/**
 * contacts.js
 */

var Contact = require('./models').Contact;

module.exports = function(app) {
    //GET /contacts
    app.get('/contacts', function (req, res) {
        Contact.find({}, function (err, contacts) {
            if (err)
                return res.send(500, "Database error");

            res.json(contacts.map(function(contact) {
                return {
                    id: contact._id,
                    name: contact.name,
                    surname: contact.surname,
                    phone: contact.phone,
                    email: contact.email,
                    twitter: contact.twitter
                }
            }));
        })
    });

    //GET /contacts/:id
    app.get('/contacts/:id', function(req, res) {
        Contact.findById(req.params.id, function(err, contact) {
            if (err)
                return res.send(500, "Database error");

            res.json({
                id: contact._id,
                name: contact.name,
                surname: contact.surname,
                phone: contact.phone,
                email: contact.email,
                twitter: contact.twitter
            });
        });
    });

    //POST /contacts
    app.post('/contacts', function(req, res) {
        var contact = new Contact({
            name: req.body.name,
            surname: req.body.surname,
            phone: req.body.phone,
            email: req.body.email,
            twitter: req.body.twitter
        });

        contact.save(function(err, contact) {
            if (err)
                return res.send(500, "Database error");

            res.json({
                id: contact._id,
                name: contact.name,
                surname: contact.surname,
                phone: contact.phone,
                email: contact.email,
                twitter: contact.twitter
            });
        });
    });

    //PUT /contacts
    app.put('/contacts', function(req, res) {
        Contact.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            surname: req.body.surname,
            phone: req.body.phone,
            email: req.body.email,
            twitter: req.body.twitter
        },
        function(err, contact) {
            if (err)
                return res.send(500, "Database error");

            res.json({
                id: contact._id,
                name: contact.name,
                surname: contact.surname,
                phone: contact.phone,
                email: contact.email,
                twitter: contact.twitter
            });
        })
    });

    //DELETE /notes
    app.delete('/notes/:id', function(req, res) {
        Note.findByIdAndRemove(req.params.id, function(req, res) {
            if (err) return res.send(500, "Database error");
            return res.send(204);
        });
    });
};