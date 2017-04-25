import {
  buildURL,
  retrieveData,
  insertData,
  searchData,
  putData,
  patchData,
  deleteData,
  endpoint
} from './'

import ENDPOINTS from '../../config.js'

// import { baseURL } from './constants.js'

import nock from 'nock'

let token = process.env.API_TOKEN

describe('buildURL function', () => {
  it('should throw if no class supplied', () => {
    function tester() {
      buildURL({})
    }
    expect(tester).toThrowError('Invalid class type: undefined')
  })
  it('should not build past class if resourceId is supplied but not AMId', () => {
    const testParams = {
      AMaaSClass: 'book',
      AMId: undefined,
      resourceId: 'testResource'
    }
    const expectedURL = `${endpoint()}/book/books/`
    expect(buildURL(testParams)).toEqual(expectedURL)
  })
  it('should build correctly if all parameters are specified', () => {
    const testParams = {
      AMaaSClass: 'book',
      AMId: 'testAMId',
      resourceId: 'testResource'
    }
    const expectedURL = `${endpoint()}/book/books/testAMId/testResource`
    expect(buildURL(testParams)).toEqual(expectedURL)
  })
})

describe('retrieveData', () => {
  const testParams = {
    AMaaSClass: 'book',
    AMId: '1234',
    token: 'testToken'
  }
  it('should hit the correct endpoint', callback => {
    const scope = nock(endpoint())
      .get('/book/books/1234?camelcase=true')
      .reply(200, {
        param1: 'testBody'
      })
    retrieveData(testParams, (error, result) => {
      expect(result).toEqual({ param1: 'testBody' })
      callback()
    })
  })
  it('should receive the correct HTTP status code', callback => {
    const scope = nock(endpoint())
      .get('/book/books/1234?camelcase=true')
      .reply(501)
    retrieveData(testParams, (error, result) => {
      expect(error.statusCode).toEqual(501)
      callback()
    })
  })
  it('should return a promise if callback is not provided', () => {
    let promise = retrieveData(testParams).catch(error => {})
    expect(promise).toBeInstanceOf(Promise)
  })
})

describe('insertData', () => {
  const testParams = {
    AMaaSClass: 'book',
    AMId: '1234',
    token: 'testToken',
    data: {
      price: 20
    }
  }
  it('should build the correct url and POST to it', callback => {
    const scope = nock(endpoint())
      .post('/book/books/1234?camelcase=true')
      .reply(200, {
        param1: 'testResponse'
      })
    insertData(testParams, (error, result) => {
      expect(result).toEqual({ param1: 'testResponse' })
      callback()
    })
  })
  it('should return a promise if callback is not provided', () => {
    let promise = insertData(testParams).catch(error => {})
    expect(promise).toBeInstanceOf(Promise)
  })
})

describe('searchData', () => {
  const queries = [
    { key: 'assetIds', values: [1, 2, 44, 'asf'] },
    { key: 'assetClasses', values: ['Currency', 'Bond', 'Equity']},
    { key: 'assetTypes', values: ['GovernmentBond, ForeignExchange']}
  ]
  it('should return a promise if callback is not provided', () => {
    let promise = searchData(queries).catch(error => {})
    expect(promise).toBeInstanceOf(Promise)
  })
})

describe('putData', () => {
  let params = {token, AMaaSClass: 'positions'}
  it('should return a promise if callback is not provided', () => {
    let promise = putData(params).catch(error => {})
    expect(promise).toBeInstanceOf(Promise)
  })
})

describe('patchData', () => {
  let params = {token, AMaaSClass: 'positions'}
  it('should return a promise if callback is not provided', () => {
    let promise = patchData(params).catch(error => {})
    expect(promise).toBeInstanceOf(Promise)
  })
})
