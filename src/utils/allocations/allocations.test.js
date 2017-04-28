import { retrieve, send } from './allocations'

describe('allocations', () => {
  describe('retrieve', () => {
    test('with promise', () => {
      let promise = retrieve({})
      expect(promise).toBeInstanceOf(Promise)
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
