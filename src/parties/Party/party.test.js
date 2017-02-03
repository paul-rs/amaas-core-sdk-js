import Party from './party.js'
import { Address, Email } from '../Children'

import nock from 'nock'

// const network = require('../../utils/network/index.js')
// let retrieveData = network.retrieveData
// import { retrieveData } from '../../utils/network'

describe('Party', () => {
  describe('constructor', () => {
    it('should set addresses to empty array if class is instantiated without contacts', () => {
      const testParty = new Party({}, null, {})
      expect(testParty.addresses).toBeInstanceOf(Array)
      expect(testParty.addresses.length).toEqual(0)
    })

  })
  describe('validatePrimary', () => {
    it('should throw if not called with an array', () => {
      const testParty = new Party({}, null, {})
      function tester() {
        testParty.addresses = 'notAnArray'
      }
      expect(tester).toThrowError('Method only accepts an Array')
    })
    it('should throw if called with an array that has a non-Address as a member', () => {
      const testParty = new Party({}, null, {})
      function tester() {
        testParty.addresses = ['notAnAddress']
      }
      expect(tester).toThrowError('Found address with wrong class')
    })
    it('should throw if attempting to add multiple primary addresses', () => {
      const primaryOne = new Address({ addressPrimary: true }, null, {})
      const primaryTwo = new Address({ addressPrimary: true }, null, {})
      const testParty = new Party({}, null, {})
      function tester() {
        testParty.addresses = [primaryOne, primaryTwo]
      }
      expect(tester).toThrowError('Exactly 1 primary address is allowed')
    })
    it('should throw if attempting to add primary address to existing primary address', () => {
      const primaryOne = new Address({ addressPrimary: true }, null, {})
      const primaryTwo = new Address({ addressPrimary: true }, null, {})
      const testParty = new Party({}, null, {})
      testParty.addresses = [primaryOne]
      function tester() {
        testParty.addresses = [primaryTwo]
      }
      expect(tester).toThrowError('Primary Address is already set for this Party')
    })
    it('should add address and preserve existing ones if validation passes', () => {
      const primaryOne = new Address({ addressPrimary: true, lineOne: 'testRoad' }, null, {})
      const primaryTwo = new Address({ addressPrimary: false, lineOne: 'testStreet' }, null, {})
      const testParty = new Party({}, null, {})
      testParty.addresses = [primaryOne]
      testParty.addresses = [primaryTwo]
      expect(testParty.addresses).toEqual([primaryOne, primaryTwo])
    })
  })

  describe('addEmails', () => {
    it('should throw if called with an array containing a non-Email class instance', () => {
      const testParty = new Party({}, null, {})
      function tester() {
        testParty.emails = ['notanEmail']
      }
      expect(tester).toThrowError('Found email with wrong class')
    })
    it('should throw if Email contains invalid email', () => {
      const testParty = new Party({}, null, {})
      const testEmails = new Email({ email: 'not an email' }, null, {})
      function tester() {
        testParty.emails = [testEmails]
      }
      expect(tester).toThrowError('Not a valid email')
    })
    it('should not overwrite existing emails if attempting to set an empty array', () => {
      const testEmail = new Email({ emailPrimary: true, email: 'test@test.com' }, null, {})
      const testParty = new Party({ emails: [testEmail] }, null, {})
      testParty.emails = []
      expect(testParty.emails.length).toEqual(1)
    })
  })

  describe.only('retrieveBook', () => {
    it('should callback with error if HTTP does not return 200', () => {
      const scope = nock(process.env.partiesURL)
        .get('/AMId/partyId')
        // .reply(200, 'Book XZ23D4XWH5')
        .reply(400)
      Party.retrieveParty('AMId', 'partyId', (error, result) => {
        expect(error).toBeDefined()
        expect(error.statusCode).toEqual(400)
        expect(result).toBeUndefined()
      })
    })
    it('should callback with result of HTTP request if it returns 200', () => {
      const scope = nock(process.env.partiesURL)
        .get('/AMId/partyId')
        .reply(200, 'Test return party')
      Party.retrieveParty('AMId', 'partyId', (error, result) => {
        expect(error).toBeNull()
        expect(result).toEqual('Test return party')
      })
    })
  })
})
