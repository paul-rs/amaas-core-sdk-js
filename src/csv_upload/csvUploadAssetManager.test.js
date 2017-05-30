import nock from 'nock'
import {csvUpload } from './indexAssetManager'
import * as funcs from './indexAssetManager'
import * as api from '../exports/api'


api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})

describe('csvUpload', () => {
  it('should insert to database', () =>{
  const testParams = {
      AMaaSClass: 'assetManager',
      AMId: '1234',
      csv: 'defaultBookCloseTime, defaultTimezone, assetManagerType, clientId, assetManagerStatus, defaultBookOwnerId '
      +'\n'+'17:30:00, UTC, Accredited Investor, 1, Active, 2'
  }

  csvUpload(testParams).then(res =>{
    expect(res).toEqual(expect.objectContaining(testParams))
  }).catch(err => {
    console.error(err)
  })
})
  
})