import nock from 'nock'
import {csvUpload } from './indexBook'
import * as funcs from './indexBook'
import * as api from '../exports/api'


api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})

describe('csvUpload', () => {
  it('should insert to database', () =>{
  const testParams = {
      AMaaSClass: 'book',
      AMId: '1234',
      csv: 'description, bookType, businessUnit, partyId, closeTime, timezone, assetManagerId, ownerId, baseCurrency,'
      +'\n'+'RRN4WVXI1F3YA1IGMKZF, null, A1UNKOYGGR, 18:00:00, Asia/Tokyo, 1, 50SJMSPK7A, USD'
  }

  csvUpload(testParams).then(res =>{
    expect(res).toEqual(expect.objectContaining(testParams))
  }).catch(err => {
    console.error(err)
  })
})
  
})
