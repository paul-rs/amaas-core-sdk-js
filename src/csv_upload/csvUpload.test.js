import * as csv from './csvUpload'
import { Address } from '../parties/Children/address'
import {Charge, Code, Comment, Link, Reference} from '../children/index'

describe('csvUpload', () => {
  it('should convert child headings to nested objects', () =>{

  const param2={
      csv: 'links.MyLink.0.linked_id,comments.MyComments.comment_value'
      +'\n'+'1,PAID'
      +'\n'+'2,REFUND'
      +'\n'+'3,'
      +'\n'+',PAID'
  }

  const data2=[
      {
        links:
        {
            MyLink:
            [
                {
                  active: true,
                  createdBy: "TEMP",
                  createdTime: undefined,
                  linkedId:  1,
                  updatedBy: "TEMP",
                  updatedTime: undefined,
                  version: 1
                }
            ]
        },
        comments:
        {
            MyComments:
            {
              commentValue: "PAID",
              createdBy: "TEMP",
              updatedBy: "TEMP",
              createdTime: undefined,
              updatedTime: undefined,
              version: 1,
              active: true   
            }
        }

      },
      {
        links:
        {
            MyLink:
            [
                {
                    active: true,
                    createdBy: "TEMP",
                    createdTime: undefined,
                    linkedId:  2,
                    updatedBy: "TEMP",
                    updatedTime: undefined,
                    version: 1
                }
            ]
        },
        comments:
        {
            MyComments:
            {
              commentValue: "REFUND",
              createdBy: "TEMP",
              updatedBy: "TEMP",
              createdTime: undefined,
              updatedTime: undefined,
              version: 1,
              active: true  
            }
        }

      },
      {
        links:
        {
            MyLink:
            [
                {
                    active: true,
                    createdBy: "TEMP",
                    createdTime: undefined,
                    linkedId:  3,
                    updatedBy: "TEMP",
                    updatedTime: undefined,
                    version: 1
                }
            ]
        },
        comments: undefined
      },
      {
        links: undefined,
       
        comments:
        {
            MyComments:
            {
              commentValue: "PAID",
              createdBy: "TEMP",
              updatedBy: "TEMP",
              createdTime: undefined,
              updatedTime: undefined,
              version: 1,
              active: true
            }
        }

      }
  ]

  expect(csv.parseString(param2)).toEqual(data2);
})

it('should convert headings to camelCase', () => {

 const param={
      csv: 'asset_manager_id,party_id,transaction_id'
      +'\n'+'1,224,'
      +'\n'+'1,2,3'
      +'\n'+',4,5'
  }

  const data=[{
      assetManagerId: 1,
      partyId: 224,
      transactionId: undefined
  },
  {
      assetManagerId: 1,
      partyId: 2,
      transactionId: 3
  },
  {
      assetManagerId: undefined,
      partyId: 4,
      transactionId: 5
  }
  ]

  expect(csv.parseString(param)).toEqual(data);

})
})