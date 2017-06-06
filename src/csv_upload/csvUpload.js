import {Address, Email} from '../parties/Children/index'
import {Charge, Code, Comment, Link, Reference} from '../children/index'
/**
 * !This is an internal function that should not be called by the end user!
 * 
 * Convert csv string to json 
 * @function parseCsv
 * @param {string} csvString 
 */
export function parseCsv({csvString})
{
   //convert csv string to json format
  var insertedCsv=[];
  var lines=csvString.split("\n"); 
  var headers=lines[0].split(","); //find headers
  var objectParam=["links", "emails", "addresses", "comments", "references", "charges", "codes"]
   
  for(var i=1;i<lines.length;i++) //for each line in csv data string
  {
    var obj = {}; //declare object for each line of data   
    //for each line
    for(var j=0;j<headers.length;j++)
    {
      if(lines[i]==undefined) {
          obj[headers[j]]=undefined;
          break;
      }

      if(objectParam.indexOf(headers[j]) <= -1) //true if the header is not in the objectParam
      {
         var firstPart=lines[i].split(/,(.+)/)[0];
         lines[i]=lines[i].split(/,(.+)/)[1];//update lines
        
         if(!isNaN(firstPart))
         obj[headers[j]] = parseInt(firstPart);//obj is a key-value pair obj
         else if(firstPart=="true")
         obj[headers[j]] = true;
         else if(firstPart=="false")
         obj[headers[j]] = false;
         else 
         obj[headers[j]] = firstPart;
      }
      else
      {
        //scan the string and get the object string 
        var position=0;
        var counter=0;
       
        for(var x=0; x<lines[i].length; x++)
        {    
          if(lines[i].charAt(x)=="{") counter++;
          else if(lines[i].charAt(x)=="}") counter--;
          
          if(counter==0) 
          {
            position=x;
            break;
          }
        }
        var objString=lines[i].substr(0, position+1);  
        if(headers[j]=="links")
        {
           var linkString=objString;
           var convertedObjectString=parseLink({linkString});
           obj[headers[j]]=convertedObjectString;
        }
        else
        {
            var classString=objString;
            var thisHeader=headers[j];
            var convertedObjectString=parseClassString({classString, thisHeader});
            obj[headers[j]]=convertedObjectString; 
        }

        lines[i]=lines[i].substr(position+2, lines[i].length); //+2 because the comma hasn to be removed
      }
    }
     insertedCsv.push(obj);//result is an array of objects
  }    
    return insertedCsv;
}


/**
 * !This is an internal function that should not be called by the end user!
 * 
 * Convert csv link string into Link object
 * @function parseLink
 * @param {string} linkString 
 */
export function parseLink({linkString})
{
   
   var link={};
   var currentLine=linkString;

   while(currentLine!=null || currentLine!="}")
   {
     var linksForEachType=[];
     var firstPart=currentLine.split(/](.+)/)[0];
     if(firstPart.charAt(0)==",") firstPart = firstPart.substr(0, 0) + '{' + firstPart.substr(0 + 1);;
     currentLine=currentLine.split(/](.+)/)[1];
     var splitTheFirstPart=firstPart.split("[");
     var removeBracket=splitTheFirstPart[0].split("{");
     var links=splitTheFirstPart[1];
     if(links==null) break;
     
     var removeSemi=removeBracket[1].split(":");
     var linkType=removeSemi[0];
    
    while(links!=null || links!="}")
   {
     var subLinks={};
     if(links.charAt(0)==",") links = links.substr(0, 0) + '' + links.substr(0 + 1);
     var firstPartLinks=links.split(/}(.*)/)[0];//first occurence of }
     links=links.split(/}(.*)/)[1];
     
     var firstPartSplit=firstPartLinks.split("{");
     if(firstPartSplit[1]==null) break;//no more address to split

     var value=firstPartSplit[1];
     
     if(value==null) break;
     var elements=value.split(",");
     //insert elements into objects
     for(var i=0; i<elements.length; i++)
     {
       var eachElement=elements[i];
       var splitEachElement=eachElement.split(":");
       if(splitEachElement[1]=="true")
       subLinks[splitEachElement[0]]=true;
       else if(splitEachElement[1]=="false")
       subLinks[splitEachElement[0]]=false;
       else if(!isNaN(splitEachElement[1]))
       subLinks[splitEachElement[0]]= parseInt(splitEachElement[1]);
       else
       subLinks[splitEachElement[0]]=splitEachElement[1];
     }  
     //add link instance
     const testLink=new Link(subLinks);
     linksForEachType.push(testLink);     
   }//for each link array/link type 
  link[linkType]=linksForEachType;
  } //for each link object
    return link;
}

/**
 * !This is an internal function that should not be called by the end user!
 * 
 * Convert csv object string into object
 * @function parseAdress
 * @param {string} classString
 * This function ca be used for all object parameters except links. 
 * example: csvAddress: '{personal:{line_one:abc,active:true},business:{line_one:def,active:false}}'
 * will be converted to object of Address objects
 */

export function parseClassString({classString, thisHeader})
{
   var objectFinal={};
   var currentLine=classString;
  
   while(currentLine!=null || currentLine!="}")
   {
     var firstPart=currentLine.split(/}(.+)/)[0];
     currentLine=currentLine.split(/}(.+)/)[1];
     if(firstPart.charAt(0)==",") firstPart = firstPart.substr(0, 0) + '{' + firstPart.substr(0 + 1);
     
     var firstPartSplit=firstPart.split("{");
     if(firstPartSplit[1]==null) break;//no more address to split
     var key=firstPartSplit[1].slice(0, firstPartSplit[1].length-1).trim();
     var value=firstPartSplit[2];
     var subClassObject={};

     if(value==undefined) break;
     var elements=value.split(",");

     for(var i=0; i<elements.length; i++)
     {
       var eachElement=elements[i];
       var splitEachElement=eachElement.split(":");
       if(splitEachElement[1]=="true")
       subClassObject[splitEachElement[0]]=true;
       else if(splitEachElement[1]=="false")
       subClassObject[splitEachElement[0]]=false;
       else if(!isNaN(splitEachElement[1]))
       subClassObject[splitEachElement[0]]= parseInt(splitEachElement[1]);
       else
       subClassObject[splitEachElement[0]]=splitEachElement[1];
     }
      
      //"links", "emails", "addresses", "comments", "references", "charges"
      if(thisHeader=="addresses"){
      const testAddress=new Address(subClassObject);//create an address instance
      objectFinal[key]=testAddress;
      }
      else if(thisHeader=="emails"){
      const testEmail=new Email(subClassObject);//create an address instance
      objectFinal[key]=testEmail;
      }
      else if(thisHeader=="references"){
      const testReference=new Reference(subClassObject);//create an address instance
      objectFinal[key]=testReference;
      }
      else if(thisHeader=="comments"){
      const testComment=new Comment(subClassObject);//create an address instance
      objectFinal[key]=testComment;
      }
      else if(thisHeader=="charges"){
      const testCharge=new Charge(subClassObject);//create an address instance
      objectFinal[key]=testCharge;
      }
      else if(thisHeader=="codes"){
      const testCode=new Code(subClassObject);//create an address instance
      objectFinal[key]=testCode;
      }
   }
    return objectFinal;
}


