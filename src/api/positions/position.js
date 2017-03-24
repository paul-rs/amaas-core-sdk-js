import BasePosition from './../../transactions/Positions/position'

export default class Position extends BasePosition {
  amend(params = {}) {
    return Promise.resolve("amended")
  }
}
