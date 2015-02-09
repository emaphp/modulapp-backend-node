/**
 * notes.js - Notes routes
 */

var Note = require('./models').Note;
var moment = require('moment');

module.exports = function(app) {
    //GET /notes
    app.get('/notes', function(req, res) {
        Note.find({}, function(err, notes) {
            if (err)
                return res.send(500, "Database error");

            res.json(notes.map(function(note) {
                return {
                    id: note._id,
                    title: note.title,
                    body: note.body,
                    createdAt: moment(note.createdAt).format()
                }
            }));
        })
    });

    //GET /notes/:id
    app.get('/notes/:id', function(req, res) {
        Note.findById(req.params.id, function(err, note) {
            if (err)
                return res.send(500, "Database error");

            res.json({
                id: note._id,
                title: note.title,
                body: note.body,
                createdAt: moment(note.createdAt).format()
            });
        })
    });

    //POST /notes
    app.post('/notes', function(req, res) {
        var note = new Note({
            title: req.body.title,
            body: req.body.body
        });

        note.save(function (err, note) {
            if (err)
                return res.send(500, "Database error");

            res.json({
                id: note._id,
                title: note.title,
                body: note.body,
                createdAt: moment(note.createdAt).format()
            })
        });
    });

    //PUT /notes
    app.put('/notes', function (req, res) {
        Note.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            body: req.body.body
        },
        function(err, note) {
            if (err)
                return res.send(500, "Database error");

            res.json({
                id: note._id,
                title: note.title,
                body: note.body,
                createdAt: moment(note.createdAt).format()
            });
        });
    });

    //DELETE /notes
    app.delete('/notes/:id', function(req, res) {
        Note.findByIdAndRemove(req.params.id, function(err, note) {
            if (err) return res.send(500, "Database error");
            return res.send(204);
        });
    });
};