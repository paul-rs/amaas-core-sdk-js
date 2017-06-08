import * as csv from './csvUpload'
import { Address } from '../parties/Children/address'
import {Charge, Code, Comment, Link, Reference} from '../children/index'

describe('csvUpload', () => {
  it('should convert csv string to json', () =>{

    const param={
     csv: 'description,comments.com1.active,comments.com1.version,comments.com2.active,closeTime,emails.com1.active,emails.com1.version,emails.com2.version,links.link1[0].linked_id,links.link1[0].active,links.link1[1].linked_id,links.link1[1].active,links.link2[0].linked_id,links.link2[0].active'
      +'\n'+'RRN4WVXI1F3YA1IGMKZF,true,2,false,18:00:00,false,2,2,1,true,2,false,1,false'
      +'\n'+',,1,,18:00:00,false,,,1,true,2,false,,'
  }

  const data=[{
      description: "RRN4WVXI1F3YA1IGMKZF",
      comments:{
          com1:{
              createdBy: "TEMP",
              updatedBy: "TEMP",
              createdTime: undefined,
              updatedTime: undefined,
              version: 2,
              commentValue: undefined,
              active: true     
          },
          com2:{
              createdBy: "TEMP",
              updatedBy: "TEMP",
              createdTime: undefined,
              updatedTime: undefined,
              version: 1,
              commentValue: undefined,
              active: false
          }
      }  ,
      closeTime: "18:00:00",
      emails: {
        com1: {
            active: false, 
            createdBy: "TEMP", 
            createdTime: undefined, 
            email: undefined, 
            emailPrimary: false, 
            updatedBy: "TEMP", 
            updatedTime: undefined, 
            version: 2
            },
        com2:{
           active: true, 
           createdBy: "TEMP", 
           createdTime: undefined, 
           email: undefined, 
           emailPrimary: false, 
           updatedBy: "TEMP", 
           updatedTime: undefined, 
           version: 2
            }
      },
      links:{
          link1:[{
              active: true,
              createdBy: "TEMP",
              createdTime: undefined,
              linkedId:  1,
              updatedBy: "TEMP",
              updatedTime: undefined,
              version: 1
          },
          {
              active: false,
              createdBy: "TEMP",
              createdTime: undefined,
              linkedId:  2,
              updatedBy: "TEMP",
              updatedTime: undefined,
              version: 1
          }],
          link2:[{
              active: false,
              createdBy: "TEMP",
              createdTime: undefined,
              linkedId:  1,
              updatedBy: "TEMP",
              updatedTime: undefined,
              version: 1
          }]
      }
  },
  {
      description: undefined,
      comments:{
          com1:{
              createdBy: "TEMP",
              updatedBy: "TEMP",
              createdTime: undefined,
              updatedTime: undefined,
              version: 1,
              commentValue: undefined,
              active: true     
          },
          com2: undefined
      },
      closeTime: "18:00:00",
      emails: {
        com1: {
            active: false, 
            createdBy: "TEMP", 
            createdTime: undefined, 
            email: undefined, 
            emailPrimary: false, 
            updatedBy: "TEMP", 
            updatedTime: undefined, 
            version: 1
        }
        },
        links:{
          link1:[{
              active: true,
              createdBy: "TEMP",
              createdTime: undefined,
              linkedId:  1,
              updatedBy: "TEMP",
              updatedTime: undefined,
              version: 1
          },
          {
              active: false,
              createdBy: "TEMP",
              createdTime: undefined,
              linkedId:  2,
              updatedBy: "TEMP",
              updatedTime: undefined,
              version: 1
          }],
          link2: undefined
      }
      }
  ]
     expect(csv.parseString(param)).toEqual(data);
  })
})