import { retrieveData, putData, insertData } from '../network'
import { Relationship } from '../../relationships'

/**
 * Retrieve Relationships for specified Asset Manager
 * @function retrieve
 * @memberof module:api.Relationships
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Relationships
 * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is an array of Relationships or a Relationship instance. Omit to return Promise
 * @returns {Promise|null} If no callback supplied, returns a promise that resolves with an array of Relationships or a Relationship instance
 */
 export function retrieve({ AMId }, callback) {
   const params = {
     AMaaSClass: 'relationships',
     AMId
   }
   let promise = retrieveData(params).then(result => {
     let relationships
     if (!Array.isArray(result)) {
       relationships = _parseRelationship(result)
     } else {
       relationships = result.map(rel => {
         return _parseRelationship(rel)
       })
     }
     if (typeof callback === 'function') {
       callback(null, relationships)
     }
     return relationships
   })
   if (typeof callback !== 'function') {
     return promise
   }
   promise.catch(error => callback(error))
 }

 /**
  * Insert a new Relationship
  * @function insert
  * @memberof module:api.Relationships
  * @static
  * @param {object} params - object of parameters:
  * @param {number} params.AMId - Asset Manager for whom the Relationship will belong
  * @param {Relationship} params.relationship - Relationship instance to insert
  * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the inserted Relationship instance. Omit to return Promise
  * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the inserted Relationship instance
  */
 export function insert({ AMId, relationship }, callback) {
   let data
   if (relationship) {
     data = JSON.parse(JSON.stringify(relationship))
   }
   const params = {
     AMaaSClass: 'relationships',
     AMId,
     data
   }
   let promise = insertData(params).then(result => {
     result = _parseRelationship(result)
     if (typeof callback === 'function') {
       callback(null, result)
     }
     return result
   })
   if (typeof callback !== 'function') {
     return promise
   }
   promise.catch(error => callback(error))
 }

 /**
  * Amend an existing Relationship
  * @function amend
  * @memberof module:api.Relationships
  * @static
  * @param {object} params - object of parameters:
  * @param {number} params.AMId - Asset Manager ID who owns the Relationship to amend
  * @param {Relationship} params.relationship - Amended Relationship instance
  * @param {function} [callback] - Called with two arguments (error, result) on completion. `result` is the amended Relationship instance. Omit to return Promise
  * @returns {Promise|null} If no callback supplied, returns a Promise that resolves with the amended Relationship instance
  */
 export function amend({ AMId, relationship }, callback) {
   let data
   if (relationship) {
     data = JSON.parse(JSON.stringify(relationship))
   }
   const params = {
     AMaaSClass: 'relationships',
     AMId,
     data
   }
   let promise = putData(params).then(result => {
     result = _parseRelationship(result)
     if (typeof callback === 'function') {
       callback(null, result)
     }
     return result
   })
   if (typeof callback !== 'function') {
     return promise
   }
   promise.catch(error => callback(error))
 }

 function _parseRelationship(rel) {
   return new Relationship(rel)
 }
