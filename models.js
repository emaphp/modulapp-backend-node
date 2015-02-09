/**
 * models.js - Application models
 */

var mongoose = require('mongoose');

//Note
var noteSchema = mongoose.Schema({
    title: String,
    body: String,
    createdAt: { type: Date, default: Date.now }
});

var Note = mongoose.model('Note', noteSchema);

//Contact
var contactSchema = mongoose.Schema({
    name: String,
    surname: String,
    phone: String,
    email: String,
    twitter: String
});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = {
    Note: Note,
    Contact: Contact
};