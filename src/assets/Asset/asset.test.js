import Asset from './asset.js'
import Comment from '../../children/Comment'
import Link from '../../children/Link'
import { Reference } from '../../children'

describe('Asset', () => {
  describe('constructor', () => {

    it('should default issueDate correctly', () => {
      const testAsset = new Asset({})
      const issueDate = testAsset.issueDate
      expect(issueDate).toEqual('0001-01-01')
    })

    it('should set maturityDate correctly', () => {
      const testAsset = new Asset({})
      const maturityDate = testAsset.maturityDate
      expect(maturityDate).toEqual('9999-12-31')
    })

    it('should set comments to empty object if no Comments', () => {
      const testAsset = new Asset({})
      expect(testAsset.comments).toEqual({})
    })

    it('should set comments as an object of <string, Comment> type', () => {
      const comments = {
        'Office': {
          commentValue: 'comment 1',
          active: true
        },
        'Legal': {
          commentValue: 'comment 2',
          active: false
        }
      }
      const testAsset = new Asset({ comments })
      expect(testAsset.comments.Office).toBeInstanceOf(Comment)
    })

    it('should set links to empty object if no Links', () => {
      const testAsset = new Asset({})
      expect(testAsset.links).toEqual({})
    })

    it('should set links as an object of <string, Link> type', () => {
      const links = {
        'Single': [{
          linkedId: 'testId',
          active: true
        }],
        'Multiple': [{
          linkedId: 'testId2',
          active: true
        }, {
          linkedId: 'testId3',
          active: false
        }]
      }
      const testAsset = new Asset({ links })
      expect(testAsset.links.Single[0]).toBeInstanceOf(Link)
    })

    it('should set references to the AMaaS reference even if no References are supplied', () => {
      const testAsset = new Asset({ assetId: 'testId' })
      const expectedRef = new Reference({ referenceValue: 'testId' })
      expect(testAsset.references.AMaaS).toBeDefined()
      expect(testAsset.references.AMaaS.referenceValue).toEqual('testId')
    })

    it('should set references correctly (inclduing the AMaaS reference)', () => {
      const references = {
        'Office': {
          referenceValue: 'testRef1'
        },
        'Legal': {
          referenceValue: 'testRef2'
        }
      }
      const testAsset = new Asset({ assetId: 'assetId', references })
      const testRef = new Reference({ referenceValue: 't' })
      expect(testAsset.references.AMaaS).toBeDefined()
      expect(testAsset.references.AMaaS.referenceValue).toEqual('assetId')
      expect(testAsset.references.Office).toBeInstanceOf(Reference)
      expect(testAsset.references.Office.referenceValue).toEqual('testRef1')
    })

    it('should stringify correctly', () => {
      const testAsset = new Asset({ assetId: 'testId', issueDate: '2017-04-17' })
      expect(JSON.parse(JSON.stringify(testAsset)).assetId).toEqual('testId')
    })
  })
})
