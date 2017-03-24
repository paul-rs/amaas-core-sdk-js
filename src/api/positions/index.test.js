import Positions from './index'
import Position from './../../transactions/Positions/position'

describe('api.Positions', () => {
  test('retrieve', callback => {
    expect(Positions.retrieve).toBeDefined()
    let retrievePromise = Positions.retrieve()
    expect(retrievePromise).toBeInstanceOf(Promise)
    retrievePromise.then(position => {
      expect(position).toBeInstanceOf(Position)
      let amendPromise = position.amend()
      expect(amendPromise).toBeInstanceOf(Promise)
      amendPromise.then(result => {
        expect(result).toBe("amended")
        callback()
      })
    })
  })
})
