'use strict';
/* Add all the required libraries*/

/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html


var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Listing = require('./ListingSchema.js'),
  config = require('./config'),
  listing;

mongoose.connect(config.db.uri, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


var findLibraryWest = function() {
  Listing.find({name: 'Library West'}, function (err,entry){
if (err) throw err;
  console.log(entry);

 });
};

var removeCable = function() {
  Listing.findOneAndDelete({code: 'CABL'}, function (err,entry){
    if (err) throw err;
    console.log("Deleted CABL")
  });
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console.
   */
};
var updatePhelpsMemorial = function() {
  Listing.findOneAndUpdate({name:'Phelps Laboratory'}, {address: '1953 Museum Road, Gainesville, FL 32603, United States', latitude: 29.644890, longitude: -82.348834}, {new: true}, function(err, entry){
if (err) throw err;
console.log(entry)
});
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then
    log the updated document to the console.
   */
};
var retrieveAllListings = function() {
  /*
    Retrieve all listings in the database, and log them to the console.
   */
   Listing.find({}, function(err, entry){
     if (err) throw err;
    // console.log(entry)
    console.log("All listings")
     console.log(JSON.stringify(entry, null, 1));
   });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
