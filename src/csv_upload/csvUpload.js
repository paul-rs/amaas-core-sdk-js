/**
 * !This is an internal function that should not be called by the end user!
 * 
 * Insert csv data into database
 * @function csvUpload
 * @param {string} csv 
 * @param {string} AMaaSClass: class being requested/sent (e.g. Transaction) (required)
 * @param {string} AMId: Asset Manager Id (required)
 */

//var csv is the string
export function csvUpload({csv}){
  //convert csv string to json format
  var insertedCsv=[];
  var lines=csv.split("\n"); 
  var headers=lines[0].split(", "); //find headers
  
  for(var i=1;i<lines.length;i++)
  {
    var obj = {}; //declare object for each header
    var currentline=lines[i].split(", ");

    for(var j=0;j<headers.length;j++)
    {
      if(isNaN(currentline[j]))
      obj[headers[j]] = currentline[j];//obj is a key-value pair obj
      else 
      obj[headers[j]] = parseInt(currentline[j]);

    }
    insertedCsv.push(obj);

    //testing
    for(var j=0;j<headers.length;j++)
    {
       console.log(Object.keys(obj)[j]+" : "+Object.values(obj)[j]);
    }

  }

  return insertedCsv;

}
