import nock from 'nock'
import {csvUpload } from './indexRelationships'
import * as funcs from './indexRelationships'
import * as api from '../exports/api'


api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})

describe('csvUpload', () => {
  it('should insert to database', () =>{
  const testParams = {
      AMaaSClass: 'relationship',
      AMId: '1234',
      csv: 'assetManagerId, relationshipId, relatedId, relationshipStatus, relationshipType, clientId '
      +'\n'+'testAMId, testRelationshipId, testRelatedId, testRelStatus, Employee, testClientId'
  }

  csvUpload(testParams).then(res =>{
    expect(res).toEqual(expect.objectContaining(testParams))
    expect(testRel.assetManagerId).toEqual('testAMId')
      expect(testRel.relationshipId).toEqual('testRelationshipId')
      expect(testRel.relatedId).toEqual('testRelatedId')
      expect(testRel.relationshipStatus).toEqual('testRelStatus')
      expect(testRel.relationshipType).toEqual('Employee')
      expect(testRel.clientId).toEqual('testClientId')
  }).catch(err => {
    console.error(err)
  })
})
  
})