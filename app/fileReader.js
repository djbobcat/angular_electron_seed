const fs = require('fs');
const csv = require('fast-csv');


module.exports = {
  readFile: function(filepath){
  fs.readFile(filepath,'utf8',function(err,data){
  if (err){
    return console.log(err);
  }
    console.log(data);
  });
},

  csvReadStream: function (filepath){
    var stream = fs.createReadStream(filepath);

    csv.fromStream(stream, {headers: false, trim : true})
    .on("data", function(data){
      if((data[0] === ("date"))||(data[0]===("Date"))){
        console.log("headers");
      }else{
       console.log(data);
      }
     })
     .on("end", function(){
       console.log("done");
     });
   }
}
