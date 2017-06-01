import nock from 'nock'
import {csvUpload } from './indexRelationships'
import * as funcs from './indexRelationships'
import * as api from '../exports/api'

describe('csvUpload', () => {
  it('should insert to database', () =>{
  const testParams = {
      AMaaSClass: 'relationship',
      AMId: '1234',
      csv: 'assetManagerId, relationshipId, relatedId, relationshipType'
      +'\n'+'1234, 1, 10, External'
      +'\n'+'1234, 2, 10, External'
      +'\n'+'1234, 3, 10, External'
  }
  
  const rel =[ 
       {
        assetManagerId: 1234,
        relationshipType: "External",
        relatedId: 10,
        relationshipId: 1
      },
      {
        assetManagerId: 1234,
        relationshipType: "External",
        relatedId: 10,
        relationshipId: 2
      },
      {
        assetManagerId: 1234,
        relationshipType: "External",
        relatedId: 10,
        relationshipId: 3
      }
      ]

   expect(csvUpload(testParams)).toEqual(rel);   

  /*csvUpload(testParams).then(res =>{
    expect(res).toEqual(expect.objectContaining(csv))
  }).catch(err => {
    console.error(err)
  })*/
})
  
})