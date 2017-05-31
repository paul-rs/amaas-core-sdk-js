import { retrieveData, insertData, patchData, putData, searchData, deleteData } from '../utils/network'
require('dotenv').config()
import request from 'superagent'
import { endpoint, userPoolId, clientAppId } from '../config.js'
import fs from 'fs'
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js'
import expandTilde from 'expand-tilde'
import Transaction from '../transactions'
import {retrieve} from '../utils/transactions/index'

/**s
 * Pull lists of transactions to excel
 * @function exportToExcel
 * @memberof module: api.Transactions
 * @static
 * @param {object} params -Object of parameters:
 * @param {number} params.AMId
 */

export function exportToExcel({AMId, resourceId}, callback)
{
      /*  let promise = retrieve({AMId, bookId}).then(result => {
         result = _parseTransaction(result)
         if (typeof callback === 'function') 
         {
            callback(null, result)
         }
         //var data=result
         return result
         })
         if (typeof callback !== 'function') 
          {
              return promise
          }
         promise.catch(error => callback(error)) */

  //get data from database
  const params = {
    AMaaSClass: 'transactions',
    AMId,
    resourceId
  }
  let promise = retrieveData(params).then(result => {
    if (Array.isArray(result)) {
      result = result.map(tran => _parseTransaction(tran))
    } else {
      result = _parseTransaction(result)
    }
    if (typeof callback === 'function') {
      callback(null, result)
    }
    return result
  })
  if (typeof callback !== 'function') {
    // return promise if callback is not provided
    return promise
  }
  promise.catch(error => callback(error))  
  
  //get the range of the data retrieved
  let num=data.length; 
  if(data.length<26)
  {
    lastCol=String.fromCharCode(65+data.length);
  }
  else
  {
    lastCol=String.fromCharCode(Math.floor(data.length/26))+String.fromCharCode(data.length%(26*Math.floor(data.length/26)));
  }
  
  //export-excel
  var express = require('express');
  var nodeExcel= require('excel-export');
  var app=express();
  
  app.get('/Excel',function(req,res){
    var conf={};
    conf.stylesXmFile = "styles.xml";
    conf.name="transactions";
    var instance=data[0]; // at least one transaction
    var properties=Object.getOwnPropertyNames(instance); //an array of all properties 
    for(var i=0; i<properties.length; i++)
    {
       var obj={};
       obj["caption"]=properties[i];
       if(isNaN(properties[i])) obj["type"]="string"     
       else obj["type"]="number"
       conf.cols.push(obj)
    }

    for(var i=0; i<data.length; i++)
    {
       var obj=[];
       obj=Object.values(data[i]);
       conf.rows.push(obj) //array of array
    }
    var result = nodeExcel.execute(conf);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
    res.end(result, 'binary');
    });
    app.listen(3000);//listening on port 3000

}