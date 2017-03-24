import * as api from './index'

describe('api', () => {
  test('configure', () => {
    expect(api.configure).toBeDefined()
    let config = {env: 'production'}
    api.configure(config)
    expect(api.getConfig()).toEqual(config)
  })

  test('getConfig', () => {
    expect(api.getConfig).toBeDefined()
    expect(api.getConfig()).toBeDefined()
  })

  test('Positions', () => {
    expect(api.Positions).toBeDefined()
  })
})
