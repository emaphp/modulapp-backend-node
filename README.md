# modulapp-backend-node
A Node.js backend for Modulapp

<br/>
###About

This is a backend for [Modulapp](https://github.com/emaphp/modulapp-frontend ""), a modular application made with MarionetteJS. It features a simple RESTful service using Express Framework along with a MongoDB database.

<br/>
###Installation

Install dependencies through npm:

```bash
npm install
```

Then run the application using node:

```bash
node index.js
```

<br/>
###Configuration

**Backend**

Server runs on port 5000 by default. You can configure this value along with the Mongo connection string in the main file.

```javascript
//index.js
app.set('port', (process.env.PORT || 5000));
app.set('db', (process.env.DB || 'mongodb://localhost/modulapp-node'));
```

<br/>
**Frontend**

Remember to re-build your frontend application after modifying it.

```javascript
//config.js
module.exports = {
    //notes config
    Notes: {
        endPoint: 'http://localhost:5000/notes'
    },

    //contacts config
    Contacts: {
        endPoint: 'http://localhost:5000/contacts'
    },

    //notitifer config
    Notifier: {
        position: 'bottom' //"bottom" or "top"
    }
};
```

<br/>
###License

Licensed under the Apache License, Version 2.0.