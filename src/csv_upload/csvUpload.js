import {Address, Email} from '../parties/Children/index'
import {Charge, Code, Comment, Link, Reference} from '../children/index'
import {camelCase} from 'lodash'

/**
 * !This is an internal function that should not be called by the end user!
 * 
 * Convert csv object string into object
 * @function parseString
 * @param {string} csv
 * This function ca be used for all object parameters.
 */

export function parseString({csv})
{
   var jsonArray=[]; 
   var lines=csv.split("\n"); 
   var header=lines[0];
   var headers=lines[0].split(",")
   var objectParam=["emails", "addresses", "comments", "references", "charges", "codes"]

   for(var j=1; j<lines.length; j++) //for each line of data
   {
    var currentLine=lines[j];
    var references=[];
    var finalObject={};
    for(var i=0; i<headers.length; i++)
    {
      if(headers[i].indexOf('.') > -1)//if the string contains '.' which means the header belongs to an object
      {
         var headerElements=headers[i].split(".");//className, type, keys
         headerElements[2]=camelCase(headerElements[2]);

         //pre-processing
         if(currentLine==null) //the last value is not specified
          {
             if(!references.includes(headerElements[0]))
             finalObject[headerElements[0]]=undefined;
             else if (references.includes(headerElements[0])&& !references.includes(headerElements[1]))
             {
               finalObject[headerElements[0]][headerElements[1]]=undefined;
             }
             else if (references.includes(headerElements[0])&& references.includes(headerElements[1]) && !references.includes(headerElements[2]))
             {
               //do nothing
             }
             continue;
          }
          //get the value for the header
          var currentValue=currentLine.split(/,(.+)/)[0];
          if(currentValue.charAt(currentValue.length-1)==",") currentValue=currentValue.substr(0, currentValue.length-1);
          if(currentValue=="") 
          {
             currentLine=currentLine.split(/,(.+)/)[1];
             continue;
          }
          if(currentValue=="true") currentValue=true;
          else if(currentValue=="false") currentValue=false;    
          else if(!isNaN(currentValue))
          currentValue= parseInt(currentValue);
          currentLine=currentLine.split(/,(.+)/)[1];//update currentLine
          //end pre-processing
          //for links only
          if(headerElements[0]=="links") 
          {
            var headerElementsForLinks=headers[i].split(".");//className, type, keys
            var keyNameArray=headerElementsForLinks[1].split("[");
          
            var keyName=keyNameArray[0];
            var objectNumber=keyNameArray[1].split("]")
            var newHeaderElements=[];
            newHeaderElements.push(headerElementsForLinks[0]);  
            newHeaderElements.push(keyName); 
            headerElementsForLinks[2]=camelCase(headerElementsForLinks[2]);
            newHeaderElements.push(headerElementsForLinks[2]);
            newHeaderElements.push(objectNumber[0]);
          
           if(newHeaderElements[0]=="links" && !references.includes("links"))
           {
             var linkObject={};
             var linkTypeArray=[];
             var linkObjectParam={};

             linkObjectParam[newHeaderElements[2]]=currentValue;
             const testLink=new Link(linkObjectParam);
             linkTypeArray.push(testLink);
             linkObject[newHeaderElements[1]]=linkTypeArray;
             finalObject[newHeaderElements[0]]=linkObject;     
           }
           else if(references.includes(newHeaderElements[0]) && !references.includes(newHeaderElements[1]))
           {
             var linkObjectParam={};
             var linkTypeArray=[];
             linkObjectParam[newHeaderElements[2]]=currentValue;          
             const testLink=new Link(linkObjectParam);
             linkTypeArray.push(testLink);
             finalObject[newHeaderElements[0]][newHeaderElements[1]]=linkTypeArray;

           }
           else if (references.includes(newHeaderElements[0]) && references.includes(newHeaderElements[1]) && references.includes(newHeaderElements[3]))
           {
             finalObject[newHeaderElements[0]][newHeaderElements[1]][newHeaderElements[3]][newHeaderElements[2]]=currentValue;
           }
           else if(references.includes(newHeaderElements[0]) && references.includes(newHeaderElements[1]) && !references.includes(newHeaderElements[3]))
           {
              var anotherLinkObject={};
             anotherLinkObject[headerElements[2]]=currentValue;
             const testLink=new Link(anotherLinkObject);
             finalObject[newHeaderElements[0]][newHeaderElements[1]].push(testLink);
           }
              references=newHeaderElements; //update references
              continue;//to skip the rest of the code. for links.
           }
         
           //other than links
           if(objectParam.includes(headerElements[0]) && !references.includes(headerElements[0]))
           {
            var commentType={};            
            commentType[headerElements[2]]=currentValue;//get the string before the first ','

            let testComment;
            if(headerElements[0]=="addresses"){
            testComment=new Address(commentType);//create an address instance
            }
            else if(headerElements[0]=="emails"){
            testComment=new Email(commentType);//create an address instance
            }
            else if(headerElements[0]=="references"){
            testComment=new Reference(commentType);//create an address instance
            }
            else if(headerElements[0]=="comments"){
            testComment=new Comment(commentType);//create an address instance
            }
            else if(headerElements[0]=="charges"){
            testComment=new Charge(commentType);//create an address instance   
            }
            else if (headerElements[0]=="codes"){
            testComment=new Code(commentType);//create an address instance
           }
       
            var commentObject={};
            commentObject[headerElements[1]]=testComment;
            finalObject[headerElements[0]]=commentObject;
          }
          else if(references.includes(headerElements[0]) && !references.includes(headerElements[1]))
          {
             var commentType={}; 
             commentType[headerElements[2]]=currentValue;//get the string before the first ','

            let testComment;
            if(headerElements[0]=="addresses"){
            testComment=new Address(commentType);//create an address instance
            }
            else if(headerElements[0]=="emails"){
            testComment=new Email(commentType);//create an address instance
            }
            else if(headerElements[0]=="references"){
            testComment=new Reference(commentType);//create an address instance
            }
            else if(headerElements[0]=="comments"){
             testComment=new Comment(commentType);//create an address instance
            }
            else if(headerElements[0]=="charges"){
             testComment=new Charge(commentType);//create an address instance   
            }
            else if(headerElements[0]=="codes"){
            testComment=new Code(commentType);//create an address instance
            }
             finalObject[headerElements[0]][headerElements[1]]=testComment;
          }
          else if (references.includes(headerElements[0]) && references.includes(headerElements[1]))
          {
             finalObject[headerElements[0]][headerElements[1]][headerElements[2]]=currentValue;   
          }
          references=headerElements;//update references
        }
      else
      {
        if(currentLine==null) //the last value is not specified
        {
          finalObject[headers[i]]=undefined;
          continue;
        }

        var firstPart=currentLine.split(/,(.+)/)[0];//get the string before the first ','
        currentLine=currentLine.split(/,(.+)/)[1];
        finalObject[headers[i]]=firstPart;

        if(firstPart=="") 
        {
           finalObject[headers[i]]=undefined;
           continue;
        }
      }
    }
    jsonArray.push(finalObject)
   }
   return jsonArray;
}



