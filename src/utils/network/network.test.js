import {
  buildURL,
  retrieveData,
  insertData
} from './'

// import { baseURL } from './constants.js'

import nock from 'nock'

describe('buildURL function', () => {
  it('should throw if no class supplied', () => {
    function tester() {
      buildURL({})
    }
    expect(tester).toThrowError('Class is required to build URL')
  })
  it('should not build past class if resourceId is supplied but not AMId', () => {
    const testParams = {
      AMaaSClass: 'testClass',
      AMId: undefined,
      resourceId: 'testResource'
    }
    const expectedURL = `${process.env.baseURL}/testClass`
    expect(buildURL(testParams)).toEqual(expectedURL)
  })
  it('should build correctly if all parameters are specified', () => {
    const testParams = {
      AMaaSClass: 'testClass',
      AMId: 'testAMId',
      resourceId: 'testResource'
    }
    const expectedURL = `${process.env.baseURL}/testClass/testAMId/testResource`
    expect(buildURL(testParams)).toEqual(expectedURL)
  })
})

describe('retrieveData', () => {
  const testParams = {
    AMaaSClass: 'books',
    AMId: '1234'
  }
  it('should hit the correct endpoint', () => {
    nock(process.env.baseURL)
      .get('/books/1234')
      .reply(200, {
        param1: 'testBody'
      })
    retrieveData(testParams, (error, result) => {
      expect(JSON.parse(result)).toEqual({ param1: 'testBody' })
    })
  })
  it('should receive the correct HTTP status code', () => {
    nock(process.env.baseURL)
      .get('/books/1234')
      .reply(501)
    retrieveData(testParams, (error, result) => {
      expect(error.statusCode).toEqual(501)
    })
  })
})

describe('insertData', () => {
  const testParams = {
    AMaaSClass: 'books',
    AMId: '1234',
    data: {
      price: 20
    }
  }
  it('should throw if any arguments are omitted', () => {
    function tester() {
      insertData({})
    }
    expect(tester).toThrowError('Class, AMId and data to insert are required')
  })
  it('should build the correct url and POST to it', () => {
    nock(process.env.baseURL)
      .post('/books/1234')
      .reply(200, {
        param1: 'testResponse'
      })
    insertData(testParams, (error, result) => {
      expect(result).toEqual({ param1: 'testResponse' })
    })
  })
})
