import Positions from './positions'

let config = {}

let configure = (newConfig = {}) => {
  Object.assign(config, newConfig)
}

let getConfig = () => {
  return config
}

export {configure, getConfig, Positions}
