require('dotenv').config()
import request from 'superagent'
import { endpoint, userPoolId, clientAppId } from '../config.js'
import fs from 'fs'
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js'
import expandTilde from 'expand-tilde'
import {insert} from '../utils/parties'
import Party from '../parties/Party/party'

const userPool = new CognitoUserPool({
  UserPoolId: userPoolId,
  ClientId: clientAppId
})
let stage = 'staging'
let token
let credPath

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
export function csvUpload({AMaaSClass, AMId, csv}, callback){
  //convert csv string to json format
  var lines=csv.split("\n"); 
  var headers=lines[0].split(", "); //find headers

  for(var i=1;i<lines.length;i++)
  {
    var obj = {}; //declare object for each header
    var currentline=lines[i].split(", ");

    for(var j=0;j<headers.length;j++)
    {
      obj[headers[j]] = currentline[j];//obj is a key-value pair obj
    }
    
    if(AMaaSClass == 'party')
    {
      //let promise=insert({AMId, book: obj}.then(result => {      
       let promise = insert({AMId, obj}).then(result => {
         result = _parseParty(result)
         if (typeof callback === 'function') 
         {
            callback(null, result)
         }
         return result
         })
         if (typeof callback !== 'function') 
          {
              return promise
          }
         promise.catch(error => callback(error))  
    }
    else{
      console.log("Upload parties")
    }
   
  }

}