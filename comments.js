// Create web server
var express = require('express');
var router = express.Router();
var fs = require('fs');

// Create route to handle get request
router.get('/list', function(req, res) {
    // Read the comments file
    fs.readFile('comments.json', function(err, data) {
        // If there is an error, log it and return
        if (err) {
            console.log(err);
            return;
        }

        // Parse the data from the file
        var comments = JSON.parse(data);

        // Send the data back to the client
        res.send(comments);
    });
});

// Create route to handle post request
router.post('/add', function(req, res) {
    // Read the comments file
    fs.readFile('comments.json', function(err, data) {
        // If there is an error, log it and return
        if (err) {
            console.log(err);
            return;
        }

        // Parse the data from the file
        var comments = JSON.parse(data);

        // Add the new comment to the comments array
        comments.push(req.body);

        // Write the new comments array to the file
        fs.writeFile('comments.json', JSON.stringify(comments), function(err) {
            // If there is an error, log it and return
            if (err) {
                console.log(err);
                return;
            }

            // Send the data back to the client
            res.send(comments);
        });
    });
});

// Export the router
module.exports = router;