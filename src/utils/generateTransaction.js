import { Transaction } from '../transactions'
import Code from '../transactions/Code/Code.js'
import Charge from '../transactions/Charge/Charge.js'
import Reference from '../core'
const Decimal = require('decimal.js')

const CHARGE_TYPES = ['TAX', 'COMMISSION']
const CODE_TYPES = ['Settle Code', 'Client Classifier']
const REFERENCE_TYPES = ['External']

const randInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

const addDays = (date, days) => {
  let result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

// export const generateCommon = (data) => {
export function generateCommon(data) {
  let common;

  if (!data.price || data.price === 0) {
    data.price = new Decimal(0)
  } else {
    data.price = new Decimal(data.price)
  }

  if (!data.quantity || data.quantity === 0) {
    data.quantity = new Decimal(0)
  } else {
    data.quantity = new Decimal(data.quantity)
  }

  const defaults = {
    assetManagerId: randInt(1, 1000),
    assetBookId: randInt(1, 1000),
    counterpartyBookId: randInt(1, 1000),
    assetId: randInt(1, 1000).toString(),
    transactionDate: new Date(),
    transactionCurrency: 'SGD',
    settlementCurrency: 'SGD',
  }

  common = Object.assign({}, defaults, data)
  Object.assign(common, { settlementDate: addDays(common.transactionDate, 2)})

  if (common.quantity.toFixed(5) >= 0) {
    Object.assign(common, { transactionAction: 'Buy' })
  } else {
    Object.assign(common, { transactionAction: 'Short Sell' })
  }

  return common
}

export function generateTransaction(data) {
  const commonForTrans = {
    assetManagerId: data.assetManagerId,
    assetBookId: data.assetBookId,
    counterpartyBookId: data.counterpartyBookId,
    assetId: data.assetId,
    quantity: data.quantity,
    price: data.price,
    transactionDate: data.transactionDate,
    transactionId: data.transactionId,
    netAffecting: data.netAffecting === false ? false : true
  }
  const common = generateCommon(commonForTrans)
  Object.assign(common, data)
  const transaction = new Transaction(common, null, {})
  let charges = {}
  let codes = {}
  let references = {}
  CHARGE_TYPES.forEach(type => {
    charges[type] = { chargeValue: new Decimal(randInt(1, 1000)), currency: 'SGD', netAffecting: common.netAffecting }
  })
  CODE_TYPES.forEach(type => {
    codes[type] = new Code({ codeValue: 'randomCode' }, null, {})
  })
  REFERENCE_TYPES.forEach(type => {
    references[type] = new Reference({ referenceValue: 'randomRef' }, null, {})
  })
  Object.assign(transaction.charges, charges)
  Object.assign(transaction.codes, codes)
  Object.assign(transaction.references, references)
  return transaction
}
