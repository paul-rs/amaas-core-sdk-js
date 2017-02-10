import { retrieve, insert, amend, partialAmend, deactivate } from './assets.js'
import Asset from '../../assets/Asset/asset.js'

describe('assets util functions', () => {
  describe('retrieve', () => {
    it('should', () => {
      // retrieve('1', '4bd2cfd84d154eef9b70f24262609a4b', (error, result) => {
      //   if (!error) {
      //     console.log(result)
      //   }
      // })
      const asset = new Asset({
        assetManagerId: '1',
        fungible: true,
        assetId:'test_asset',
        description: 'testThomasAssetAmended'
      })
      // amend(asset, '1', 'test_asset', (error, result) => {
      //   if (error) {
      //     console.log(error)
      //   } else {
      //     console.log(result)
      //   }
      // })
    })
  })
})
