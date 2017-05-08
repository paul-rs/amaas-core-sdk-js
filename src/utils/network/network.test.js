import nock from 'nock'
import {
  buildURL,
  retrieveData,
  insertData,
  searchData,
  putData,
  patchData,
  deleteData,
  getEndpoint
} from './'
import * as funcs from './'
import * as api from '../../exports/api'

api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})

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
    const expectedURL = `${getEndpoint()}/book/books`
    expect(buildURL(testParams)).toEqual(expectedURL)
  })
  it('should build correctly if all parameters are specified', () => {
    const testParams = {
      AMaaSClass: 'book',
      AMId: 'testAMId',
      resourceId: 'testResource'
    }
    const expectedURL = `${getEndpoint()}/book/books/testAMId/testResource`
    expect(buildURL(testParams)).toEqual(expectedURL)
  })
})

describe('retrieveData', () => {
  afterAll(() => {
    nock.cleanAll()
  })
  const testParams = {
    AMaaSClass: 'book',
    AMId: '1234'
  }
  it('should hit the correct endpoint', callback => {
    const scope = nock(getEndpoint())
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
    const scope = nock(getEndpoint())
      .get('/book/books/1234?camelcase=true')
      .reply(501)
    retrieveData(testParams, (error, result) => {
      expect(error.status).toEqual(501)
      callback()
    })
  })
  it('should return a promise if callback is not provided', () => {
    let promise = retrieveData(testParams).catch(error => {})
    expect(promise).toBeInstanceOf(Promise)
  })
})

describe('insertData', () => {
  afterAll(() => {
    nock.cleanAll()
  })
  const testParams = {
    AMaaSClass: 'book',
    AMId: '1234',
    data: {
      price: 20
    }
  }
  it('should build the correct url and POST to it', callback => {
    const scope = nock(getEndpoint())
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
  const query = {
    assetManagerIds: [1, 2]
  }
  it('should return a promise if callback is not provided', () => {
    let promise = searchData({}).then(res => {}).catch(error => {})
    expect(promise).toBeInstanceOf(Promise)
  })
})

describe('putData', () => {
  let params = { AMaaSClass: 'positions'}
  it('should return a promise if callback is not provided', () => {
    let promise = putData(params).catch(error => {})
    expect(promise).toBeInstanceOf(Promise)
  })
})

describe('patchData', () => {
  let params = { AMaaSClass: 'positions'}
  it('should return a promise if callback is not provided', () => {
    let promise = patchData(params).catch(error => {})
    expect(promise).toBeInstanceOf(Promise)
  })
})
