import Party from './party.js'
import { Address, Email } from '../Children'

import nock from 'nock'

// const network = require('../../utils/network/index.js')
// let retrieveData = network.retrieveData
// import { retrieveData } from '../../utils/network'

describe('Party', () => {
  describe('constructor', () => {
    it('should set addresses to empty object if class is instantiated without contacts', () => {
      const testParty = new Party({})
      expect(testParty.addresses).toEqual({})
    })

  })
  describe('validatePrimary', () => {
    it('should throw if called with an object that has a non-Address as a value', () => {
      const testParty = new Party({}, null, {})
      function tester() {
        testParty.addresses = { address: 'notAnAddress' }
      }
      expect(tester).toThrowError('Found address with wrong class')
    })
    it('should throw if attempting to add multiple primary addresses', () => {
      const primaryOne = new Address({ addressPrimary: true }, null, {})
      const primaryTwo = new Address({ addressPrimary: true }, null, {})
      const params = { primaryOne, primaryTwo }
      const testParty = new Party({}, null, {})
      function tester() {
        testParty.addresses = params
      }
      expect(tester).toThrowError('Exactly 1 primary address is allowed')
    })
    it('should throw if attempting to add primary address to existing primary address', () => {
      const primaryOne = new Address({ addressPrimary: true }, null, {})
      const primaryTwo = new Address({ addressPrimary: true }, null, {})
      const testParty = new Party({ addresses: { primaryOne } }, null, {})
      // testParty.addresses = { primaryOne }
      function tester() {
        testParty.addresses = { primaryTwo }
      }
      expect(tester).toThrowError('Primary Address is already set for this Party')
    })
    it('should add address and preserve existing ones if validation passes', () => {
      const primaryOne = new Address({ addressPrimary: true, lineOne: 'testRoad' }, null, {})
      const primaryTwo = new Address({ addressPrimary: false, lineOne: 'testStreet' }, null, {})
      const testParty = new Party({}, null, {})
      testParty.addresses = { primaryOne }
      testParty.addresses = { primaryTwo }
      expect(testParty.addresses).toEqual({ primaryOne, primaryTwo })
    })
  })

  describe('addEmails', () => {
    it('should throw if called with an array containing a non-Email class instance', () => {
      const testParty = new Party({}, null, {})
      function tester() {
        testParty.emails = { email: 'notanEmail' }
      }
      expect(tester).toThrowError('Found email with wrong class')
    })
    it('should throw if Email contains invalid email', () => {
      const testParty = new Party({}, null, {})
      const testEmails = new Email({ email: 'not an email' }, null, {})
      function tester() {
        testParty.emails = { testEmails }
      }
      expect(tester).toThrowError('Not a valid email')
    })
    it('should not overwrite existing emails if attempting to set an empty object', () => {
      const testEmail = new Email({ emailPrimary: true, email: 'test@test.com' }, null, {})
      const testParty = new Party({ emails: { testEmail } }, null, {})
      testParty.emails = {}
      expect(Object.keys(testParty.emails).length).toEqual(1)
    })
  })
})
