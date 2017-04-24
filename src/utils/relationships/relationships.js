import { retrieveData, putData, insertData } from '../network'
import { Relationship } from '../../relationships'

/**
 * @namespace api
 * @memberof module:Relationships
 */

/**
 * Retrieve Relationships for specified Asset Manager
 * @function retrieve
 * @memberof module:Relationships.api
 * @static
 * @param {object} params - object of parameters:
 * @param {number} params.AMId - Asset Manager ID of the Relationships
 * @param {string} params.token - Authorization token
 * @param {function} callback - Called with two arguments (error, result) on completion
 * @returns {Promise} Returns a promise that resolves with Relationship instance or Array of Relationships if callback is not supplied
 */
 export function retrieve({ AMId, token }, callback) {
   const params = {
     AMaaSClass: 'relationships',
     AMId,
     token
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
  * @memberof module:Relationships.api
  * @static
  * @param {object} params - object of parameters:
  * @param {Relationship} params.relationship - Relationship instance to insert
  * @param {string} params.token - Authorization token
  * @param {function} callback - Called with two arguments (error, result) on completion
  * @returns {Promise} Returns ???
  */
 export function insert({ relationship, token }, callback) {
   let data
   if (relationship) {
     data = JSON.parse(JSON.stringify(relationship))
   }
   const params = {
     AMaaSClass: 'relationships',
     data,
     token
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
  * @memberof module:Relationships.api
  * @static
  * @param {object} params - object of parameters:
  * @param {Relationship} params.relationship - Amended Relationship instance
  * @param {number} params.AMId - Asset Manager ID who owns the Relationship to amend
  * @param {string} params.token - Authorization token
  * @param {function} callback - Called with two arguments (error, result) on completion
  * @returns {Promise} Returns ???
  */
 export function amend({ relationship, AMId, token }, callback) {
   let data
   if (relationship) {
     data = JSON.parse(JSON.stringify(relationship))
   }
   const params = {
     AMaaSClass: 'relationships',
     AMId,
     data,
     token
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
