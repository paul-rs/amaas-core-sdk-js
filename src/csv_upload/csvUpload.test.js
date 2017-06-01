import nock from 'nock'
import {csvUpload } from './csvUpload'
import * as funcs from './csvUpload'
import * as api from '../exports/api'
import {retrieve} from '../utils/books'
import * as network from '../utils/network'

describe('csvUpload', () => {
  it('should insert to database', () =>{
    network.insertData = jest.fn(() => {
     return Promise.resolve()
    })
  const testParams = {
      csv: 'description, bookType, businessUnit, partyId, closeTime, timezone, assetManagerId, ownerId, baseCurrency'
           +'\n'+'RRN4WVXI1F3YA1IGMKZF, Trading, TestUnit, A1UNKOYGGR, 18:00:00, Asia/Tokyo, '+1234+', 50SJMSPK7A, USD'
           +'\n'+'RRN4WVXI1F3YA1IGMKZF, Trading, TestUnit, A1UNKOYGGR, 18:00:00, Asia/Tokyo, '+1234+', 50SJMSPK7A, EURO'
           +'\n'+'RRN4WVXI1F3YA1IGMKZF, Trading, TestUnit, A1UNKOYGGR, 18:00:00, Asia/Tokyo, '+1234+', 50SJMSPK7A, USD'
  }

  const data =[ 
       {
        description: "RRN4WVXI1F3YA1IGMKZF",
        bookType: "Trading",
        businessUnit: "TestUnit",
        partyId: "A1UNKOYGGR",
        closeTime: "18:00:00",
        timezone: "Asia/Tokyo",
        assetManagerId: 1234,
        ownerId: "50SJMSPK7A",
        baseCurrency: "USD",
      },
      {
        description: "RRN4WVXI1F3YA1IGMKZF",
        bookType: "Trading",
        businessUnit: "TestUnit",
        partyId: "A1UNKOYGGR",
        closeTime: "18:00:00",
        timezone: "Asia/Tokyo",
        assetManagerId: 1234,
        ownerId: "50SJMSPK7A",
        baseCurrency: "EURO",
      },
      {
        description: "RRN4WVXI1F3YA1IGMKZF",
        bookType: "Trading",
        businessUnit: "TestUnit",
        partyId: "A1UNKOYGGR",
        closeTime: "18:00:00",
        timezone: "Asia/Tokyo",
        assetManagerId: 1234,
        ownerId: "50SJMSPK7A",
        baseCurrency: "USD",
      }
 ]

  csvUpload(testParams)
  expect(csvUpload(testParams)).toEqual(data)
  
})
  
})
