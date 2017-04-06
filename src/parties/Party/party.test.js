import Party from './party.js'
import { Address, Email } from '../Children'

describe('Party', () => {
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new Party({ partyId: 'test' })
      console.log(JSON.parse(JSON.stringify(test)))
      expect(JSON.parse(JSON.stringify(test)).partyId).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).partyId).toEqual('test')
    })
  })
  describe('constructor', () => {
    it('should set addresses to empty object if class is instantiated without contacts', () => {
      const testParty = new Party({})
      expect(testParty.addresses).toEqual({})
    })

  })
  describe('addresses', () => {
    it('should throw if called with an object that has a non-Address as a value', () => {
      const testParty = new Party({})
      function tester() {
        testParty.addresses = { address: 'notAnAddress' }
      }
      expect(tester).toThrowError('Found address with wrong class')
    })
    it('should set addressPrimary of existing addresses to false when supplying new primary address', () => {
      const primaryOne = new Address({ addressPrimary: true })
      const primaryTwo = new Address({ addressPrimary: true })
      const primaryThree = new Address({ addressPrimary: true })
      const testParty = new Party({ addresses: { add1: primaryOne, add2: primaryTwo } })
      testParty.upsertAddress('add3', primaryThree)
      expect(testParty.addresses.add1.addressPrimary).toBeFalsy()
      expect(testParty.addresses.add2.addressPrimary).toBeFalsy()
    })
    it('should throw if attempting to add primary address without primary address', () => {
      // const primaryOne = new Address({ addressPrimary: true })
      const primaryTwo = new Address({ addressPrimary: false })
      const testParty = new Party({})
      function tester() {
        testParty.upsertAddress('new', primaryTwo)
      }
      expect(tester).toThrowError('At least 1 primary address must be supplied')
    })
    it('should add address and preserve existing ones on upsert', () => {
      const primaryOne = new Address({ addressPrimary: true, lineOne: 'testRoad' })
      const primaryTwo = new Address({ addressPrimary: false, lineOne: 'testStreet' })
      const testParty = new Party({ addresses: { primaryOne } })
      testParty.upsertAddress('primaryTwo', primaryTwo)
      expect(testParty.addresses).toEqual({ primaryOne, primaryTwo })
    })
  })

  describe('emails', () => {
    it('should set emails to empty object if class is instantiated without emails', () => {
      const testParty = new Party({})
      expect(testParty.emails).toEqual({})
    })
    it('should throw if called with an array containing a non-Email class instance', () => {
      const testParty = new Party({})
      function tester() {
        testParty.emails = { email: 'notanEmail' }
      }
      expect(tester).toThrowError('Found email with wrong class')
    })
    it('should throw if Email contains invalid email', () => {
      const testParty = new Party({})
      const testEmails = new Email({ email: 'not an email' })
      function tester() {
        testParty.upsertEmail('test', testEmails)
      }
      expect(tester).toThrowError('Not a valid email')
    })
    it('should set emailPrimary of existing emails to false when supplying new primary email', () => {
      const primaryOne = new Email({ emailPrimary: true, email: 'test@test.com' })
      const primaryTwo = new Email({ emailPrimary: true, email: 'test@test.com' })
      const primaryThree = new Email({ emailPrimary: true, email: 'test@test.com' })
      const testParty = new Party({ emails: { e1: primaryOne, e2: primaryTwo } })
      testParty.upsertEmail('e3', primaryThree)
      expect(testParty.emails.e1.emailPrimary).toBeFalsy()
      expect(testParty.emails.e2.emailPrimary).toBeFalsy()
    })
    it('should throw if attempting to add primary email without primary email', () => {
      const primaryTwo = new Email({ emailPrimary: false, email: 'test@test.com' })
      const testParty = new Party({})
      function tester() {
        testParty.upsertEmail('new', primaryTwo)
      }
      expect(tester).toThrowError('At least 1 primary email must be supplied')
    })
    it('should add email and preserve existing ones on upsert', () => {
      const primaryOne = new Email({ emailPrimary: true, email: 'test@test.com' })
      const primaryTwo = new Email({ emailPrimary: false, email: 'test@test.com' })
      const testParty = new Party({ emails: { primaryOne } })
      testParty.upsertEmail('primaryTwo', primaryTwo)
      expect(testParty.emails).toEqual({ primaryOne, primaryTwo })
    })
  })
})
