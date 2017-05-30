import nock from 'nock'
import {csvUpload } from './indexTransaction'
import * as funcs from './indexTransaction'
import * as api from '../exports/api'


api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})

describe('csvUpload', () => {
  it('should insert to database', () =>{
  const testParams = {
      AMaaSClass: 'transaction',
      AMId: '1234',
      csv: 'settlementDate, transactionDate, assetManagerId, counterpartyBookId, assetId, settlementCurrency, transactionType, transactionAction, price, netSettlement, transactionCurrency, executionTime, clientId, grossSettlement, transactionId, assetBookId, quantity, '
      +'\n'+'2017-03-17, 2017-03-15, 1, G95EIYQA6I, 846, SGD, Block, Remove, 352, 35269, SGD, 2017-03-15T05:02:18.928148+00:00, 1, 35269, testTransactionID, JWXWNSBABR, 100'
  }

  csvUpload(testParams).then(res =>{
    expect(res).toEqual(expect.objectContaining(testParams))
  }).catch(err => {
    console.error(err)
  })
})
  
})
