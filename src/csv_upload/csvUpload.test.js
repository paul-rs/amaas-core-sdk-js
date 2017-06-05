import nock from 'nock'
import * as csv from './csvUpload'
import * as funcs from './csvUpload'
import * as api from '../exports/api'
import { Address } from '../parties/Children/address'
import {Charge, Code, Comment, Link, Reference} from '../children/index'

describe('csvUpload', () => {
  it('should insert to database', () =>{
  //test csv string
  const testParams = {
      csvString: 'partyId,addresses,links,assetManagerId,comments'
      +'\n'+'A1UNKOYGGR,{personal:{lineOne:abc,lineTwo:linetwotest,active:true},business:{lineOne:def,active:false},legel:{lineOne:def,active:false}},{link_1:[{linkedId:1,active:true},{linkedId:2,active:false}],link_2:[{linkedId:1,active:false}]},1234,{commentType:{commentValue:testComment,active:true,updatedBy:dgfdsf,createdTime:05-06-2017,version:1}}'
      +'\n'+'A1UNKOYGGR,{personal:{lineOne:abc,lineTwo:linetwotest,active:true},business:{lineOne:def,active:false},legel:{lineOne:def,active:false}},{link_1:[{linkedId:1,active:true},{linkedId:2,active:false}],link_2:[{linkedId:1,active:false}]},1234,{commentType:{commentValue:testComment,active:true,updatedBy:dgfdsf,createdTime:05-06-2017,version:1}}'
      ,
      header: "addresses"
  }


 const datatest=[{
                "addresses": 
                       {"business": {"active": false, "addressPrimary": false, "city": undefined, "countryId": undefined, "createdBy": "TEMP", "createdTime": undefined, "lineOne": "def", "lineTwo": undefined, "postalCode": undefined, "region": undefined, "updatedBy": "TEMP", "updatedTime": undefined, "version": 1}, 
                        "legel": {"active": false, "addressPrimary": false, "city": undefined, "countryId": undefined, "createdBy": "TEMP", "createdTime": undefined, "lineOne": "def", "lineTwo": undefined, "postalCode": undefined, "region": undefined, "updatedBy": "TEMP", "updatedTime": undefined, "version": 1}, 
                        "personal": {"active": true, "addressPrimary": false, "city": undefined, "countryId": undefined, "createdBy": "TEMP", "createdTime": undefined, "lineOne": "abc", "lineTwo": "linetwotest", "postalCode": undefined, "region": undefined, "updatedBy": "TEMP", "updatedTime": undefined, "version": 1}
                      }, 
                  "assetManagerId": 1234, 
                  "links": {"link_1": 
                                   [{"active": true,  "createdBy": "TEMP",  "createdTime": undefined,  "linkedId": 1, "updatedBy": "TEMP",  "updatedTime": undefined, "version": 1}, {"active": false, "createdBy": "TEMP",  "createdTime": undefined,  "linkedId": 2, "updatedBy": "TEMP",  "updatedTime": undefined, "version": 1}], 
                            "link_2": [{"active": false, "createdBy": "TEMP",  "createdTime": undefined,  "linkedId": 1, "updatedBy": "TEMP",  "updatedTime": undefined, "version": 1}]
                           }, 
                  "partyId": "A1UNKOYGGR",
                  "comments":{"commentType": {"commentValue": "testComment", "active": true, "createdBy": "TEMP", "updatedBy": "dgfdsf", "createdTime": "05-06-2017", "updatedTime": undefined, "version": 1}}
                }, 
                {
                "addresses": 
                     {"business": {"active": false, "addressPrimary": false, "city": undefined, "countryId": undefined, "createdBy": "TEMP", "createdTime": undefined, "lineOne": "def", "lineTwo": undefined, "postalCode": undefined, "region": undefined, "updatedBy": "TEMP", "updatedTime": undefined, "version": 1}, 
                      "legel": {"active": false, "addressPrimary": false, "city": undefined, "countryId": undefined, "createdBy": "TEMP", "createdTime": undefined, "lineOne": "def", "lineTwo": undefined, "postalCode": undefined, "region": undefined, "updatedBy": "TEMP", "updatedTime": undefined, "version": 1},
                      "personal": {"active": true, "addressPrimary": false, "city": undefined, "countryId": undefined, "createdBy": "TEMP", "createdTime": undefined, "lineOne": "abc", "lineTwo": "linetwotest", "postalCode": undefined, "region": undefined, "updatedBy": "TEMP", "updatedTime": undefined, "version": 1}
                      }, 
                "assetManagerId": 1234,
                "links": {"link_1": 
                                   [{"active": true,  "createdBy": "TEMP",  "createdTime": undefined,  "linkedId": 1, "updatedBy": "TEMP",  "updatedTime": undefined, "version": 1}, {"active": false, "createdBy": "TEMP",  "createdTime": undefined,  "linkedId": 2, "updatedBy": "TEMP",  "updatedTime": undefined, "version": 1}], 
                            "link_2": [{"active": false, "createdBy": "TEMP",  "createdTime": undefined,  "linkedId": 1, "updatedBy": "TEMP",  "updatedTime": undefined, "version": 1}]
                           }, 
                 "partyId": "A1UNKOYGGR",
                 "comments":{"commentType": {"commentValue": "testComment", "active": true, "createdBy": "TEMP", "updatedBy": "dgfdsf", "createdTime": "05-06-2017", "updatedTime": undefined, "version": 1}}
                 }]
  
  //test address
  const p1={
      addressString: 'address'
            +'\n'+'{personal:{line_one:abc,active:true},business:{line_one:def,active:false},legel:{line_one:def,active:false}}'
   }

   const data1={
     
            personal: {//object
                       line_one: "abc", //element
                       active: true
                     },
            business: {
                      line_one: "def",
                      active: false
                    },
            legel: {
              line_one: "def",
              active:false
            }
   }
   
  //test links
  const p2={
      linkString: 'link'
            +'\n'+'{link_1:[{linkedId:1,active:true},{linkedId:2,active:false}],link_2:[{linkedId:1,active:false}]}'
   } 
   const data2={
    
       link_1:
             [
               {linkedId: 1,
               active: true
               },
               {
                 linkedId: 2,
                 active: false
               }
             ], 
        link_2:
              [
               {linkedId: 1,
               active: false
               }
              ]
    }
     //const testAddress = new Address({active: false});
      
     //expect(csv.parseAddressString(p1)).toEqual(data1);
     //expect(csv.parseLink(p2)).toEqual(data2);
     expect(csv.parseCsv(testParams)).toEqual(datatest);
  })
})