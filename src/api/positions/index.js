import Position from './position'

export default class Positions {
  static retrieve(params = {}) {
    let position = new Position({quantity: 5.66753})
    return Promise.resolve(position)
  }
}
