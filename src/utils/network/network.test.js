import {
  buildURL,
  retrieveData,
  insertData,
  searchData
} from './'

import ENDPOINTS from '../../config.js'

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
    // const expectedURL = `${process.env.booksURL}/`
    const expectedURL = `${ENDPOINTS.books}/books/`
    expect(buildURL(testParams)).toEqual(expectedURL)
  })
  it('should build correctly if all parameters are specified', () => {
    const testParams = {
      AMaaSClass: 'testClass',
      AMId: 'testAMId',
      resourceId: 'testResource'
    }
    // const expectedURL = `${process.env.booksURL}/testAMId/testResource`
    const expectedURL = `${ENDPOINTS.books}/books/testAMId/testResource`
    expect(buildURL(testParams)).toEqual(expectedURL)
  })
})

describe('retrieveData', () => {
  const testParams = {
    AMaaSClass: 'books',
    AMId: '1234',
    token: 'testToken'
  }
  it('should hit the correct endpoint', callback => {
    // const scope = nock(process.env.baseURL)
    const scope = nock(ENDPOINTS.books)
      .get('/books/1234')
      .reply(200, {
        param1: 'testBody'
      })
    retrieveData(testParams, (error, result) => {
      expect(result).toEqual({ param1: 'testBody' })
      callback()
    })
  })
  it('should receive the correct HTTP status code', callback => {
    // const scope = nock(process.env.baseURL)
    const scope = nock(ENDPOINTS.books)
      .get('/books/1234')
      .reply(501)
    retrieveData(testParams, (error, result) => {
      expect(error.statusCode).toEqual(501)
      callback()
    })
  })
})

describe('insertData', () => {
  const testParams = {
    AMaaSClass: 'books',
    AMId: '1234',
    token: 'testToken',
    data: {
      price: 20
    }
  }
  it.skip('should throw if any arguments are omitted', () => {
    function tester() {
      insertData({})
    }
    expect(tester).toThrowError('Class, AMId and data to insert are required')
  })
  it('should build the correct url and POST to it', callback => {
    // const scope = nock(process.env.baseURL)
    const scope = nock(ENDPOINTS.books)
      .post('/books/1234')
      .reply(200, {
        param1: 'testResponse'
      })
    insertData(testParams, (error, result) => {
      expect(result).toEqual({ param1: 'testResponse' })
      callback()
    })
  })
})

describe('searchData', () => {
  const testParams = {
    AMaaSClass: 'positions',
    queryKey: 'asset_manager_book_id',
    queryValue: [7, 532, 841],
    token: 'testToken'
  }
  const expectedResult = {
    asset_book_id: '1,2,3,abc'
  }
  // searchData(testParams, (error, result) => {
  //   if (error) {
  //     console.log(error)
  //   } else {
  //     console.log(result)
  //   }
  // })
  // searchData(testParams, (error, result) => {
  //   expect(result).toEqual(expectedResult)
  // })
})
