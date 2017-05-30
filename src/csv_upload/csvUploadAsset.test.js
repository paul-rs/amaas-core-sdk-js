import nock from 'nock'
import {csvUpload } from './indexAsset'
import * as funcs from './indexAsset'
import * as api from '../exports/api'


api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})

describe('csvUpload', () => {
  it('should insert to database', () =>{
  const testParams = {
      AMaaSClass: 'asset',
      AMId: '1',
      csv: 'description, assetType, assetManagerId, assetId, '+'\n'+'testAsset, Equity, 1, 1234'
  }
  csvUpload(testParams).then(res =>{
    expect(res).toEqual(expect.objectContaining(testParams))
  }).catch(err => {
    console.error(err)
  })
})
  
})
