import * as Positions from './positions/index'

let config = {}

let configure = (newConfig = {}) => {
  Object.assign(config, newConfig)
}

let getConfig = () => {
  return config
}

export {configure, getConfig, Positions}
