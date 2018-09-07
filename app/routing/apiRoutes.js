
//route to link to friends.js source
var friends = require("../data/friends.js");

module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
      
    });
  
    app.post("/api/friends", function(req, res) {

      var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 1000
      };

      var userScores = req.body.scores;

      for  (var i=0; i< friends.length; i++) {

        // console.log(req.body);
        // console.log(friends[i].name);
      
        var totalDifference = 1000;

        //loops through an array of users' score input values and the friends array from friends.js. adds those values and calculates the difference.  

        for (var x=0; x < friends[i].scores[x]; x++){
          totalDifference += Math.abs(parseInt(userScores[x]) - parseInt(friends[i].scores[x]));

        //finds the match with the closest value 'less than' the users' score and pushes this information into the best match object which, in turn, is routed back to the modal in the survey.html

          if (totalDifference <= bestMatch.friendDifference){
            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDifference = totalDifference;
          }
        }
      }

      friends.push(req.body);
      res.json(bestMatch);

    });
  }
   