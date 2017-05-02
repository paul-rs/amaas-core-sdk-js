import { retrieve, send } from './allocations'
import * as api from '../../exports/api'

api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})

describe('allocations', () => {
  describe('retrieve', () => {
    test('with promise', done => {
      let promise = retrieve({})
      expect(promise).toBeInstanceOf(Promise)
      done()
    })
    test('with callback', done => {
      retrieve({}, (err, res) => {
        if (err) {
          done()
        }
      })
    })
  })
})
