'use strict';
/*
Import modules/files you may need to correctly run the script.
Make sure to save your DB's uri in the config file, then import it with a require statement!
*/
var fs = require('fs'),
mongoose = require('mongoose'),
Schema = mongoose.Schema,
Listing = require('./ListingSchema.js'),
config = require('./config'),
listingData;
mongoose.connect(config.db.uri, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

/* Connect to your database using mongoose - remember to keep your key secret*/
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/
/*
//get fs.readFile from bootcamp1 inside readfile get loop of listing file variable, make a new mongoos listing model
and save to database
Instantiate a mongoose model for each listing object in the JSON file,
and then save it to your Mongo database
//see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Remember that we needed to read in a file like we did in Bootcamp Assignment #1.
*/
fs.readFile('listings.json', 'utf8', function(err, data) {

  if (err) { throw (err)
  }
  listingData = JSON.parse(data);
  listingData.entries.forEach(function(entry){
    var savedEntry = Listing(entry);

    savedEntry.save(function(err){
      if(err){
        console.log("Error: Did not save to DB")
        throw err;
      }
      console.log("Saved to database")
    });


  });
})


/*
Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that
it saved everything correctly.
*/