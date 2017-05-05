# AMaaS Core SDK for JavaScript

This is the Asset Management as a Service ([AMaaS](https://amaas.com/)) Software Development Kit (SDK) for JavaScript.
This module can be used in Node.js (version >= 4.0) and in browsers.

## What is AMaaS?

AMaaS is a modular platform for Asset Managers with an open, RESTful API for programmatic access to its functionality.

AMaaS Core features a secure, encrypted database, which serves as the foundation for asset management platforms and FinTech solutions. AMaaS also provides portfolio visualizations and analytics through AMaaS Web, and exception management & financial event notification through AMaaS Monitor.

## Tests

Install dependencies:
```
$ npm install
```

Running tests that do not require API access
```
$ npm test -- 'src\/(?!utils)'
```

Running full tests (requires API_TOKEN)
```
$ API_TOKEN=xxxxx npm test
```

# Docs


## Numbers in the AMaaS Core SDK for JavaScript
Numbers are handled by the [decimal.js](https://github.com/MikeMcl/decimal.js/) package. All numbers in the classes are stored as Decimal instances. For a full list of functions available on these numbers please refer to the decmial.js documentation.

### Common functions
Note that the decimal.js functions return Decimal instances and are immutable (you will need to assign results of arithmetic operations to new variables).

```javascript
let x = new Decimal(5)
let y = new Decimal(10)

const a = x.plus(y) // a = 15
const b = x.times(y) // b = 50
const c = y.minus(x) // c = 5
const d = y.dividedBy(x) // d = 2
```
Returning a Decimal to a string
```javascript
let x = new Decimal(3.14)

const a = x.toFixed(5) // a = '3.14000'
const b = x.toPrecision(5) // b = '3.1400'
```

## Modules

<dl>
<dt><a href="#module_core">core</a></dt>
<dd><p>Core classes for the AMaaS Core SDK for JavaScript.
These classes cannot be instantiated from the SDK, they are included for reference</p>
</dd>
<dt><a href="#module_api">api</a></dt>
<dd><p>API Methods</p>
</dd>
<dt><a href="#module_assetManagers">assetManagers</a></dt>
<dd><p>Classes for the AssetManagers service</p>
</dd>
<dt><a href="#module_assets">assets</a></dt>
<dd><p>Classes for the Assets service</p>
</dd>
<dt><a href="#module_books">books</a></dt>
<dd><p>Classes for the Books Service</p>
</dd>
<dt><a href="#module_corporateActions">corporateActions</a></dt>
<dd><p>Classes for the CorporateActions Service</p>
</dd>
<dt><a href="#module_parties">parties</a></dt>
<dd><p>Classes for the Parties service</p>
</dd>
<dt><a href="#module_relationships">relationships</a></dt>
<dd><p>Classes and API methods for the Relationships service (not ready yet)</p>
</dd>
<dt><a href="#module_transactions">transactions</a></dt>
<dd><p>Classes for the Transactions service. (Not ready yet)</p>
</dd>
</dl>

<a name="module_core"></a>

## core
Core classes for the AMaaS Core SDK for JavaScript.
These classes cannot be instantiated from the SDK, they are included for reference


* [core](#module_core)
    * [.Reference](#module_core.Reference) ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
        * [new Reference(params)](#new_module_core.Reference_new)
    * [.AMaaSModel](#module_core.AMaaSModel)
        * [new AMaaSModel(params)](#new_module_core.AMaaSModel_new)

<a name="module_core.Reference"></a>

### core.Reference ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
Class representing a Reference

**Kind**: static class of <code>[core](#module_core)</code>  
**Extends:** <code>[AMaaSModel](#module_core.AMaaSModel)</code>  
<a name="new_module_core.Reference_new"></a>

#### new Reference(params)
Construct a new Reference instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Reference creation options |
| params.referenceValue | <code>string</code> | The identifier of this Reference (e.g. transactionId) |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Reference was created |
| params.updatedTime | <code>date</code> | Time that the Reference was updated |
| params.version | <code>number</code> | Version number of the Reference |

<a name="module_core.AMaaSModel"></a>

### core.AMaaSModel
Class representing a AMaaSModel.
This is the Base Class for almost every other class

**Kind**: static class of <code>[core](#module_core)</code>  
<a name="new_module_core.AMaaSModel_new"></a>

#### new AMaaSModel(params)
Construct new AMaaSModel object


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | AMaaSModel creation options: |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the AMaaSModel was created |
| params.updatedTime | <code>date</code> | Time that the AMaaSModel was updated |
| params.version | <code>number</code> | Version number of the AMaaSModel |

<a name="module_api"></a>

## api
API Methods


* [api](#module_api)
    * [.Allocations](#module_api.Allocations) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Allocations.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.send(params, [callback])](#module_api.Allocations.send) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.AssetManagers](#module_api.AssetManagers) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.AssetManagers.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.insert(params, [callback])](#module_api.AssetManagers.insert) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.amend(params, [callback])](#module_api.AssetManagers.amend) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.deactivate(params, [callback])](#module_api.AssetManagers.deactivate) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.reactivate(params, [callback])](#module_api.AssetManagers.reactivate) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.Assets](#module_api.Assets) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Assets.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.insert(params, [callback])](#module_api.Assets.insert) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.amend(params, [callback])](#module_api.Assets.amend) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.partialAmend(params, [callback])](#module_api.Assets.partialAmend) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.search(params, callback)](#module_api.Assets.search) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.deactivate(params, [callback])](#module_api.Assets.deactivate) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.reactivate(params, [callback])](#module_api.Assets.reactivate) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.Books](#module_api.Books) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Books.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.search(params, [callback])](#module_api.Books.search) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.insert(params, [callback])](#module_api.Books.insert) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.amend(params, [callback])](#module_api.Books.amend) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.retire(params, [callback])](#module_api.Books.retire) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.reactivate(params, [callback])](#module_api.Books.reactivate) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.CorporateActions](#module_api.CorporateActions) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.CorporateActions.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.insert(params, [callback])](#module_api.CorporateActions.insert) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.amend(params, [callback])](#module_api.CorporateActions.amend) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.search(params, [callback])](#module_api.CorporateActions.search) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.cancel(params, [callback])](#module_api.CorporateActions.cancel) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.reopen(params, [callback])](#module_api.CorporateActions.reopen) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.Netting](#module_api.Netting) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Netting.retrieve) ⇒ <code>Promise</code> &#124; <code>Array</code>
        * [.send(params, [callback])](#module_api.Netting.send) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.Parties](#module_api.Parties) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Parties.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.insert(params, [callback])](#module_api.Parties.insert) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.amend(params, [callback])](#module_api.Parties.amend) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.partialAmend(params, [callback])](#module_api.Parties.partialAmend) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.search(params, [callback])](#module_api.Parties.search) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.deactivate(params, [callback])](#module_api.Parties.deactivate)
        * [.reactivate(params, [callback])](#module_api.Parties.reactivate)
    * [.Positions](#module_api.Positions) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Positions.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.search(params, [callback])](#module_api.Positions.search) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.Relationships](#module_api.Relationships) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Relationships.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.insert(params, [callback])](#module_api.Relationships.insert) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.amend(params, [callback])](#module_api.Relationships.amend) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.Transactions](#module_api.Transactions) : <code>object</code>
        * [.retrieve(params, [callback])](#module_api.Transactions.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.insert(params, [callback])](#module_api.Transactions.insert) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.amend(params, [callback])](#module_api.Transactions.amend) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.partialAmend(params, [callback])](#module_api.Transactions.partialAmend) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.search(params, [callback])](#module_api.Transactions.search) ⇒ <code>Promise</code> &#124; <code>null</code>
        * [.cancel(params, [callback])](#module_api.Transactions.cancel) ⇒ <code>Promise</code> &#124; <code>null</code>

<a name="module_api.Allocations"></a>

### api.Allocations : <code>object</code>
**Kind**: static namespace of <code>[api](#module_api)</code>  
**Note**: This service is in beta (untested)  

* [.Allocations](#module_api.Allocations) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Allocations.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.send(params, [callback])](#module_api.Allocations.send) ⇒ <code>Promise</code> &#124; <code>null</code>

<a name="module_api.Allocations.retrieve"></a>

#### Allocations.retrieve(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Retrieve Allocations for a specific Transaction

**Kind**: static method of <code>[Allocations](#module_api.Allocations)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with an Array of Link instances or a single Link instance (an Allocation is an instance of the Link class)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of Transaction |
| [params.resourceId] | <code>string</code> | Transaction ID. Omit to return all Allocations for the supplied AMId |
| [callback] | <code>function</code> | Function of form (error, result) called on completion. `result` is an array of Link instances or a single Link instance. Omit to return Promise |

<a name="module_api.Allocations.send"></a>

#### Allocations.send(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Send Allocations for a specific Transaction

**Kind**: static method of <code>[Allocations](#module_api.Allocations)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the inserted Allocations  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of Transaction |
| params.resourceId | <code>string</code> | Transaction ID |
| params.data | <code>object</code> | Allocation data for the Transaction of the form [ { book_id: '123', quantity: '50', transaction_id: 'XYZ' }, { book_id: '456', quantity: '50', transaction_id: 'ABC' } ]. If transaction_id is supplied, it is used as the inserted Allocation's transactionId. Otherwise a random ID is generated |
| [callback] | <code>function</code> | Called with two arugments (error, result) on completion. `result` is the inserted Allocations. Omit to return Promise |

<a name="module_api.AssetManagers"></a>

### api.AssetManagers : <code>object</code>
**Kind**: static namespace of <code>[api](#module_api)</code>  

* [.AssetManagers](#module_api.AssetManagers) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.AssetManagers.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.insert(params, [callback])](#module_api.AssetManagers.insert) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.amend(params, [callback])](#module_api.AssetManagers.amend) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.deactivate(params, [callback])](#module_api.AssetManagers.deactivate) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.reactivate(params, [callback])](#module_api.AssetManagers.reactivate) ⇒ <code>Promise</code> &#124; <code>null</code>

<a name="module_api.AssetManagers.retrieve"></a>

#### AssetManagers.retrieve(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Retrieve Asset Manager data for specified Asset Manager ID

**Kind**: static method of <code>[AssetManagers](#module_api.AssetManagers)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with an AssetManager instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID to retrieve |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an AssetManager instance. Omit to return Promise |

<a name="module_api.AssetManagers.insert"></a>

#### AssetManagers.insert(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Insert a new Asset Manager into the database

**Kind**: static method of <code>[AssetManagers](#module_api.AssetManagers)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the inserted AssetManager instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.assetManager | <code>AssetManager</code> | Asset Manager instance to insert |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the inserted AssetManager instance. Omit to return Promise |

<a name="module_api.AssetManagers.amend"></a>

#### AssetManagers.amend(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Amend an Asset Manager (Replaces current Asset Manager with what is passed in)

**Kind**: static method of <code>[AssetManagers](#module_api.AssetManagers)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended AssetManager instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMID of the Asset Manager to amend |
| params.assetManager | <code>AssetManager</code> | Asset Manager instance to insert |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended AssetManager instance. Omit to return Promise |

<a name="module_api.AssetManagers.deactivate"></a>

#### AssetManagers.deactivate(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Deactivate an Asset Manager

**Kind**: static method of <code>[AssetManagers](#module_api.AssetManagers)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the deactivated AssetManager instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMID of the Asset Manager to deactivate |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the deactivated AssetManager instance. Omit to return Promise |

<a name="module_api.AssetManagers.reactivate"></a>

#### AssetManagers.reactivate(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Reactivate an Asset Manager

**Kind**: static method of <code>[AssetManagers](#module_api.AssetManagers)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the reactivated AssetManager instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMID of the Asset Manager to deactivate |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the reactivated AssetManager instance. Omit to return Promise |

<a name="module_api.Assets"></a>

### api.Assets : <code>object</code>
**Kind**: static namespace of <code>[api](#module_api)</code>  

* [.Assets](#module_api.Assets) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Assets.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.insert(params, [callback])](#module_api.Assets.insert) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.amend(params, [callback])](#module_api.Assets.amend) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.partialAmend(params, [callback])](#module_api.Assets.partialAmend) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.search(params, callback)](#module_api.Assets.search) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.deactivate(params, [callback])](#module_api.Assets.deactivate) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.reactivate(params, [callback])](#module_api.Assets.reactivate) ⇒ <code>Promise</code> &#124; <code>null</code>

<a name="module_api.Assets.retrieve"></a>

#### Assets.retrieve(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Retrieve Asset data for specified AMId and assetId

**Kind**: static method of <code>[Assets](#module_api.Assets)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Assets or a single Asset instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Asset |
| [params.resourceId] | <code>string</code> | Asset ID of the Asset. Omit to return all Assets for the supplied AMId |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Assets or a single Asset instance. Omit to return Promise |

<a name="module_api.Assets.insert"></a>

#### Assets.insert(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Insert a new Asset into the database

**Kind**: static method of <code>[Assets](#module_api.Assets)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the inserted Asset instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Asset Manager to whom the inserted Asset belongs |
| params.asset | <code>Asset</code> | Asset instance to insert |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. ` result` is the inserted Asset instance. Omit to return Promise |

<a name="module_api.Assets.amend"></a>

#### Assets.amend(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Amend an existing Asset. WARNING: This makes a HTTP PUT request and will replace the existing Asset with the one passed in

**Kind**: static method of <code>[Assets](#module_api.Assets)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended Asset instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Asset to amend |
| params.asset | <code>Asset</code> | Amended Asset instance to PUT |
| params.resourceId | <code>string</code> | Asset ID of the Asset to amend |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Asset instance. Omit to return Promise |

<a name="module_api.Assets.partialAmend"></a>

#### Assets.partialAmend(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Partially amend an existing Asset.

**Kind**: static method of <code>[Assets](#module_api.Assets)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended Asset instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Asset to be partially amended |
| params.changes | <code>object</code> | Object of changes to the Asset. |
| params.resourceId | <code>string</code> | Asset ID of the Asset to be partially amended |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Asset instance. Omit to return Promise |

<a name="module_api.Assets.search"></a>

#### Assets.search(params, callback) ⇒ <code>Promise</code> &#124; <code>null</code>
Search for Assets

**Kind**: static method of <code>[Assets](#module_api.Assets)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Assets or a single Asset instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| [params.AMId] | <code>number</code> | Asset Manager ID of the Assets to search over. If omitted, you must send assetManagerIds in the search query with at least one value |
| params.query | <code>array</code> | Search parameters of the form [{ key: `string`, values: `array` }]<br /> Available keys are: <li>assetManagerIds (Required if AMId param is omitted)</li> <li>clientIds</li> <li>assetStatuses</li> <li>assetIds</li> <li>referenceTypes</li> <li>referenceValues</li> <li>assetIssuerIds</li> <li>assetClasses</li> <li>assetTypes</li> e.g. `[ { key: 'assetManagerIds', values: [1] }, { key: 'assetClasses', values: ['ForeignExchange', 'Equity'] } ]` |
| callback | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Assets or a single Asset instance |

<a name="module_api.Assets.deactivate"></a>

#### Assets.deactivate(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Delete an exising Asset. This will set the Asset status to 'Inactive'.

**Kind**: static method of <code>[Assets](#module_api.Assets)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the deactivated Asset instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Asset to be deleted |
| params.resourceId | <code>string</code> | Asset ID of the Asset to be deleted |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the deactivated Asset instance. Omit to return Promise |

<a name="module_api.Assets.reactivate"></a>

#### Assets.reactivate(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Reactivate a deactivated Asset. This will set the Asset status to 'Active'.

**Kind**: static method of <code>[Assets](#module_api.Assets)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the reactivated Asset instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Asset to be deleted |
| params.resourceId | <code>string</code> | Asset ID of the Asset to be deleted |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the reactivated Asset instance. Omit to return Promise |

<a name="module_api.Books"></a>

### api.Books : <code>object</code>
**Kind**: static namespace of <code>[api](#module_api)</code>  

* [.Books](#module_api.Books) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Books.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.search(params, [callback])](#module_api.Books.search) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.insert(params, [callback])](#module_api.Books.insert) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.amend(params, [callback])](#module_api.Books.amend) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.retire(params, [callback])](#module_api.Books.retire) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.reactivate(params, [callback])](#module_api.Books.reactivate) ⇒ <code>Promise</code> &#124; <code>null</code>

<a name="module_api.Books.retrieve"></a>

#### Books.retrieve(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Retrieve Book data for specified AMId and bookId

**Kind**: static method of <code>[Books](#module_api.Books)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Books or a single Book instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Asset |
| [params.resourceId] | <code>string</code> | ID of the Book. Omit to return all Books for the supplied AMId |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Books or a single Book instance. Omit to return Promise |

<a name="module_api.Books.search"></a>

#### Books.search(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Search Books for specified AMId and bookId

**Kind**: static method of <code>[Books](#module_api.Books)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Books or a single Book instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| [params.AMId] | <code>number</code> | Asset Manager ID of the user calling the API. If omitted, you must pass assetManagerIds in the query |
| params.query | <code>array</code> | Array of query parameters of the form: [{ key: `string`, values: `array` }]<br /> Available keys are: <li>assetManagerIds (Required if AMId param is omitted)</li> <li>clientIds</li> <li>bookStatuses</li> <li>bookIds</li> <li>ownerIds</li> e.g. `[ { key: 'assetManagerIds', values: [1] }, { key: 'bookIds', values: [1, 2, 3]} ]` |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Books or a single Book instance. Omit to return Promise |

<a name="module_api.Books.insert"></a>

#### Books.insert(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Insert a new Book into the database

**Kind**: static method of <code>[Books](#module_api.Books)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the inserted Book instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the AM insering the Book |
| params.book | <code>Asset</code> | Book instance to insert |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the inserted Book instance. Omit to return Promise |

<a name="module_api.Books.amend"></a>

#### Books.amend(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Amend an existing Book. WARNING: This makes a HTTP PUT request and will replace the existing Book with the one passed in

**Kind**: static method of <code>[Books](#module_api.Books)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended Book instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Book to amend |
| params.book | <code>Asset</code> | Amended Book instance to PUT |
| params.resourceId | <code>string</code> | Book ID of the Book to amend |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Book instance. Omit to return Promise |

<a name="module_api.Books.retire"></a>

#### Books.retire(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Retire a Book. This will set the Book status to 'Retired'.

**Kind**: static method of <code>[Books](#module_api.Books)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the retired Book instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Books to be retired |
| params.resourceId | <code>string</code> | Book ID of the Book to be retired |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the retired Book instance. Omit to return Promise |

<a name="module_api.Books.reactivate"></a>

#### Books.reactivate(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Reactivate a Book. This will set the Book status to 'Active'.

**Kind**: static method of <code>[Books](#module_api.Books)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the reactivated Book instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Books to be reactivated |
| params.resourceId | <code>string</code> | Book ID of the Book to be reactivated |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the reactivated Book instance. Omit to return Promise |

<a name="module_api.CorporateActions"></a>

### api.CorporateActions : <code>object</code>
**Kind**: static namespace of <code>[api](#module_api)</code>  

* [.CorporateActions](#module_api.CorporateActions) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.CorporateActions.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.insert(params, [callback])](#module_api.CorporateActions.insert) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.amend(params, [callback])](#module_api.CorporateActions.amend) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.search(params, [callback])](#module_api.CorporateActions.search) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.cancel(params, [callback])](#module_api.CorporateActions.cancel) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.reopen(params, [callback])](#module_api.CorporateActions.reopen) ⇒ <code>Promise</code> &#124; <code>null</code>

<a name="module_api.CorporateActions.retrieve"></a>

#### CorporateActions.retrieve(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Retrieve a Corporate Action

**Kind**: static method of <code>[CorporateActions](#module_api.CorporateActions)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Corporate Actions or a single CorporateAction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Asset Manager that owns the Corporate Action |
| [params.resourceId] | <code>string</code> | ID of the Corporate Action to retrieve. Omit to return all Corporate Actions for supplied AMId |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Corporate Actions or a single CorporateAction instance. Omit to return Promise |

<a name="module_api.CorporateActions.insert"></a>

#### CorporateActions.insert(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Insert a Corporate Action

**Kind**: static method of <code>[CorporateActions](#module_api.CorporateActions)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the inserted CorporateAction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Asset Manager that owns the Corporate Action |
| params.corporateAction | <code>string</code> | CorporateAction instance to insert |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the inserted CorporateAction instance. Omit to return Promise |

<a name="module_api.CorporateActions.amend"></a>

#### CorporateActions.amend(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Insert a Corporate Action

**Kind**: static method of <code>[CorporateActions](#module_api.CorporateActions)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended CorporateAction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Asset Manager that owns the Corporate Action |
| params.resourceId | <code>string</code> | ID of the Corporate Action to amend |
| params.corporateAction | <code>string</code> | Amended CorporateAction instance |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended CorporateAction instance. Omit to return Promise |

<a name="module_api.CorporateActions.search"></a>

#### CorporateActions.search(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Search for Corporate Actions

**Kind**: static method of <code>[CorporateActions](#module_api.CorporateActions)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Corporate Actions or a single CorporateAction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| [params.AMId] | <code>number</code> | AMId of the Asset Manager that owns the Corporate Action. If omitted you must pass assetManagerIds in the query |
| params.query | <code>array</code> | Query parameters to search in the form [{ key: `string`, values: `array` }]<br /> Available keys are: <li>assetManagerIds (Required if AMId param is omitted)</li> <li>clientIds</li> <li>corporateActionIds</li> <li>corporateActionStatuses</li> <li>corporateActionTypes</li> <li>assetIds</li> <li>partyIds</li> <li>recordDateStart</li> <li>recordDateEnd</li> <li>declaredDateStart</li> <li>declaredDateEnd</li> <li>referenceTypes</li> <li>referenceValues</li> e.g. `[ { key: 'assetManagerIds', values: [1] }, { key: 'assetIds', values: ['ASKJ18', 'LKHB98'] } ]` |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Corporate Actions or a single CorporateAction instance. Omit to return Promise |

<a name="module_api.CorporateActions.cancel"></a>

#### CorporateActions.cancel(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Cancel a Corporate Action

**Kind**: static method of <code>[CorporateActions](#module_api.CorporateActions)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the cancelled CorporateAction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Asset Manager that owns the Corporate Action. |
| params.resourceId | <code>array</code> | ID of the Corporate Action to cancel |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the cancelled CorporateAction instance. Omit to return Promise |

<a name="module_api.CorporateActions.reopen"></a>

#### CorporateActions.reopen(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Reopen a cancelled Corporate Action

**Kind**: static method of <code>[CorporateActions](#module_api.CorporateActions)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the reopened CorporateAction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Asset Manager that owns the Corporate Action. |
| params.resourceId | <code>array</code> | ID of the Corporate Action to reopen |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the reopened CorporateAction instance. Omit to return Promise |

<a name="module_api.Netting"></a>

### api.Netting : <code>object</code>
**Kind**: static namespace of <code>[api](#module_api)</code>  
**Note**: This service is in beta (untested)  

* [.Netting](#module_api.Netting) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Netting.retrieve) ⇒ <code>Promise</code> &#124; <code>Array</code>
    * [.send(params, [callback])](#module_api.Netting.send) ⇒ <code>Promise</code> &#124; <code>null</code>

<a name="module_api.Netting.retrieve"></a>

#### Netting.retrieve(params, [callback]) ⇒ <code>Promise</code> &#124; <code>Array</code>
Retrieve Netting for a specific Transaction

**Kind**: static method of <code>[Netting](#module_api.Netting)</code>  
**Returns**: <code>Promise</code> &#124; <code>Array</code> - If callback is supplied, it is called with ???. Otherwise a promise that resolves with ??? is returned  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of Transaction |
| params.resourceId | <code>string</code> | Transaction ID |
| params.token | <code>string</code> | Authorization token |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is ???. Omit to return Promise |

<a name="module_api.Netting.send"></a>

#### Netting.send(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Send Transactions to Net

**Kind**: static method of <code>[Netting](#module_api.Netting)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with ???  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | object of parameters: |
| params.AMId | <code>number</code> |  | Asset Manager ID of the Transactions to be netted |
| params.data | <code>array</code> |  | An Array of Transaction IDs to be netted |
| [params.nettingType] | <code>string</code> | <code>&quot;Net&quot;</code> | Optional netting type |
| [callback] | <code>function</code> |  | Called with two arguments (error, result) on completion. `result` is ??? Omit to return Promise |

<a name="module_api.Parties"></a>

### api.Parties : <code>object</code>
**Kind**: static namespace of <code>[api](#module_api)</code>  

* [.Parties](#module_api.Parties) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Parties.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.insert(params, [callback])](#module_api.Parties.insert) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.amend(params, [callback])](#module_api.Parties.amend) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.partialAmend(params, [callback])](#module_api.Parties.partialAmend) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.search(params, [callback])](#module_api.Parties.search) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.deactivate(params, [callback])](#module_api.Parties.deactivate)
    * [.reactivate(params, [callback])](#module_api.Parties.reactivate)

<a name="module_api.Parties.retrieve"></a>

#### Parties.retrieve(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Retrieve Party data for specified AMId and partyId

**Kind**: static method of <code>[Parties](#module_api.Parties)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - - If no callback supplied, returns a Promise that resolves with an array of Parties or a single Party instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Party |
| [params.partyId] | <code>string</code> | Party ID of the Party. Omitting this will return all Parties associated with the supplied AMId |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Parties or a single Party instance. Omit to return Promise |

<a name="module_api.Parties.insert"></a>

#### Parties.insert(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Insert a new Party into the database

**Kind**: static method of <code>[Parties](#module_api.Parties)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the inserted Party instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID to whom the Party will belong |
| params.party | <code>Party</code> | Party instance to insert |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the inserted Party instance. Omit to return Promise. |

<a name="module_api.Parties.amend"></a>

#### Parties.amend(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Amend an existing Party. WARNING: This makes a HTTP PUT request and will replace the existing Party with the one passed in

**Kind**: static method of <code>[Parties](#module_api.Parties)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended Party instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMId of the Party to amend |
| params.party | <code>Party</code> | Amended Party instance to PUT |
| params.resourceId | <code>string</code> | Party ID of the Party to amend |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Party instance. Omit to return Promise |

<a name="module_api.Parties.partialAmend"></a>

#### Parties.partialAmend(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Partially amend an existing Party.

**Kind**: static method of <code>[Parties](#module_api.Parties)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended Party instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Party to be partially amended |
| params.changes | <code>object</code> | Object of changes to the Party |
| params.resourceId | <code>string</code> | Party ID of the Party to be partially amended |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Party instance. Omit to return Promise |

<a name="module_api.Parties.search"></a>

#### Parties.search(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Search for Parties

**Kind**: static method of <code>[Parties](#module_api.Parties)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Parties or a single Party instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| [params.AMId] | <code>number</code> | Asset Manager of the Parties to search over. If omitted you must pass assetManagerIds in the query |
| params.query | <code>array</code> | Array of query parameters of the form: [{ key: `string`, values: `array` }]<br /> Available keys are: <li>assetManagerIds (required if AMId param is omitted)</li> <li>clientIds</li> <li>partyStatuses</li> <li>partyIds</li> <li>partyClasses</li> <li>partyTypes</li> e.g. `[ { key: 'assetManagerIds', values: [1] }, { key: 'clientIds', values: [1, 2, 3] } ]` |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Parties or a single Party instance. Omit to return promise |

<a name="module_api.Parties.deactivate"></a>

#### Parties.deactivate(params, [callback])
Deactivate an exising Party. This will set the Party status to 'Inactive'

**Kind**: static method of <code>[Parties](#module_api.Parties)</code>  
**Erturns**: <code>PRomise\|null</code> If no callback supplied, returns a Promise that resolves with the deactivated Party instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Party to be deactivated |
| params.resourceId | <code>string</code> | Party ID of the Party to be deactivated |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the deactivated Party instance. Omit to return Promise |

<a name="module_api.Parties.reactivate"></a>

#### Parties.reactivate(params, [callback])
Reactivate a Party. This will set the Party status to 'Active'

**Kind**: static method of <code>[Parties](#module_api.Parties)</code>  
**Erturns**: <code>Promise\|null</code> If no callback supplied, returns a Promise that resolves with the reactivated Party instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Party to be reactivated |
| params.resourceId | <code>string</code> | Party ID of the Party to be reactivated |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the reactivated Party instance. Omit to return Promise |

<a name="module_api.Positions"></a>

### api.Positions : <code>object</code>
**Kind**: static namespace of <code>[api](#module_api)</code>  

* [.Positions](#module_api.Positions) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Positions.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.search(params, [callback])](#module_api.Positions.search) ⇒ <code>Promise</code> &#124; <code>null</code>

<a name="module_api.Positions.retrieve"></a>

#### Positions.retrieve(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Retrieve a Position from the database

**Kind**: static method of <code>[Positions](#module_api.Positions)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback is supplied, returns promise that resolves with an array of Positions  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters |
| params.AMId | <code>number</code> | Asset Manager ID of the the Positions |
| [callback] | <code>function</code> | Called with two arugments (error, result) on completion. `result` is an array of Positions. Omit to return Promise |

<a name="module_api.Positions.search"></a>

#### Positions.search(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Search for Positions in the database

**Kind**: static method of <code>[Positions](#module_api.Positions)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback is supplied, returns promise that resolves with array of Positions  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters |
| params.AMId | <code>number</code> | Asset Manager ID of the Asset Manager owning the Postions |
| params.query | <code>array</code> | array of query objects: { key: `string`, values: `array` }<br /> Available keys are: <li>assetManagerIds (Required if AMId param is omitted)</li> <li>bookIds</li> <li>assetIds</li> <li>clientIds</li> <li>accountIds</li> <li>accountingTypes</li> <li>positionDate</li> e.g. `[ { key: 'assetManagerIds', values: [1] }, { key: 'bookIds', values: [1, 2, 3] } ]` |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. Omit to return Promise |

<a name="module_api.Relationships"></a>

### api.Relationships : <code>object</code>
**Kind**: static namespace of <code>[api](#module_api)</code>  

* [.Relationships](#module_api.Relationships) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Relationships.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.insert(params, [callback])](#module_api.Relationships.insert) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.amend(params, [callback])](#module_api.Relationships.amend) ⇒ <code>Promise</code> &#124; <code>null</code>

<a name="module_api.Relationships.retrieve"></a>

#### Relationships.retrieve(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Retrieve Relationships for specified Asset Manager

**Kind**: static method of <code>[Relationships](#module_api.Relationships)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a promise that resolves with an array of Relationships or a Relationship instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Relationships |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Relationships or a Relationship instance. Omit to return Promise |

<a name="module_api.Relationships.insert"></a>

#### Relationships.insert(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Insert a new Relationship

**Kind**: static method of <code>[Relationships](#module_api.Relationships)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the inserted Relationship instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager for whom the Relationship will belong |
| params.relationship | <code>Relationship</code> | Relationship instance to insert |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the inserted Relationship instance. Omit to return Promise |

<a name="module_api.Relationships.amend"></a>

#### Relationships.amend(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Amend an existing Relationship

**Kind**: static method of <code>[Relationships](#module_api.Relationships)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with the amended Relationship instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID who owns the Relationship to amend |
| params.relationship | <code>Relationship</code> | Amended Relationship instance |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Relationship instance. Omit to return Promise |

<a name="module_api.Transactions"></a>

### api.Transactions : <code>object</code>
**Kind**: static namespace of <code>[api](#module_api)</code>  

* [.Transactions](#module_api.Transactions) : <code>object</code>
    * [.retrieve(params, [callback])](#module_api.Transactions.retrieve) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.insert(params, [callback])](#module_api.Transactions.insert) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.amend(params, [callback])](#module_api.Transactions.amend) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.partialAmend(params, [callback])](#module_api.Transactions.partialAmend) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.search(params, [callback])](#module_api.Transactions.search) ⇒ <code>Promise</code> &#124; <code>null</code>
    * [.cancel(params, [callback])](#module_api.Transactions.cancel) ⇒ <code>Promise</code> &#124; <code>null</code>

<a name="module_api.Transactions.retrieve"></a>

#### Transactions.retrieve(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Retrieve a Transaction from the database

**Kind**: static method of <code>[Transactions](#module_api.Transactions)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns Promise that resolves with an Array of Transactions or a single Transaction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Transaction's owner |
| [params.resourceId] | <code>string</code> | Transaction ID. Omit to return all Transactions for the supplied AMId |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an Array of Transactions or a single Transaction instance. Omit to return Promise |

<a name="module_api.Transactions.insert"></a>

#### Transactions.insert(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Insert a new Transaction into the database

**Kind**: static method of <code>[Transactions](#module_api.Transactions)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns Promise that resolves with the inserted Transaction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.transaction | <code>Transaction</code> | Transaction instance or object to insert |
| params.AMId | <code>number</code> | Asset Manager ID of the Transaction's owner |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the inserted Transaction instance. Omit to return Promise |

<a name="module_api.Transactions.amend"></a>

#### Transactions.amend(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Amend a Transaction

**Kind**: static method of <code>[Transactions](#module_api.Transactions)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns Promise that resolves with the amended Transaction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.transaction | <code>Transaction</code> | The amended Transaction instance |
| params.AMId | <code>number</code> | Asset Manager ID of the Transaction's owner |
| params.resourceId | <code>string</code> | Transaction ID |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Transaction instance. Omit to return Promise |

<a name="module_api.Transactions.partialAmend"></a>

#### Transactions.partialAmend(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Partially amend a Transaction

**Kind**: static method of <code>[Transactions](#module_api.Transactions)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns Promise that resolves with the amended Transaction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.changes | <code>Transaction</code> | object of changes to apply to the Transaction |
| params.AMId | <code>number</code> | Asset Manager ID of the Transaction's owner |
| params.resourceId | <code>string</code> | Transaction ID |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the amended Transaction instance. Omit to return Promise |

<a name="module_api.Transactions.search"></a>

#### Transactions.search(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Search Transactions

**Kind**: static method of <code>[Transactions](#module_api.Transactions)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns a Promise that resolves with an array of Transactions or a single Transaction instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters |
| [params.AMId] | <code>number</code> | Asset Manager ID of the Transactions to search over. If omitted you must pass assetManagerIds in the query |
| params.query | <code>array</code> | Array of query parameters of the form: [{ key: `string`, values: `array` }]<br /> Available keys are: <li>clientIds</li> <li>transactionStatuses</li> <li>transactionIds</li> <li>assetBookIds</li> <li>counterpartyBookIds</li> <li>assetIds</li> <li>transactionDateStart</li> <li>transactionDateEnd</li> <li>codeTypes</li> <li>codeValues</li> <li>linkTypes</li> <li>linkedTransactionIds</li> <li>partyTypes</li> <li>partyIds</li> <li>referenceTypes</li> <li>referenceValues</li> e.g. `[ { key: 'assetManagerIds', values: [1] }, { key: 'bookIds', values: [1, 2, 3]} ]` |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is an array of Transactions or a single Transaction instance. Omit to return Promise |

<a name="module_api.Transactions.cancel"></a>

#### Transactions.cancel(params, [callback]) ⇒ <code>Promise</code> &#124; <code>null</code>
Cancel a Transaction

**Kind**: static method of <code>[Transactions](#module_api.Transactions)</code>  
**Returns**: <code>Promise</code> &#124; <code>null</code> - If no callback supplied, returns Promise that resolves with the cancelled Transaction instance. Note that this is the only time the API returns a Transaction instance where transactionStatus === 'Cancelled'  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Transaction's owner |
| params.resourceId | <code>string</code> | Transaction ID |
| [callback] | <code>function</code> | Called with two arguments (error, result) on completion. `result` is the cancelled Transaction instance. Omit to return Promise |

<a name="module_assetManagers"></a>

## assetManagers
Classes for the AssetManagers service


* [assetManagers](#module_assetManagers)
    * [.AssetManager](#module_assetManagers.AssetManager) ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
        * [new AssetManager(params)](#new_module_assetManagers.AssetManager_new)

<a name="module_assetManagers.AssetManager"></a>

### assetManagers.AssetManager ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
Class representing an Asset Manager

**Kind**: static class of <code>[assetManagers](#module_assetManagers)</code>  
**Extends:** <code>[AMaaSModel](#module_core.AMaaSModel)</code>  
<a name="new_module_assetManagers.AssetManager_new"></a>

#### new AssetManager(params)
Construct a new Asset Manager Model


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Asset Manager creation options: |
| [params.assetManagerId] | <code>number</code> | <code>generated server side</code> | Asset Manager's ID. Include to specifically set, if it does not already exist |
| params.assetManagerType | <code>string</code> |  | Type of Asset Manager (e.g. Hedge Fund). Required<br /> Available types are: <li>Accredited Investor</li> <li>Bank</li> <li>Broker</li> <li>Corporate Treasury</li> <li>Family Office</li> <li>Fund Administrator</li> <li>Fund Manager</li> <li>Hedge Fund</li> <li>Private Equity</li> <li>Retail</li> <li>Venture Capital</li> |
| [params.assetManagerStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of Asset Manager (e.g. Active) |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.partyId] | <code>string</code> | <code>&quot;&#x27;AMID&#x27;+assetManagerId&quot;</code> | ID of the Party that represents this Asset Manager. Defaults to e.g. AMID10 for assetManagerId 10 |
| [params.defaultBookOwnerId] | <code>string</code> | <code>&quot;assetManagerId&quot;</code> | Asset Manager ID of the default owner for any Books owned by this Asset Manager. Will be used if no `ownerId` is set on the Book. Defaults to e.g. 10 for assetManagerId 10 |
| [params.defaultTimezone] | <code>string</code> | <code>&quot;UTC&quot;</code> | Default timezone for any Books owned by this Asset Manager |
| [params.defaultBookCloseTime] | <code>string</code> | <code>&quot;18:00:00&quot;</code> | Default Book close time for any books owned by this Asset Manager ('HH:MM:SS') |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Asset Manager |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Asset Manager |
| [params.createdTime] | <code>date</code> |  | Time that the Asset Manager was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Asset Manager was updated |
| [params.version] | <code>number</code> |  | Version number of the Asset Manager |

<a name="module_assets"></a>

## assets
Classes for the Assets service


* [assets](#module_assets)
    * [.Asset](#module_assets.Asset) ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
        * [new Asset(params)](#new_module_assets.Asset_new)
    * [.BondBase](#module_assets.BondBase) ⇐ <code>[Asset](#module_assets.Asset)</code>
        * [new BondBase(params)](#new_module_assets.BondBase_new)
    * [.BondCorporate](#module_assets.BondCorporate) ⇐ <code>[BondBase](#module_assets.BondBase)</code>
        * [new BondCorporate(params)](#new_module_assets.BondCorporate_new)
    * [.BondGovernment](#module_assets.BondGovernment) ⇐ <code>[BondBase](#module_assets.BondBase)</code>
        * [new BondGovernment(params)](#new_module_assets.BondGovernment_new)
    * [.BondMortgage](#module_assets.BondMortgage) ⇐ <code>[BondBase](#module_assets.BondBase)</code>
        * [new BondMortgage(params)](#new_module_assets.BondMortgage_new)
    * [.Currency](#module_assets.Currency) ⇐ <code>[Asset](#module_assets.Asset)</code>
        * [new Currency(params)](#new_module_assets.Currency_new)
    * [.CustomAsset](#module_assets.CustomAsset) ⇐ <code>[Asset](#module_assets.Asset)</code>
        * [new CustomAsset(params)](#new_module_assets.CustomAsset_new)
    * [.BondOption](#module_assets.BondOption) ⇐ <code>[Derivative](#module_assets.Derivative)</code>
        * [new BondOption(params)](#new_module_assets.BondOption_new)
    * [.ContractForDifference](#module_assets.ContractForDifference) ⇐ <code>[Derivative](#module_assets.Derivative)</code>
        * [new ContractForDifference(params)](#new_module_assets.ContractForDifference_new)
    * [.Derivative](#module_assets.Derivative) ⇐ <code>[Asset](#module_assets.Asset)</code>
        * [new Derivative(params)](#new_module_assets.Derivative_new)
    * [.Equity](#module_assets.Equity) ⇐ <code>[Asset](#module_assets.Asset)</code>
        * [new Equity(params)](#new_module_assets.Equity_new)
    * [.ForeignExchangeOption](#module_assets.ForeignExchangeOption) ⇐ <code>[Asset](#module_assets.Asset)</code>
        * [new ForeignExchangeOption(params)](#new_module_assets.ForeignExchangeOption_new)
    * [.ExchangeTradedFund](#module_assets.ExchangeTradedFund) ⇐ <code>[Fund](#module_assets.Fund)</code>
        * [new ExchangeTradedFund(params)](#new_module_assets.ExchangeTradedFund_new)
    * [.Fund](#module_assets.Fund) ⇐ <code>[Asset](#module_assets.Asset)</code>
        * [new Fund(params)](#new_module_assets.Fund_new)
    * [.ForeignExchange](#module_assets.ForeignExchange) ⇐ <code>[ForeignExchangeBase](#module_assets.ForeignExchangeBase)</code>
        * [new ForeignExchange(params)](#new_module_assets.ForeignExchange_new)
    * [.ForeignExchangeBase](#module_assets.ForeignExchangeBase) ⇐ <code>[Asset](#module_assets.Asset)</code>
        * [new ForeignExchangeBase(params)](#new_module_assets.ForeignExchangeBase_new)
    * [.NonDeliverableForward](#module_assets.NonDeliverableForward) ⇐ <code>[ForeignExchangeBase](#module_assets.ForeignExchangeBase)</code>
        * [new NonDeliverableForward(params)](#new_module_assets.NonDeliverableForward_new)
    * [.Index](#module_assets.Index) ⇐ <code>[Asset](#module_assets.Asset)</code>
        * [new Index(params)](#new_module_assets.Index_new)
    * [.BondFuture](#module_assets.BondFuture) ⇐ <code>[Future](#module_assets.Future)</code>
        * [new BondFuture(params)](#new_module_assets.BondFuture_new)
    * [.BondFutureOption](#module_assets.BondFutureOption) ⇐ <code>[Future](#module_assets.Future)</code>
        * [new BondFutureOption(params)](#new_module_assets.BondFutureOption_new)
    * [.EnergyFuture](#module_assets.EnergyFuture) ⇐ <code>[Future](#module_assets.Future)</code>
        * [new EnergyFuture(params)](#new_module_assets.EnergyFuture_new)
    * [.EquityFuture](#module_assets.EquityFuture) ⇐ <code>[ListedDerivative](#module_assets.ListedDerivative)</code>
        * [new EquityFuture(params)](#new_module_assets.EquityFuture_new)
    * [.Future](#module_assets.Future) ⇐ <code>[ListedDerivative](#module_assets.ListedDerivative)</code>
        * [new Future(params)](#new_module_assets.Future_new)
    * [.FutureOption](#module_assets.FutureOption) ⇐ <code>[Future](#module_assets.Future)</code>
        * [new FutureOption(params)](#new_module_assets.FutureOption_new)
    * [.IndexFuture](#module_assets.IndexFuture) ⇐ <code>[Future](#module_assets.Future)</code>
        * [new IndexFuture(params)](#new_module_assets.IndexFuture_new)
    * [.InterestRateFuture](#module_assets.InterestRateFuture) ⇐ <code>[Future](#module_assets.Future)</code>
        * [new InterestRateFuture(params)](#new_module_assets.InterestRateFuture_new)
    * [.ListedContractForDifference](#module_assets.ListedContractForDifference) ⇐ <code>[ListedDerivative](#module_assets.ListedDerivative)</code>
        * [new ListedContractForDifference(params)](#new_module_assets.ListedContractForDifference_new)
    * [.ListedDerivative](#module_assets.ListedDerivative) ⇐ <code>[Asset](#module_assets.Asset)</code>
        * [new ListedDerivative(params)](#new_module_assets.ListedDerivative_new)
    * [.RealAsset](#module_assets.RealAsset) ⇐ <code>[Asset](#module_assets.Asset)</code>
        * [new RealAsset(params)](#new_module_assets.RealAsset_new)
    * [.RealEstate](#module_assets.RealEstate) ⇐ <code>[RealAsset](#module_assets.RealAsset)</code>
        * [new RealEstate(params)](#new_module_assets.RealEstate_new)
    * [.Wine](#module_assets.Wine) ⇐ <code>[RealAsset](#module_assets.RealAsset)</code>
        * [new Wine(params)](#new_module_assets.Wine_new)
    * [.Sukuk](#module_assets.Sukuk) ⇐ <code>[Asset](#module_assets.Asset)</code>
        * [new Sukuk(params)](#new_module_assets.Sukuk_new)
    * [.Synthetic](#module_assets.Synthetic) ⇐ <code>[Asset](#module_assets.Asset)</code>
        * [new Synthetic(params)](#new_module_assets.Synthetic_new)
    * [.SyntheticFromBook](#module_assets.SyntheticFromBook) ⇐ <code>[Synthetic](#module_assets.Synthetic)</code>
        * [new SyntheticFromBook(params)](#new_module_assets.SyntheticFromBook_new)
    * [.SyntheticMultiLeg](#module_assets.SyntheticMultiLeg) ⇐ <code>[Synthetic](#module_assets.Synthetic)</code>
        * [new SyntheticMultiLeg(params)](#new_module_assets.SyntheticMultiLeg_new)

<a name="module_assets.Asset"></a>

### assets.Asset ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
Class representing an Asset

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[AMaaSModel](#module_core.AMaaSModel)</code>  
<a name="new_module_assets.Asset_new"></a>

#### new Asset(params)
Construct a new Asset instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Asset creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Asset's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Asset&quot;</code> | Class of the Asset |
| [params.assetType] | <code>string</code> |  | Type of the Asset. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| params.fungible | <code>boolean</code> |  | Whether this Asset is fungible __(required)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Asset issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Asset |
| [params.countryId] | <code>string</code> |  | ID of Asset's country |
| [params.venueId] | <code>string</code> |  | ID of Asset's venue if applicable |
| [params.currency] | <code>string</code> |  | Asset currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Maturity date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Asset |
| [params.displayName] | <code>string</code> |  | Display name of the Asset |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Asset |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Asset |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Asset |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with this Asset. * The AMaaS Reference is auto-created and populated |
| [params.clientAdditional] | <code>object</code> |  | Object of custom properties for creating a Custom Asset (set in the Custom Asset class) |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Asset |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Asset |
| [params.createdTime] | <code>date</code> |  | Time that the Asset was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Asset was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.BondBase"></a>

### assets.BondBase ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing a Base Bond

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.BondBase_new"></a>

#### new BondBase(params)
Construct new Bond instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | BondBase creation options: |
| params.assetManagerId | <code>string</code> |  | ID of Bond's Asset Manager __(required)__ |
| params.assetId | <code>string</code> |  | ID of the Bond __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Bond&quot;</code> | Auto-set to `Bond` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Asset. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set `true` for Bonds __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Bond Issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Bond |
| [params.countryId] | <code>string</code> |  | ID of the Bond's country |
| [params.venueId] | <code>string</code> |  | ID of the Bond's venue if applicable |
| [params.currency] | <code>string</code> |  | Bond currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Bond issue date (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Bond maturity date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Bond |
| [params.displayName] | <code>string</code> |  | Display name of the Bond |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Bond |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.coupon | <code>number</code> |  | The Bond's coupon represented as a fraction of 1 i.e. 0.05 = 5%. Stored as a Decimal instance __(required)__ |
| params.par | <code>number</code> |  | The Bond's par value. Stored as a Decimal instance __(required)__ |
| params.payFrequency | <code>string</code> |  | Frequency of the coupon payment __(required)__ |
| [params.defaulted] | <code>boolean</code> | <code>false</code> | Whether the issuer has defaulted |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Bond |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Bond |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References attached to the Bond. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Bond |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Bond |
| [params.createdTime] | <code>date</code> |  | Time that the Bond was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Bond was updated |
| [params.version] | <code>number</code> |  | Version number of the Bond |

<a name="module_assets.BondCorporate"></a>

### assets.BondCorporate ⇐ <code>[BondBase](#module_assets.BondBase)</code>
Class representing a Corporate Bond

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[BondBase](#module_assets.BondBase)</code>  
<a name="new_module_assets.BondCorporate_new"></a>

#### new BondCorporate(params)
Construct new Corporate Bond instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | BondCorporate creation options: |
| params.assetManagerId | <code>string</code> |  | ID of Bond's Asset Manager __(required)__ |
| params.assetId | <code>string</code> |  | ID of the Bond __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Bond&quot;</code> | Auto-set to `Bond` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Bond. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set `true` for Bonds __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Bond Issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Bond |
| [params.countryId] | <code>string</code> |  | ID of the Bond's origin country |
| [params.venueId] | <code>string</code> |  | ID of the Bond's venue |
| [params.currency] | <code>string</code> |  | Currency denomination of the Bond |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Bond issue date (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Bond maturity date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Bond |
| [params.displayName] | <code>string</code> |  | Display name of the Bond |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Bond |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.coupon | <code>number</code> |  | The Bond's coupon represented as a fraction of 1 i.e. 0.05 = 5%. Stored as a Decimal instance __(required)__ |
| params.par | <code>number</code> |  | The Bond's par value. Stored as a Decimal instance __(required)__ |
| params.payFrequency | <code>string</code> |  | Frequency of the coupon payment __(required)__ |
| [params.defaulted] | <code>boolean</code> | <code>false</code> | Whether the issuer has defaulted |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Bond |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Bond |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References attached to the Bond. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Bond |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Bond |
| [params.createdTime] | <code>date</code> |  | Time that the Bond was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Bond was updated |
| [params.version] | <code>number</code> |  | Version number of the Bond |

<a name="module_assets.BondGovernment"></a>

### assets.BondGovernment ⇐ <code>[BondBase](#module_assets.BondBase)</code>
Class representing a Government Bond

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[BondBase](#module_assets.BondBase)</code>  
<a name="new_module_assets.BondGovernment_new"></a>

#### new BondGovernment(params)
Construct new Government Bond instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | BondGovernment creation options: |
| params.assetManagerId | <code>string</code> |  | ID of Bond's Asset Manager __(required)__ |
| params.assetId | <code>string</code> |  | ID of the Bond __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Bond&quot;</code> | Auto-set to `Bond` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Bond. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set `true` for Bonds __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Bond Issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Bond |
| [params.countryId] | <code>string</code> |  | ID of the Bond's country |
| [params.venueId] | <code>string</code> |  | ID of the Bond's venue |
| [params.currency] | <code>string</code> |  | Bond currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Bond issue date (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Bond maturity date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Bond |
| [params.displayName] | <code>string</code> |  | Display name of the Bond |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Bond |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.coupon | <code>number</code> |  | The Bond's coupon represented as a fraction of 1 i.e. 0.05 = 5%. Stored as a Decimal instance __(required)__ |
| params.par | <code>number</code> |  | The Bond's par value. Stored as a Decimal instance __(required)__ |
| params.payFrequency | <code>string</code> |  | Frequency of coupon payment __(required)__ |
| [params.defaulted] | <code>boolean</code> | <code>false</code> | Whether the issuer has defaulted |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Bond |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Bond |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References attached to the Bond. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Bond |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Bond |
| [params.createdTime] | <code>date</code> |  | Time that the Bond was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Bond was updated |
| [params.version] | <code>number</code> |  | Version number of the Bond |

<a name="module_assets.BondMortgage"></a>

### assets.BondMortgage ⇐ <code>[BondBase](#module_assets.BondBase)</code>
Class representing a Mortgage Bond

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[BondBase](#module_assets.BondBase)</code>  
<a name="new_module_assets.BondMortgage_new"></a>

#### new BondMortgage(params)
Construct new Mortgage Bond instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | BondMortgage creation options: |
| params.assetManagerId | <code>string</code> |  | ID of Bond's Asset Manager __(required)__ |
| params.assetId | <code>string</code> |  | ID of the Bond __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Bond&quot;</code> | Auto-set to `Bond` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Bond. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set `true` for Bonds __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Bond Issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Bond |
| [params.countryId] | <code>string</code> |  | ID of the Bond's country |
| [params.venueId] | <code>string</code> |  | ID of the Bond's venue |
| [params.currency] | <code>string</code> |  | Bond Currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Bond issue date (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Bond maturity date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Bond |
| [params.displayName] | <code>string</code> |  | Display name of the Bond |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Bond |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.coupon | <code>number</code> |  | The Bond's coupon represented as a fraction of 1 i.e. 0.05 = 5%. Stored as a Decimal instance __(required)__ |
| params.par | <code>number</code> |  | The Bond's par value. Stored as a Decimal instance __(required)__ |
| params.payFrequency | <code>string</code> |  | Frequency of the coupon payment __(required)__ |
| [params.defaulted] | <code>boolean</code> | <code>false</code> | Whether the issuer has defaulted |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Bond |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Bond |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References attached to the Bond |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Bond |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Bond |
| [params.createdTime] | <code>date</code> |  | Time that the Bond was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Bond was updated |
| [params.version] | <code>number</code> |  | Version number of the Bond |

<a name="module_assets.Currency"></a>

### assets.Currency ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing an Currency

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.Currency_new"></a>

#### new Currency(params)
Construct a new Currency instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Currency creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Currency's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Currency __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Currency&quot;</code> | Auto-set to `Currency` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Currency. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` for Currency |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Currency issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Currency |
| [params.countryId] | <code>string</code> |  | ID of Currency's country |
| [params.venueId] | <code>string</code> |  | ID of Currency's venue if applicable |
| [params.currency] | <code>string</code> |  | Auto-set to 'assetId' __(read-only)__ |
| [params.description] | <code>string</code> |  | Description of the Currency |
| [params.displayName] | <code>string</code> |  | Display name of the Currency |
| [params.clientId] | <code>string</code> |  | ID of associated client |
| [params.deliverable] | <code>boolean</code> | <code>true</code> | Whether the Currency is deliverable |
| [params.minorUnitPlaces] | <code>number</code> |  | Decimal precision of Currency (e.g. 4 for JPY, 2 for USD) |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Currency |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Currency |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References attached to the Currency. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Asset |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Asset |
| [params.createdTime] | <code>date</code> |  | Time that the Asset was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Asset was updated |
| [params.version] | <code>number</code> |  | Version number of the Asset |

<a name="module_assets.CustomAsset"></a>

### assets.CustomAsset ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing an Custom Asset

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.CustomAsset_new"></a>

#### new CustomAsset(params)
Construct a new Custom Asset instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | CustomAsset creation options: |
| params.assetManagerId | <code>integer</code> |  | ID of Asset's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Asset&quot;</code> | Auto-set to `Asset` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Asset. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| params.fungible | <code>boolean</code> |  | Whether this Asset is fungible __(required)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Asset issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Asset |
| [params.countryId] | <code>string</code> |  | ID of Asset's country |
| [params.venueId] | <code>string</code> |  | ID of Asset's venue if applicable |
| [params.currency] | <code>string</code> |  | Asset currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Maturity date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Asset |
| [params.displayName] | <code>string</code> |  | Display name of the Asset |
| [params.rollPrice] | <code>boolean</code> |  | Whether to roll the price for the Asset |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Asset |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Asset |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with this Asset. * The AMaaS Reference is auto-created and populated |
| [params.clientAdditional] | <code>object</code> |  | Object of custom properties for creating a Custom Asset (e.g. { size: 'Large', Flavour: 'Lime' }) |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Asset |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Asset |
| [params.createdTime] | <code>date</code> |  | Time that the Asset was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Asset was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.BondOption"></a>

### assets.BondOption ⇐ <code>[Derivative](#module_assets.Derivative)</code>
Class representing an Bond Option

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Derivative](#module_assets.Derivative)</code>  
<a name="new_module_assets.BondOption_new"></a>

#### new BondOption(params)
Construct a new Bond Option instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | BondOption creation options |
| params.assetManagerId | <code>number</code> |  | ID of Bond Option's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Bond Option __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Derivative&quot;</code> | Auto-set to `Derivative` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Bond Option. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>false</code> | Auto-set to `false` for Derivative and subclasses |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Bond Option's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Bond Option |
| [params.countryId] | <code>string</code> |  | ID of Bond Option's country |
| [params.venueId] | <code>string</code> |  | ID of Bond Option's venue if applicable |
| [params.currency] | <code>string</code> |  | Bond Option currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Expiry date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Bond Option |
| [params.displayName] | <code>string</code> |  | Display name of the Bond Option |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.optionStyle | <code>string</code> |  | Option style __(required)__<br /> Available options: <li>American</li> <li>Bermudan</li> <li>European</li> |
| params.optionType | <code>string</code> |  | Option type __(required)__<br /> Available options: <li>Put</li> <li>Call</li> |
| params.strike | <code>number</code> |  | Strike price of the Bond Option. Stored as a Decimal instance __(required)__ |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Bond Option |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Bond Option |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Bond Option. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Bond Option |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Bond Option |
| [params.createdTime] | <code>date</code> |  | Time that the Bond Option was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Bond Option was updated |
| [params.version] | <code>number</code> |  | Version number of the Bond Option |

<a name="module_assets.ContractForDifference"></a>

### assets.ContractForDifference ⇐ <code>[Derivative](#module_assets.Derivative)</code>
Class representing a CFD

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Derivative](#module_assets.Derivative)</code>  
<a name="new_module_assets.ContractForDifference_new"></a>

#### new ContractForDifference(params)
Construct a new CFD instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | CFD creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Asset's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Derivative&quot;</code> | Auto-set to `Derivative` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the CFD. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>false</code> | Auto-set to `false` for Derivative and its subclasses __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the CFD issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the CFD |
| [params.countryId] | <code>string</code> |  | ID of CFD's country |
| [params.venueId] | <code>string</code> |  | ID of CFD's venue |
| [params.currency] | <code>string</code> |  | CFD currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> |  | Issue date if applicable (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> |  | Maturity date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the CFD |
| [params.displayName] | <code>string</code> |  | Display name of the CFD |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the CFD |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the CFD |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the CFD. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the CFD |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the CFD |
| [params.createdTime] | <code>date</code> |  | Time that the CFD was created |
| [params.updatedTime] | <code>date</code> |  | Time that the CFD was updated |
| [params.version] | <code>number</code> |  | Version number of the CFD |

<a name="module_assets.Derivative"></a>

### assets.Derivative ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing an Derivative

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.Derivative_new"></a>

#### new Derivative(params)
Construct a new Derivative instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Derivative creation options: |
| params.assetManagerId | <code>integer</code> |  | ID of Derivative's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Derivative __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Derivative&quot;</code> | Class of the Derivative (a subclass of Derivative may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Derivative. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>false</code> | Auto-set to `false` for Derivative __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Derivative's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Derivative |
| [params.countryId] | <code>string</code> |  | ID of Derivative's country |
| [params.venueId] | <code>string</code> |  | ID of Derivative's venue if applicable |
| params.currency | <code>string</code> |  | Derivative currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Maturity date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Derivative |
| [params.displayName] | <code>string</code> |  | Display name of the Derivative |
| [params.rollPrice] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Derivative |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Derivative |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Derivative. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Derivative |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Derivative |
| [params.createdTime] | <code>date</code> |  | Time that the Derivative was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Derivative was updated |
| [params.version] | <code>number</code> |  | Version number of the Derivative |

<a name="module_assets.Equity"></a>

### assets.Equity ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing an Equity

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.Equity_new"></a>

#### new Equity(params)
Construct a new Equity instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Equity creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Equity's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Equity __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Equity&quot;</code> | Class of the Equity (a subclass of Equity may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Equity. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` for Equity __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Equity's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Equity |
| [params.countryId] | <code>string</code> |  | ID of Equity's country |
| [params.venueId] | <code>string</code> |  | ID of Equity's venue if applicable |
| [params.currency] | <code>string</code> |  | Equity currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> |  | Issue date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Equity |
| [params.displayName] | <code>string</code> |  | Display name of the Equity |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Equity |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.shareClass] | <code>string</code> | <code>&quot;Common&quot;</code> | Share Class |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Equity |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Equity |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Equity. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Equity |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Equity |
| [params.createdTime] | <code>date</code> |  | Time that the Equity was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Equity was updated |
| [params.version] | <code>number</code> |  | Version number of the Equity |

<a name="module_assets.ForeignExchangeOption"></a>

### assets.ForeignExchangeOption ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing an FX Option

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.ForeignExchangeOption_new"></a>

#### new ForeignExchangeOption(params)
Construct a new FX Option instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | ForeignExchangeOption creation options: |
| params.assetManagerId | <code>number</code> |  | ID of FX Option's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;ForeignExchange&quot;</code> | Auto-set to `ForeignExchange` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the FX Option. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the FX Option's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the FX Option |
| [params.countryId] | <code>string</code> |  | ID of FX Option's country |
| [params.venueId] | <code>string</code> |  | ID of FX Option's venue if applicable |
| [params.currency] | <code>string</code> |  | FX Option currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> |  | Issue date (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> |  | Expiry date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the FX Option |
| [params.displayName] | <code>string</code> |  | Display name of the FX Option |
| [params.clientId] | <code>string</code> |  | ID of the client to which the FX Option belongs |
| params.optionStyle | <code>string</code> |  | FX Option style __(required)__<br /> Available options: <li>American</li> <li>Bermudan</li> <li>European</li> |
| params.optionType | <code>string</code> |  | FX Option type __(required)__<br /> Available options: <li>Put</li> <li>Call</li> |
| params.strike | <code>number</code> |  | Strike price of the FX Option __(required)__ |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the FX Option |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the FX Option |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the FX Option. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the FX Option |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the FX Option |
| [params.createdTime] | <code>date</code> |  | Time that the FX Option was created |
| [params.updatedTime] | <code>date</code> |  | Time that the FX Option was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.ExchangeTradedFund"></a>

### assets.ExchangeTradedFund ⇐ <code>[Fund](#module_assets.Fund)</code>
Class representing an ETF

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Fund](#module_assets.Fund)</code>  
<a name="new_module_assets.ExchangeTradedFund_new"></a>

#### new ExchangeTradedFund(params)
Construct a new ETF instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | ExchangeTradedFund creation options: |
| params.assetManagerId | <code>number</code> |  | ID of ETF's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the ETF __(required)__ |
| [params.assetClass] | <code>string</code> |  | Auto-set to `Fund` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the ETF. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` for Fund and its subclasses |
| [params.assetIssuerId] | <code>string</code> |  | ID of the ETF's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the ETF |
| [params.countryId] | <code>string</code> |  | ID of ETF's country |
| [params.venueId] | <code>string</code> |  | ID of ETF's venue if applicable |
| [params.currency] | <code>string</code> |  | ETF currency (e.g. USD, SGD) |
| [params.creationDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | ETF's creation date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the ETF |
| [params.displayName] | <code>string</code> |  | Display name of the ETF |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the ETF |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.fundType] | <code>string</code> | <code>&quot;ETF&quot;</code> | Auto-set to `ETF` __(read-only)__ |
| [params.nav] | <code>number</code> |  | ETF's Net Asset Value. Stored as a Decimal instance |
| [params.expenseRatio] | <code>number</code> |  | ETF's expense ratio. Stored as a Decimal instance |
| [params.netAssets] | <code>number</code> |  | ETF's net assets. Stored as a Decimal instance |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the ETF |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the ETF |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the ETF. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the ETF |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the ETF |
| [params.createdTime] | <code>date</code> |  | Time that the ETF was created |
| [params.updatedTime] | <code>date</code> |  | Time that the ETF was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.Fund"></a>

### assets.Fund ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing a Fund

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.Fund_new"></a>

#### new Fund(params)
Construct a new Fund instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Fund creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Fund's Asset Manager. Asset Manager refers to AMaaS user, NOT an asset manager in the Fund. __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Fund __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Fund&quot;</code> | Class of the Fund (a subclass of Fund may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Fund. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` for Fund __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Fund's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Fund |
| [params.countryId] | <code>string</code> |  | ID of Fund's country |
| [params.venueId] | <code>string</code> |  | ID of Fund's venue if applicable |
| [params.currency] | <code>string</code> |  | Fund currency (e.g. USD, SGD) |
| [params.description] | <code>string</code> |  | Description of the Fund |
| [params.displayName] | <code>string</code> |  | Display name of the Fund |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Fund |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.fundType | <code>string</code> |  | Type of Fund __(required)__<br /> Available options: <li>Open</li> <li>Closed</li> <li>ETF</li> |
| [params.creationDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Fund's creation date (YYYY-MM-DD) |
| [params.nav] | <code>number</code> |  | Fund's Net Asset Value. Stored as a Decimal instance |
| [params.expenseRatio] | <code>number</code> |  | Fund's expense ratio. Stored as a Decimal instance |
| [params.netAssets] | <code>number</code> |  | Fund's net assets. Stored as a Decimal instance |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Fund |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Fund |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Fund. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Fund |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Fund |
| [params.createdTime] | <code>date</code> |  | Time that the Fund was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Fund was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.ForeignExchange"></a>

### assets.ForeignExchange ⇐ <code>[ForeignExchangeBase](#module_assets.ForeignExchangeBase)</code>
Class representing FX

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[ForeignExchangeBase](#module_assets.ForeignExchangeBase)</code>  
<a name="new_module_assets.ForeignExchange_new"></a>

#### new ForeignExchange(params)
Construct a new Foreign Exchange instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | ForeignExchange creation options: |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| params.assetClass | <code>string</code> |  | Auto-set to `ForeignExchange` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the ForeignExchange. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Foreign Exchange's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Foreign Exchange |
| [params.description] | <code>string</code> |  | Description of the Foreign Exchange |
| [params.displayName] | <code>string</code> |  | Display name of the ForeignExchange |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Foreign Exchange |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Foreign Exchange |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Foreign Exchange. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Foreign Exchange |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Foreign Exchange |
| [params.createdTime] | <code>date</code> |  | Time that the Foreign Exchange was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Foreign Exchange was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.ForeignExchangeBase"></a>

### assets.ForeignExchangeBase ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing FX (this should never be instantiated directly, use the appropriate subclass instead).
Note that creating and editing FXBase subclasses and other public subclasses is a restricted action.

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.ForeignExchangeBase_new"></a>

#### new ForeignExchangeBase(params)
Construct a new ForeignExchangeBase instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | ForeignExchangeBase creation options: |
| [params.assetManagerId] | <code>number</code> | <code>0</code> | Auto-set to `0`. All FX classes and subclasses are treated as public Assets |
| params.assetId | <code>number</code> |  | ID of the ForeignExchangeBase __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;ForeignExchange&quot;</code> | Auto-set to `ForeignExchange` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the ForeignExchangeBase. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` for ForeignExchangeBase __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the ForeignExchangeBase's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the ForeignExchangeBase |
| [params.description] | <code>string</code> |  | Description of the ForeignExchangeBase |
| [params.displayName] | <code>string</code> |  | Display name of the ForeignExchangeBase |
| [params.rollPrice] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the ForeignExchangeBase |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the ForeignExchangeBase |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the ForeignExchangeBase. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the ForeignExchangeBase |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the ForeignExchangeBase |
| [params.createdTime] | <code>date</code> |  | Time that the ForeignExchangeBase was created |
| [params.updatedTime] | <code>date</code> |  | Time that the ForeignExchangeBase was updated |
| params.version | <code>number</code> |  | Version number |

<a name="module_assets.NonDeliverableForward"></a>

### assets.NonDeliverableForward ⇐ <code>[ForeignExchangeBase](#module_assets.ForeignExchangeBase)</code>
Class representing FX

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[ForeignExchangeBase](#module_assets.ForeignExchangeBase)</code>  
<a name="new_module_assets.NonDeliverableForward_new"></a>

#### new NonDeliverableForward(params)
Construct a new Non Deliverable Forward instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | NonDeliverableForward creation options: |
| params.assetId | <code>number</code> |  | ID of the Non Deliverable Forward __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;ForeignExchange&quot;</code> | Auto-set to `ForeignExchange` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Non Deliverable Forward. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Non Deliverable Forward's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Asset |
| [params.description] | <code>string</code> |  | Description of the Non Deliverable Forward |
| [params.displayName] | <code>string</code> |  | Display name of the Non Deliverable Forward |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Non Deliverable Forward |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Non Deliverable Forward |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with this Asset. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Non Deliverable Forward |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Non Deliverable Forward |
| [params.createdTime] | <code>date</code> |  | Time that the Non Deliverable Forward was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Non Deliverable Forward was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.Index"></a>

### assets.Index ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing an Index

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.Index_new"></a>

#### new Index(params)
Construct a new Index instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Index creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Index's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Index&quot;</code> | Auto-set to `Index` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Index. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` for Index __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Index's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Index |
| [params.countryId] | <code>string</code> |  | ID of Index's country |
| [params.currency] | <code>string</code> |  | Index currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Index |
| [params.displayName] | <code>string</code> |  | Display name of the Index |
| [params.rollPrice] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Index |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Index |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Index. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Index |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Index |
| [params.createdTime] | <code>date</code> |  | Time that the Index was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Index was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.BondFuture"></a>

### assets.BondFuture ⇐ <code>[Future](#module_assets.Future)</code>
Class representing a Bond Future

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Future](#module_assets.Future)</code>  
<a name="new_module_assets.BondFuture_new"></a>

#### new BondFuture(params)
Construct a new Bond Future instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Bond Future creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Bond Future's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Bond Future __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Auto-set to `Future` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Bond Future. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Bond Future's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Bond Future |
| [params.countryId] | <code>string</code> |  | ID of Bond Future's country |
| [params.venueId] | <code>string</code> |  | ID of Bond Future's venue if applicable |
| [params.currency] | <code>string</code> |  | Bond Future currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Date of the contract's expiry (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Bond Future |
| [params.displayName] | <code>string</code> |  | Display name of the Bond Future |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> Available options: <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as a Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance __(required)__ |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.cheapestToDeliverId] | <code>string</code> |  | The cheapest Bond which can be delivered to the terms of the Future |
| [params.underlyingBondTenor] | <code>string</code> |  | Tenor of the underlying Bond<br /> Available options: <li>1M</li> <li>3M</li> <li>6M</li> <li>9M</li> <li>1Y</li> <li>2Y</li> <li>5Y</li> <li>10Y</li> <li>15Y</li> <li>20Y</li> <li>30Y</li> <li>40Y</li> <li>50Y</li> |
| [params.underlyingBondCoupon] | <code>number</code> |  | Coupon of the underlying Bond |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Bond Future |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Bond Future |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Bond Future. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Bond Future |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Bond Future |
| [params.createdTime] | <code>date</code> |  | Time that the Bond Future was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Bond Future was updated |
| [params.version] | <code>number</code> |  | Version number of the Bond Future |

<a name="module_assets.BondFutureOption"></a>

### assets.BondFutureOption ⇐ <code>[Future](#module_assets.Future)</code>
Class representing a Bond Future Option

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Future](#module_assets.Future)</code>  
<a name="new_module_assets.BondFutureOption_new"></a>

#### new BondFutureOption(params)
Construct a new Bond Future Option instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Bond Future Option creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Bond Future Option's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Bond Future Option __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Auto-set to `Future` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Bond Future Option. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Bond Future Option's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Bond Future Option |
| [params.countryId] | <code>string</code> |  | ID of Bond Future Option's country |
| [params.venueId] | <code>string</code> |  | ID of Bond Future Option's venue if applicable |
| [params.currency] | <code>string</code> |  | Bond Future Option currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Date of the contract's expiry (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Bond Future Option |
| [params.displayName] | <code>string</code> |  | Display name of the Bond Future Option |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as a Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance __(required)__ |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| params.optionType | <code>string</code> |  | Option type __(required)__<br /> Available options: <li>Put</li> <li>Call</li> |
| params.optionStyle | <code>string</code> |  | Option style __(required)__<br /> Available options: <li>American</li> <li>Bermudan</li> <li>European</li> |
| params.strike | <code>number</code> |  | Strike price. Stored as a Decimal instance __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Bond Future Option |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Bond Future Option |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Bond Future Option. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Bond Future Option |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Bond Future Option |
| [params.createdTime] | <code>date</code> |  | Time that the Bond Future Option was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Bond Future Option was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.EnergyFuture"></a>

### assets.EnergyFuture ⇐ <code>[Future](#module_assets.Future)</code>
Class representing an Energy Future

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Future](#module_assets.Future)</code>  
<a name="new_module_assets.EnergyFuture_new"></a>

#### new EnergyFuture(params)
Construct a new Energy Future instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | EnergyFuture creation options |
| params.assetManagerId | <code>number</code> |  | ID of Energy Future's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Energy Future __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Auto-set to `Future` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Energy Future. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Energy Future's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Energy Future |
| [params.countryId] | <code>string</code> |  | ID of Energy Future's country |
| [params.venueId] | <code>string</code> |  | ID of Energy Future's venue if applicable |
| [params.currency] | <code>string</code> |  | Energy Future currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Date of the contract's expiry (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Energy Future |
| [params.displayName] | <code>string</code> |  | Display name of the Energy Future |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> Available options <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as a Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance __(required)__ |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Energy Future |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Energy Future |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Energy Future. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Energy Future |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Energy Future |
| [params.createdTime] | <code>date</code> |  | Time that the Energy Future was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Energy Future was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.EquityFuture"></a>

### assets.EquityFuture ⇐ <code>[ListedDerivative](#module_assets.ListedDerivative)</code>
Class representing a Future

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[ListedDerivative](#module_assets.ListedDerivative)</code>  
<a name="new_module_assets.EquityFuture_new"></a>

#### new EquityFuture(params)
Construct a new Equity Future instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | EquityFuture creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Equity Future's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Equity Future __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Auto-set to `Future` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Equity Future. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Equity Future's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Equity Future |
| [params.countryId] | <code>string</code> |  | ID of Equity Future's country |
| [params.venueId] | <code>string</code> |  | ID of Equity Future's venue if applicable |
| [params.currency] | <code>string</code> |  | Equity Future currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Date of the contract's expiry (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Equity Future |
| [params.displayName] | <code>string</code> |  | Display name of the Equity Future |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> Available options: <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as a Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Equity Future |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Equity Future |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Equity Future. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Equity Future |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Equity Future |
| [params.createdTime] | <code>date</code> |  | Time that the Equity Future was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Equity Future was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.Future"></a>

### assets.Future ⇐ <code>[ListedDerivative](#module_assets.ListedDerivative)</code>
Class representing a Future

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[ListedDerivative](#module_assets.ListedDerivative)</code>  
<a name="new_module_assets.Future_new"></a>

#### new Future(params)
Construct a new Future instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Future creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Future's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Future __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Class of the Future (a subclass of Future may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Future. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Future's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Future |
| [params.countryId] | <code>string</code> |  | ID of Future's country |
| [params.venueId] | <code>string</code> |  | ID of Future's venue if applicable |
| [params.currency] | <code>string</code> |  | Asset currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Future |
| [params.displayName] | <code>string</code> |  | Display name of the Future |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> Available options: <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as a Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance __(required)__ |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.expiryDate] | <code>string</code> |  | Date of the Future's expiry (YYYY-MM-DD) |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Future |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Future |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Future. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Future |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Future |
| [params.createdTime] | <code>date</code> |  | Time that the Future was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Future was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.FutureOption"></a>

### assets.FutureOption ⇐ <code>[Future](#module_assets.Future)</code>
Class representing a Future Option

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Future](#module_assets.Future)</code>  
<a name="new_module_assets.FutureOption_new"></a>

#### new FutureOption(params)
Construct a new Future Option instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Future Option creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Future Option's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Future Option __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Auto-set to `Future` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Future Option. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` for Future subclasses __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Future Option's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Future Option |
| [params.countryId] | <code>string</code> |  | ID of Future Option's country |
| [params.venueId] | <code>string</code> |  | ID of Future Option's venue if applicable |
| [params.currency] | <code>string</code> |  | Future Option currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Expiry date (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Future Option |
| [params.displayName] | <code>string</code> |  | Display name of the Furure Option |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> Available options: <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as a Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance __(required)__ |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| params.optionType | <code>string</code> |  | Option type __(required)__<br /> Available options: <li>Put</li> <li>Call</li> |
| params.optionStyle | <code>string</code> |  | Option style __(required)__<br /> Available options: <li>American</li> <li>Bermudan</li> <li>European</li> |
| params.strike | <code>number</code> |  | Strike price __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Future Option |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Future Option |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Future Option |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Future Option |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Future Option |
| [params.createdTime] | <code>date</code> |  | Time that the Future Option was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Future Option was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.IndexFuture"></a>

### assets.IndexFuture ⇐ <code>[Future](#module_assets.Future)</code>
Class representing an Index Future

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Future](#module_assets.Future)</code>  
<a name="new_module_assets.IndexFuture_new"></a>

#### new IndexFuture(params)
Construct a new Index Future instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | IndexFuture creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Index Future's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Index Future __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Auto-set to `Future` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Index Future. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Index Future's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Index Future |
| [params.countryId] | <code>string</code> |  | ID of Index Future's country |
| [params.venueId] | <code>string</code> |  | ID of Index Future's venue if applicable |
| [params.currency] | <code>string</code> |  | Index Future currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Date of the contract's expiry (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Index Future |
| [params.displayName] | <code>string</code> |  | Display name of the Index Future |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> Available options: <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as a Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance __(required)__ |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Index Future |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Index Future |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Index Future. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Index Future |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Index Future |
| [params.createdTime] | <code>date</code> |  | Time that the Index Future was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Index Future was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.InterestRateFuture"></a>

### assets.InterestRateFuture ⇐ <code>[Future](#module_assets.Future)</code>
Class representing an Interest Rate Future

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Future](#module_assets.Future)</code>  
<a name="new_module_assets.InterestRateFuture_new"></a>

#### new InterestRateFuture(params)
Construct a new Interest Rate Future instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | InterestRateFuture creation options |
| params.assetManagerId | <code>number</code> |  | ID of Interest Rate Future's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Interest Rate Future __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Future&quot;</code> | Auto-set to `Future` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Interest Rate Future. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Interest Rate Future's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Interest Rate Future |
| [params.countryId] | <code>string</code> |  | ID of Interest Rate Future's country |
| [params.venueId] | <code>string</code> |  | ID of Interest Rate Future's venue if applicable |
| [params.currency] | <code>string</code> |  | Interest Rate Future currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.expiryDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Date of the contract's expiry (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Interest Rate Future |
| [params.displayName] | <code>string</code> |  | Display name of the Interest Rate Future |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.settlementType | <code>string</code> |  | Settlement Type __(required)__<br /> Available options: <li>Cash</li> <li>Physical</li> |
| params.contractSize | <code>number</code> |  | Contract Size __(required)__ |
| [params.pointValue] | <code>number</code> |  | Future point value. Stored as Decimal instance |
| params.tickSize | <code>number</code> |  | Future tick size. Stored as a Decimal instance __(required)__ |
| [params.quoteUnit] | <code>string</code> |  | Future quote unit |
| params.underlyingAssetId | <code>string</code> |  | ID of the underlying Asset __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Interest Rate Future |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Interest Rate Future |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Interest Rate Future. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Interest Rate Future |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Interest Rate Future |
| [params.createdTime] | <code>date</code> |  | Time that the Interest Rate Future was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Interest Rate Future was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.ListedContractForDifference"></a>

### assets.ListedContractForDifference ⇐ <code>[ListedDerivative](#module_assets.ListedDerivative)</code>
Class representing a Listed CFD

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[ListedDerivative](#module_assets.ListedDerivative)</code>  
<a name="new_module_assets.ListedContractForDifference_new"></a>

#### new ListedContractForDifference(params)
Construct a new Listed CFD instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | ListedContractForDifference creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Listed CFD's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Listed CFD __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;ListedDerivative&quot;</code> | Auto-set to `ListedDerivative` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Listed CFD. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Listed CFD's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Listed CFD |
| [params.countryId] | <code>string</code> |  | ID of Listed CFD's country |
| [params.venueId] | <code>string</code> |  | ID of Listed CFD's venue if applicable |
| [params.currency] | <code>string</code> |  | Listed CFD currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Maturity date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Listed CFD |
| [params.displayName] | <code>string</code> |  | Display name of the Listed CFD |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Listed CFD |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Listed CFD |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Listed CFD. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Listed CFD |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Listed CFD |
| [params.createdTime] | <code>date</code> |  | Time that the Listed CFD was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Listed CFD was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.ListedDerivative"></a>

### assets.ListedDerivative ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing a Listed Derivative

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.ListedDerivative_new"></a>

#### new ListedDerivative(params)
Construct a new Listed Derivative instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | ListedDerivative creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Listed Derivative's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Listed Derivative __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;ListedDerivative&quot;</code> | Class of the Listed Derivative (a subclass may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Listed Derivative. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Listed Derivative's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Listed Derivative |
| [params.countryId] | <code>string</code> |  | ID of Listed Derivative's country |
| [params.venueId] | <code>string</code> |  | ID of Listed Derivative's venue if applicable |
| [params.currency] | <code>string</code> |  | Listed Derivative currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> |  | Issue date if applicable (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> |  | Maturity date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Listed Derivative |
| [params.displayName] | <code>string</code> |  | Display name of the Listed Derivative |
| [params.rollPrice] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Listed Derivative |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Listed Derivative |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Listed Derivative. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Listed Derivative |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Listed Derivative |
| [params.createdTime] | <code>date</code> |  | Time that the Listed Derivative was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Listed Derivative was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.RealAsset"></a>

### assets.RealAsset ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing a Real Asset

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.RealAsset_new"></a>

#### new RealAsset(params)
Construct a new Real Asset instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | RealAsset creation options |
| params.assetManagerId | <code>number</code> |  | ID of Asset's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;RealAsset&quot;</code> | Class of the Asset (a subclass of RealAsset may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Asset. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Real Asset's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Real Asset |
| [params.countryId] | <code>string</code> |  | ID of Real Asset's country |
| [params.venueId] | <code>string</code> |  | ID of Real Asset's venue if applicable |
| [params.currency] | <code>string</code> |  | Real Asset currency (e.g. USD, SGD) |
| [params.description] | <code>string</code> |  | Description of the Real Asset |
| [params.displayName] | <code>string</code> |  | Display name of the Asset |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Asset |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Real Asset |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Real Asset |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Real Asset. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Real Asset |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Real Asset |
| [params.createdTime] | <code>date</code> |  | Time that the Real Asset was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Real Asset was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.RealEstate"></a>

### assets.RealEstate ⇐ <code>[RealAsset](#module_assets.RealAsset)</code>
Class representing Real Estate

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[RealAsset](#module_assets.RealAsset)</code>  
<a name="new_module_assets.RealEstate_new"></a>

#### new RealEstate(params)
Construct a new Real Estate instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | RealEstate creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Real Estate's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Real Estate __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;RealAsset&quot;</code> | Auto-set to `RealEstate` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Real Estate. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Real Estate's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Real Estate |
| [params.countryId] | <code>string</code> |  | ID of Real Estate's country |
| [params.venueId] | <code>string</code> |  | ID of Real Estate's venue if applicable |
| [params.currency] | <code>string</code> |  | Real Estate currency (e.g. USD, SGD) |
| [params.description] | <code>string</code> |  | Description of the Real Estate |
| [params.displayName] | <code>string</code> |  | Display name of the Real Estate |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Real Estate |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Real Estate |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Real Estate |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Real Estate. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Real Estate |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Real Estate |
| [params.createdTime] | <code>date</code> |  | Time that the Real Estate was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Real Estate was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.Wine"></a>

### assets.Wine ⇐ <code>[RealAsset](#module_assets.RealAsset)</code>
Class representing Wine

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[RealAsset](#module_assets.RealAsset)</code>  
<a name="new_module_assets.Wine_new"></a>

#### new Wine(params)
Construct a new Wine instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Wine creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Wine's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Wine __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;RealAsset&quot;</code> | Auto-set to `RealAsset` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Wine. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Wine's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Wine |
| [params.countryId] | <code>string</code> |  | ID of Wine's country |
| [params.venueId] | <code>string</code> |  | ID of Wine's venue if applicable |
| [params.currency] | <code>string</code> |  | Wine currency (e.g. USD, SGD) |
| [params.description] | <code>string</code> |  | Description of the Wine |
| [params.displayName] | <code>string</code> |  | Display name of the Wine |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.year] | <code>string</code> |  | Year of production |
| [params.producer] | <code>string</code> |  | Name of the producer |
| [params.region] | <code>string</code> |  | Region |
| [params.appellation] | <code>string</code> |  | Appellation |
| [params.classification] | <code>string</code> |  | Classification |
| [params.color] | <code>string</code> |  | Color (e.g. red, white) |
| [params.bottleSize] | <code>string</code> |  | Bottle size (e.g. Magnum) |
| [params.bottleInCellar] | <code>string</code> |  | ??? |
| [params.bottleLocation] | <code>string</code> |  | Location of the bottle |
| [params.storageCost] | <code>string</code> |  | Storage cost of the Wine |
| [params.ratingType] | <code>string</code> |  | Rating Type |
| [params.ratingValue] | <code>string</code> |  | Rating Value |
| [params.packingType] | <code>string</code> |  | Packing Type |
| [params.toDrinkStart] | <code>string</code> |  | Earliest date it is suitable to begin drinking (YYYY-MM-DD) |
| [params.toDrinkEnd] | <code>string</code> |  | Latest date to drink (YYYY-MM-DD) |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Wine |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Wine |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Wine. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Wine |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Wine |
| [params.createdTime] | <code>date</code> |  | Time that the Wine created |
| [params.updatedTime] | <code>date</code> |  | Time that the Wine was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.Sukuk"></a>

### assets.Sukuk ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing a Sukuk

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.Sukuk_new"></a>

#### new Sukuk(params)
Construct a new Sukuk instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Sukuk creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Sukuk's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Sukuk __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Sukuk&quot;</code> | Class of the Sukuk (a subclass of Sukuk may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Sukuk. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Auto-set to `true` __(read-only)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Sukuk's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Sukuk |
| [params.countryId] | <code>string</code> |  | ID of Sukuk's country |
| [params.venueId] | <code>string</code> |  | ID of Sukuk's venue if applicable |
| [params.currency] | <code>string</code> |  | Sukuk currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Maturity date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Sukuk |
| [params.displayName] | <code>string</code> |  | Display name of the Sukuk |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Sukuk |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Sukuk |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Sukuk |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Sukuk. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Sukuk |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Sukuk |
| [params.createdTime] | <code>date</code> |  | Time that the Sukuk was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Sukuk was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.Synthetic"></a>

### assets.Synthetic ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing a Synthetic

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.Synthetic_new"></a>

#### new Synthetic(params)
Construct a new Synthetic instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Synthetic creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Synthetic's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Asset __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Synthetic&quot;</code> | Class of the Synthetic (a subclass of Synthetic may define its own assetClass) |
| [params.assetType] | <code>string</code> |  | Type of the Synthetic. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Whether the Synthetic is fungible __(required)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Synthetic's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Synthetic |
| [params.countryId] | <code>string</code> |  | ID of Synthetic's country |
| [params.venueId] | <code>string</code> |  | ID of Synthetic's venue if applicable |
| [params.currency] | <code>string</code> |  | Synthetic currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Maturity date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Synthetic |
| [params.displayName] | <code>string</code> |  | Display name of the Synthetic |
| [params.rollPrice] | <code>boolean</code> | <code>true</code> | Whether to roll the price for the Synthetic |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Synthetic |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Synthetic |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Synthetic |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Synthetic |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Synthetic |
| [params.createdTime] | <code>date</code> |  | Time that the Synthetic was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Synthetic was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.SyntheticFromBook"></a>

### assets.SyntheticFromBook ⇐ <code>[Synthetic](#module_assets.Synthetic)</code>
Class representing a Synthetic From Book. This is an Asset whose value is based on the value of the assets in a referenced Book

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Synthetic](#module_assets.Synthetic)</code>  
<a name="new_module_assets.SyntheticFromBook_new"></a>

#### new SyntheticFromBook(params)
Construct a new Synthetic From Book instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | SyntheticFromBook creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Synthetic's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Synthetic __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Synthetic&quot;</code> | Auto-set to `Synthetic` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Synthetic. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| params.fungible | <code>boolean</code> | <code>true</code> | Whether this Synthetic is fungible __(required)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Synthetic's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Synthetic |
| [params.countryId] | <code>string</code> |  | ID of Synthetic's country |
| [params.venueId] | <code>string</code> |  | ID of Synthetic's venue if applicable |
| [params.currency] | <code>string</code> |  | Synthetic currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Maturity date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Synthetic |
| [params.displayName] | <code>string</code> |  | Display name of the Synthetic |
| [params.rollPrice] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| params.bookId | <code>string</code> |  | Underlying Book ID __(required)__ |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Synthetic |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Synthetic |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Synthetic. * The AMaaS Reference is auto-created and populated |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Synthetic |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Synthetic |
| [params.createdTime] | <code>date</code> |  | Time that the Synthetic was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Synthetic was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_assets.SyntheticMultiLeg"></a>

### assets.SyntheticMultiLeg ⇐ <code>[Synthetic](#module_assets.Synthetic)</code>
Class representing a Multi-Leg Synthetic. This is an Asset which takes multiple assets as 'legs'. The value of the entire structure is equal to the sum of the legs

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Synthetic](#module_assets.Synthetic)</code>  
<a name="new_module_assets.SyntheticMultiLeg_new"></a>

#### new SyntheticMultiLeg(params)
Construct a new Multi-Leg Synthetic instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | SyntheticMultiLeg creation options: |
| params.assetManagerId | <code>number</code> |  | ID of Synthetic's Asset Manager __(required)__ |
| params.assetId | <code>number</code> |  | ID of the Synthetic __(required)__ |
| [params.assetClass] | <code>string</code> | <code>&quot;Synthetic&quot;</code> | Auto-set to `Synthetic` __(read-only)__ |
| [params.assetType] | <code>string</code> |  | Type of the Synthetic. Auto-set based on the class or subclass constructor |
| [params.assetTypeDisplay] | <code>string</code> |  | Auto-set to the spaced class name (e.g. `Listed Derivative` for `ListedDerivative()`) |
| [params.fungible] | <code>boolean</code> | <code>true</code> | Whether this Asset is fungible __(required)__ |
| [params.assetIssuerId] | <code>string</code> |  | ID of the Synthetic's issuer |
| [params.assetStatus] | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Synthetic |
| [params.countryId] | <code>string</code> |  | ID of Synthetic's country |
| [params.venueId] | <code>string</code> |  | ID of Synthetic's venue if applicable |
| [params.currency] | <code>string</code> |  | Synthetic currency (e.g. USD, SGD) |
| [params.issueDate] | <code>string</code> | <code>&quot;0001-01-01&quot;</code> | Issue date if applicable (YYYY-MM-DD) |
| [params.maturityDate] | <code>string</code> | <code>&quot;9999-12-31&quot;</code> | Maturity date if applicable (YYYY-MM-DD) |
| [params.description] | <code>string</code> |  | Description of the Synthetic |
| [params.displayName] | <code>string</code> |  | Display name of the Synthetic |
| [params.rollPrice] | <code>boolean</code> | <code>false</code> | Auto-set to `false` __(read-only)__ |
| [params.clientId] | <code>string</code> |  | ID of the associated client |
| params.legs | <code>array</code> |  | Legs of the Synthetic. Array of objects of the form { assetId: `string`, quantity: `Decimal` } __(required)__ |
| [params.comments] | <code>object</code> |  | Object of Comments attached to the Synthetic |
| [params.links] | <code>object</code> |  | Object of array of Links attached to the Synthetic |
| [params.references] | <code>object</code> | <code>{ AMaaS: Reference() }</code> | Object of References associated with the Synthetic |
| [params.createdBy] | <code>string</code> |  | ID of the user that created the Synthetic |
| [params.updatedBy] | <code>string</code> |  | ID of the user that updated the Synthetic |
| [params.createdTime] | <code>date</code> |  | Time that the Synthetic was created |
| [params.updatedTime] | <code>date</code> |  | Time that the Synthetic was updated |
| [params.version] | <code>number</code> |  | Version number |

<a name="module_books"></a>

## books
Classes for the Books Service


* [books](#module_books)
    * [.Book](#module_books.Book) ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
        * [new Book(params)](#new_module_books.Book_new)

<a name="module_books.Book"></a>

### books.Book ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
Class representing a Book

**Kind**: static class of <code>[books](#module_books)</code>  
**Extends:** <code>[AMaaSModel](#module_core.AMaaSModel)</code>  
<a name="new_module_books.Book_new"></a>

#### new Book(params)
Construct a new Book object


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Book creation options |
| params.assetManagerId | <code>integer</code> | ID of Book's Asset Manager |
| params.bookId | <code>string</code> | ID of this Book |
| params.bookType | <code>string</code> | Book Type |
| params.bookStatus | <code>string</code> | status of Book (e.g. Active, Retired, Superseded) |
| params.ownerId | <code>integer</code> | ID of the owner of the Book (e.g. the Trader who is responsible for the Book) |
| params.partyId | <code>integer</code> | ID of the party of which the activity being tracked belongs (e.g. Registered fund or HNWI) |
| params.closeTime | <code>string</code> | Book close time. This is stored as local time, to be referenced against timezone |
| params.timezone | <code>string</code> | Book's timezone (use this to determine absolute close time) |
| params.baseCurrency | <code>string</code> | Base currency for the Book |
| params.businessUnit | <code>string</code> | A business unit to associate with the Book (e.g. Emerging Markets, Equities) |
| params.description | <code>string</code> | Description of the book |
| params.positions | <code>Array</code> | Array of objects [{asset_id: string, quantity: number}] |
| params.createdBy | <code>string</code> | ID of the user that created this object (required if creating a new Book) |
| params.updatedBy | <code>string</code> | ID of the user that updated this object (use if amending existing Book) |
| params.createdTime | <code>date</code> | Time that the Book was created (required if creating new Book) |
| params.updatedTime | <code>date</code> | Time that the Book was updated (required if amending existing Book) |
| params.version | <code>number</code> | Version number of the Book |

<a name="module_corporateActions"></a>

## corporateActions
Classes for the CorporateActions Service


* [corporateActions](#module_corporateActions)
    * [.CorporateAction](#module_corporateActions.CorporateAction) ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
    * [.Dividend](#module_corporateActions.Dividend) ⇐ <code>module:coporateActions.CorporateAction</code>
    * [.Notification](#module_corporateActions.Notification) ⇐ <code>[CorporateAction](#module_corporateActions.CorporateAction)</code>
    * [.Split](#module_corporateActions.Split) ⇐ <code>[CorporateAction](#module_corporateActions.CorporateAction)</code>

<a name="module_corporateActions.CorporateAction"></a>

### corporateActions.CorporateAction ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
Class representing a Corporate Actions

**Kind**: static class of <code>[corporateActions](#module_corporateActions)</code>  
**Extends:** <code>[AMaaSModel](#module_core.AMaaSModel)</code>  
<a name="module_corporateActions.Dividend"></a>

### corporateActions.Dividend ⇐ <code>module:coporateActions.CorporateAction</code>
Class representing a Dividend

**Kind**: static class of <code>[corporateActions](#module_corporateActions)</code>  
**Extends:** <code>module:coporateActions.CorporateAction</code>  
<a name="module_corporateActions.Notification"></a>

### corporateActions.Notification ⇐ <code>[CorporateAction](#module_corporateActions.CorporateAction)</code>
Class representing a Notification

**Kind**: static class of <code>[corporateActions](#module_corporateActions)</code>  
**Extends:** <code>[CorporateAction](#module_corporateActions.CorporateAction)</code>  
<a name="module_corporateActions.Split"></a>

### corporateActions.Split ⇐ <code>[CorporateAction](#module_corporateActions.CorporateAction)</code>
Class representing a Split

**Kind**: static class of <code>[corporateActions](#module_corporateActions)</code>  
**Extends:** <code>[CorporateAction](#module_corporateActions.CorporateAction)</code>  
<a name="module_parties"></a>

## parties
Classes for the Parties service


* [parties](#module_parties)
    * [.AssetManager](#module_parties.AssetManager) ⇐ <code>[Company](#module_parties.Company)</code>
        * [new AssetManager(params, (object))](#new_module_parties.AssetManager_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.Broker](#module_parties.Broker) ⇐ <code>[Company](#module_parties.Company)</code>
        * [new Broker(params, (object))](#new_module_parties.Broker_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.Address](#module_parties.Address) ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
        * [new Address(params)](#new_module_parties.Address_new)
    * [.Email](#module_parties.Email) ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
        * [new Email(params)](#new_module_parties.Email_new)
    * [.Company](#module_parties.Company) ⇐ <code>[Organisation](#module_parties.Organisation)</code>
        * [new Company(params, (object))](#new_module_parties.Company_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.Exchange](#module_parties.Exchange) ⇐ <code>[Company](#module_parties.Company)</code>
        * [new Exchange(params, (object))](#new_module_parties.Exchange_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.Fund](#module_parties.Fund) ⇐ <code>[Company](#module_parties.Company)</code>
        * [new Fund(params, (object))](#new_module_parties.Fund_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.GovernmentAgency](#module_parties.GovernmentAgency) ⇐ <code>[Organisation](#module_parties.Organisation)</code>
        * [new GovernmentAgency(params, (object))](#new_module_parties.GovernmentAgency_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.Individual](#module_parties.Individual) ⇐ <code>[Party](#module_parties.Party)</code>
        * [new Individual(params, (object))](#new_module_parties.Individual_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.Organisation](#module_parties.Organisation) ⇐ <code>[Party](#module_parties.Party)</code>
        * [new Organisation(params, (object))](#new_module_parties.Organisation_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.Party](#module_parties.Party) ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
        * [new Party(params, (object))](#new_module_parties.Party_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)
    * [.SubFund](#module_parties.SubFund) ⇐ <code>[Party](#module_parties.Party)</code>
        * [new SubFund(params, (object))](#new_module_parties.SubFund_new)
        * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="module_parties.AssetManager"></a>

### parties.AssetManager ⇐ <code>[Company](#module_parties.Company)</code>
Class representing an Asset Manager

**Kind**: static class of <code>[parties](#module_parties)</code>  
**Extends:** <code>[Company](#module_parties.Company)</code>  

* [.AssetManager](#module_parties.AssetManager) ⇐ <code>[Company](#module_parties.Company)</code>
    * [new AssetManager(params, (object))](#new_module_parties.AssetManager_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.AssetManager_new"></a>

#### new AssetManager(params, (object))
Construct a new Asset Manager instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Asset Manager creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Asset Manager |
| params.partyId | <code>string</code> |  | Party ID of the Asset Manager |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Asset Manager (e.g. 'Active') |
| params.baseCurrency | <code>string</code> |  | Base Currency of the Asset Manager (e.g. SGD, USD) |
| params.description | <code>string</code> |  | Description of the Asset Manager |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Asset Manager |
| (object) |  |  | params.emails - Object of Emails associated with this Asset Manager |
| params.references | <code>object</code> |  | Object of References associated with this Asset Manager |
| params.comments | <code>object</code> |  | Object of Comments associated with the Asset Manager |
| params.links | <code>object</code> |  | Object of Links associated with the Asset Manager |
| params.createdBy | <code>string</code> |  | ID of the user that created the Asset Manager |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Asset Manager |
| params.createdTime | <code>date</code> |  | Time that the Asset Manager was created |
| params.updatedTime | <code>date</code> |  | Time that the Asset Manager was updated |
| params.version | <code>number</code> |  | Version number of the Asset Manager |

<a name="module_parties.Party+upsertAddress"></a>

#### assetManager.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[AssetManager](#module_parties.AssetManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### assetManager.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[AssetManager](#module_parties.AssetManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.Broker"></a>

### parties.Broker ⇐ <code>[Company](#module_parties.Company)</code>
Class representing a Broker

**Kind**: static class of <code>[parties](#module_parties)</code>  
**Extends:** <code>[Company](#module_parties.Company)</code>  

* [.Broker](#module_parties.Broker) ⇐ <code>[Company](#module_parties.Company)</code>
    * [new Broker(params, (object))](#new_module_parties.Broker_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.Broker_new"></a>

#### new Broker(params, (object))
Construct a new Broker instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Broker creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Broker |
| params.partyId | <code>string</code> |  | Party ID of the Broker |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Broker (e.g. 'Active') |
| params.baseCurrency | <code>string</code> |  | Base Currency of the Broker (e.g. SGD, USD) |
| params.description | <code>string</code> |  | Description of the Broker |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Broker |
| (object) |  |  | params.emails - Object of Emails associated with this Broker |
| params.references | <code>object</code> |  | Object of References associated with this Broker |
| params.comments | <code>object</code> |  | Object of Comments associated with the Broker |
| params.links | <code>object</code> |  | Object of Links associated with the Broker |
| params.createdBy | <code>string</code> |  | ID of the user that created the Broker |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Broker |
| params.createdTime | <code>date</code> |  | Time that the Broker was created |
| params.updatedTime | <code>date</code> |  | Time that the Broker was updated |
| params.version | <code>number</code> |  | Version number of the Broker |

<a name="module_parties.Party+upsertAddress"></a>

#### broker.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Broker](#module_parties.Broker)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### broker.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Broker](#module_parties.Broker)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.Address"></a>

### parties.Address ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
Class representing an Address

**Kind**: static class of <code>[parties](#module_parties)</code>  
**Extends:** <code>[AMaaSModel](#module_core.AMaaSModel)</code>  
<a name="new_module_parties.Address_new"></a>

#### new Address(params)
Construct a new Address instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Address creation options |
| params.addressPrimary | <code>bool</code> | Flag for whether Address is primary for its owner |
| params.lineOne | <code>string</code> | First line of the Address |
| params.lineTwo | <code>string</code> | Second line of the Address |
| params.city | <code>string</code> | City of the Address |
| params.region | <code>string</code> | Region of the Address |
| params.postalCode | <code>string</code> | Postal code of the Address |
| params.countryId | <code>string</code> | Country of the Address |
| params.active | <code>bool</code> | Whether this Address is active for its owner |
| params.createdBy | <code>string</code> | ID of the user that created the Address |
| params.updatedBy | <code>string</code> | ID of the user that updated the Address |
| params.createdTime | <code>date</code> | Time that the Address was created |
| params.updatedTime | <code>date</code> | Time that the Address was updated |
| params.version | <code>number</code> | Version number of the Address |

<a name="module_parties.Email"></a>

### parties.Email ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
Class representing an Email

**Kind**: static class of <code>[parties](#module_parties)</code>  
**Extends:** <code>[AMaaSModel](#module_core.AMaaSModel)</code>  
<a name="new_module_parties.Email_new"></a>

#### new Email(params)
Construct a new Email object


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Email creation options |
| params.email | <code>string</code> | Email address |
| params.emailPrimary | <code>bool</code> | Whether the Email is primary for its owner |
| params.active | <code>bool</code> | Whether the Email is active for its owner |
| params.createdBy | <code>string</code> | ID of the user that created the Email (required if creating a new Email) |
| params.updatedBy | <code>string</code> | ID of the user that updated the Email (use if amending existing Email) |
| params.createdTime | <code>date</code> | Time that the Email was created (required if creating new Email) |
| params.updatedTime | <code>date</code> | Time that the Email was updated (required if amending existing Email) |
| params.version | <code>number</code> | Version number of the Email |

<a name="module_parties.Company"></a>

### parties.Company ⇐ <code>[Organisation](#module_parties.Organisation)</code>
Class representing a Company

**Kind**: static class of <code>[parties](#module_parties)</code>  
**Extends:** <code>[Organisation](#module_parties.Organisation)</code>  

* [.Company](#module_parties.Company) ⇐ <code>[Organisation](#module_parties.Organisation)</code>
    * [new Company(params, (object))](#new_module_parties.Company_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.Company_new"></a>

#### new Company(params, (object))
Construct a new Company instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Company creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Company |
| params.partyId | <code>string</code> |  | Party ID of the Company |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Company (e.g. 'Active') |
| params.partyClass | <code>string</code> | <code>&quot;Company&quot;</code> | Class of the Company |
| params.baseCurrency | <code>string</code> |  | Base Currency of the Company (e.g. SGD, USD) |
| params.description | <code>string</code> |  | Description of the Company |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Company |
| (object) |  |  | params.emails - Object of Emails associated with this Company |
| params.references | <code>object</code> |  | Object of References associated with this Company |
| params.comments | <code>object</code> |  | Object of Comments associated with the Company |
| params.links | <code>object</code> |  | Object of Links associated with the Company |
| params.createdBy | <code>string</code> |  | ID of the user that created the Company |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Company |
| params.createdTime | <code>date</code> |  | Time that the Company was created |
| params.updatedTime | <code>date</code> |  | Time that the Company was updated |
| params.version | <code>number</code> |  | Version number of the Company |

<a name="module_parties.Party+upsertAddress"></a>

#### company.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Company](#module_parties.Company)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### company.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Company](#module_parties.Company)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.Exchange"></a>

### parties.Exchange ⇐ <code>[Company](#module_parties.Company)</code>
Class representing an Exchange

**Kind**: static class of <code>[parties](#module_parties)</code>  
**Extends:** <code>[Company](#module_parties.Company)</code>  

* [.Exchange](#module_parties.Exchange) ⇐ <code>[Company](#module_parties.Company)</code>
    * [new Exchange(params, (object))](#new_module_parties.Exchange_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.Exchange_new"></a>

#### new Exchange(params, (object))
Construct a new Exchange instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Exchange creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Exchange |
| params.partyId | <code>string</code> |  | Party ID of the Exchange |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Exchange (e.g. 'Active') |
| params.baseCurrency | <code>string</code> |  | Base Currency of the Exchange (e.g. SGD, USD) |
| params.description | <code>string</code> |  | Description of the Exchange |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Exchange |
| (object) |  |  | params.emails - Object of Emails associated with this Exchange |
| params.references | <code>object</code> |  | Object of References associated with this Exchange |
| params.comments | <code>object</code> |  | Object of Comments associated with the Exchange |
| params.links | <code>object</code> |  | Object of Links associated with the Exchange |
| params.createdBy | <code>string</code> |  | ID of the user that created the Exchange |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Exchange |
| params.createdTime | <code>date</code> |  | Time that the Exchange was created |
| params.updatedTime | <code>date</code> |  | Time that the Exchange was updated |
| params.version | <code>number</code> |  | Version number of the Exchange |

<a name="module_parties.Party+upsertAddress"></a>

#### exchange.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Exchange](#module_parties.Exchange)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### exchange.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Exchange](#module_parties.Exchange)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.Fund"></a>

### parties.Fund ⇐ <code>[Company](#module_parties.Company)</code>
Class representing a Fund

**Kind**: static class of <code>[parties](#module_parties)</code>  
**Extends:** <code>[Company](#module_parties.Company)</code>  

* [.Fund](#module_parties.Fund) ⇐ <code>[Company](#module_parties.Company)</code>
    * [new Fund(params, (object))](#new_module_parties.Fund_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.Fund_new"></a>

#### new Fund(params, (object))
Construct a new Fund instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Fund creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Fund |
| params.partyId | <code>string</code> |  | Party ID of the Fund |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Fund (e.g. 'Active') |
| params.baseCurrency | <code>string</code> |  | Base Currency of the Fund (e.g. SGD, USD) |
| params.description | <code>string</code> |  | Description of the Fund |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Fund |
| (object) |  |  | params.emails - Object of Emails associated with this Fund |
| params.references | <code>object</code> |  | Object of References associated with this Fund |
| params.comments | <code>object</code> |  | Object of Comments associated with the Fund |
| params.links | <code>object</code> |  | Object of Links associated with the Fund |
| params.createdBy | <code>string</code> |  | ID of the user that created the Fund |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Fund |
| params.createdTime | <code>date</code> |  | Time that the Fund was created |
| params.updatedTime | <code>date</code> |  | Time that the Fund was updated |
| params.version | <code>number</code> |  | Version number of the Fund |

<a name="module_parties.Party+upsertAddress"></a>

#### fund.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Fund](#module_parties.Fund)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### fund.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Fund](#module_parties.Fund)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.GovernmentAgency"></a>

### parties.GovernmentAgency ⇐ <code>[Organisation](#module_parties.Organisation)</code>
Class representing a Government Agency

**Kind**: static class of <code>[parties](#module_parties)</code>  
**Extends:** <code>[Organisation](#module_parties.Organisation)</code>  

* [.GovernmentAgency](#module_parties.GovernmentAgency) ⇐ <code>[Organisation](#module_parties.Organisation)</code>
    * [new GovernmentAgency(params, (object))](#new_module_parties.GovernmentAgency_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.GovernmentAgency_new"></a>

#### new GovernmentAgency(params, (object))
Construct a new Government Agency instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Government Agency creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Government Agency |
| params.partyId | <code>string</code> |  | Party ID of the Government Agency |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Government Agency (e.g. 'Active') |
| params.partyClass | <code>string</code> | <code>&quot;Organisation&quot;</code> | Class of the Government Agency |
| params.baseCurrency | <code>string</code> |  | Base Currency of the Government Agency (e.g. SGD, USD) |
| params.description | <code>string</code> |  | Description of the Government Agency |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Government Agency |
| (object) |  |  | params.emails - Object of Emails associated with this Government Agency |
| params.references | <code>object</code> |  | Object of References associated with this Government Agency |
| params.comments | <code>object</code> |  | Object of Comments associated with the Government Agency |
| params.links | <code>object</code> |  | Object of Links associated with the Government Agency |
| params.createdBy | <code>string</code> |  | ID of the user that created the Government Agency |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Government Agency |
| params.createdTime | <code>date</code> |  | Time that the Government Agency was created |
| params.updatedTime | <code>date</code> |  | Time that the Government Agency was updated |
| params.version | <code>number</code> |  | Version number of the Government Agency |

<a name="module_parties.Party+upsertAddress"></a>

#### governmentAgency.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[GovernmentAgency](#module_parties.GovernmentAgency)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### governmentAgency.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[GovernmentAgency](#module_parties.GovernmentAgency)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.Individual"></a>

### parties.Individual ⇐ <code>[Party](#module_parties.Party)</code>
Class representing an Individual

**Kind**: static class of <code>[parties](#module_parties)</code>  
**Extends:** <code>[Party](#module_parties.Party)</code>  

* [.Individual](#module_parties.Individual) ⇐ <code>[Party](#module_parties.Party)</code>
    * [new Individual(params, (object))](#new_module_parties.Individual_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.Individual_new"></a>

#### new Individual(params, (object))
Construct a new Individual instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Individual creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Individual |
| params.partyId | <code>string</code> |  | Party ID of the Individual |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Individual (e.g. 'Active') |
| params.partyClass | <code>string</code> | <code>&quot;Individual&quot;</code> | Class of the Individual |
| params.baseCurrency | <code>string</code> |  | Base Currency of the Individual (e.g. SGD, USD) |
| params.description | <code>string</code> |  | Description of the Individual |
| params.givenNames | <code>string</code> |  | Individual's given names |
| params.surname | <code>string</code> |  | Individual's surname |
| params.dateOfBirth | <code>string</code> |  | Individual's date of birth (YYYY-MM-DD) |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Individual |
| (object) |  |  | params.emails - Object of Emails associated with this Individual |
| params.references | <code>object</code> |  | Object of References associated with this Individual |
| params.comments | <code>object</code> |  | Object of Comments associated with this Individual |
| params.links | <code>object</code> |  | Object of Links associated with this Individual |
| params.createdBy | <code>string</code> |  | ID of the user that created the Individual |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Individual |
| params.createdTime | <code>date</code> |  | Time that the Individual was created |
| params.updatedTime | <code>date</code> |  | Time that the Individual was updated |
| params.version | <code>number</code> |  | Version number of the Individual |

<a name="module_parties.Party+upsertAddress"></a>

#### individual.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Individual](#module_parties.Individual)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### individual.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Individual](#module_parties.Individual)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.Organisation"></a>

### parties.Organisation ⇐ <code>[Party](#module_parties.Party)</code>
Class representing an Organisation

**Kind**: static class of <code>[parties](#module_parties)</code>  
**Extends:** <code>[Party](#module_parties.Party)</code>  

* [.Organisation](#module_parties.Organisation) ⇐ <code>[Party](#module_parties.Party)</code>
    * [new Organisation(params, (object))](#new_module_parties.Organisation_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.Organisation_new"></a>

#### new Organisation(params, (object))
Construct a new Organisation instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Organisation creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Organisation |
| params.partyId | <code>string</code> |  | Party ID of the Organisation |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Organisation (e.g. 'Active') |
| params.partyClass | <code>string</code> | <code>&quot;Organisation&quot;</code> | Class of the Organisation |
| params.baseCurrency | <code>string</code> |  | Base Currency of the Organisation (e.g. SGD, USD) |
| params.description | <code>string</code> |  | Description of the Organisation |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Organisation |
| (object) |  |  | params.emails - Object of Emails associated with this Organisation |
| params.references | <code>object</code> |  | Object of References associated with this Organisation |
| params.comments | <code>object</code> |  | Object of Comments associated with the Organisation |
| params.links | <code>object</code> |  | Object of Links associated with the Organisation |
| params.createdBy | <code>string</code> |  | ID of the user that created the Organisation |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Organisation |
| params.createdTime | <code>date</code> |  | Time that the Organisation was created |
| params.updatedTime | <code>date</code> |  | Time that the Organisation was updated |
| params.version | <code>number</code> |  | Version number of the Organisation |

<a name="module_parties.Party+upsertAddress"></a>

#### organisation.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Organisation](#module_parties.Organisation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### organisation.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Organisation](#module_parties.Organisation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.Party"></a>

### parties.Party ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
Class representing a Party

**Kind**: static class of <code>[parties](#module_parties)</code>  
**Extends:** <code>[AMaaSModel](#module_core.AMaaSModel)</code>  

* [.Party](#module_parties.Party) ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
    * [new Party(params, (object))](#new_module_parties.Party_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.Party_new"></a>

#### new Party(params, (object))
Construct a new Party instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Party creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Party |
| params.partyId | <code>string</code> |  | Party ID of the Party |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Party (e.g. 'Active') |
| params.partyClass | <code>string</code> | <code>&quot;Party&quot;</code> | Class of the Party |
| params.baseCurrency | <code>string</code> |  | Base Currency for the Party (e.g. SGD, USD) |
| params.description | <code>string</code> |  | Description of the Party |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Party |
| (object) |  |  | params.emails - Object of Emails associated with this Party |
| params.references | <code>object</code> |  | Object of References associated with this Party |
| params.comments | <code>object</code> |  | Object of Comments associated with this Party |
| params.links | <code>object</code> |  | Object of Links associated with this Party |
| params.createdBy | <code>string</code> |  | ID of the user that created the Party |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Party |
| params.createdTime | <code>date</code> |  | Time that the Party was created |
| params.updatedTime | <code>date</code> |  | Time that the Party was updated |
| params.version | <code>number</code> |  | Version number of the Party |

<a name="module_parties.Party+upsertAddress"></a>

#### party.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Party](#module_parties.Party)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### party.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Party](#module_parties.Party)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_parties.SubFund"></a>

### parties.SubFund ⇐ <code>[Party](#module_parties.Party)</code>
Class representing a Celled Fund Structure (SubFund)

**Kind**: static class of <code>[parties](#module_parties)</code>  
**Extends:** <code>[Party](#module_parties.Party)</code>  

* [.SubFund](#module_parties.SubFund) ⇐ <code>[Party](#module_parties.Party)</code>
    * [new SubFund(params, (object))](#new_module_parties.SubFund_new)
    * [.upsertAddress(type, address)](#module_parties.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_parties.Party+upsertEmail)

<a name="new_module_parties.SubFund_new"></a>

#### new SubFund(params, (object))
Construct a new SubFund instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | SubFund creation options: |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the SubFund |
| params.partyId | <code>string</code> |  | Party ID of the SubFund |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the SubFund (e.g. 'Active') |
| params.baseCurrency | <code>string</code> |  | Base Currency of the SubFund (e.g. SGD, USD) |
| params.description | <code>string</code> |  | Description of the SubFund |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this SubFund |
| (object) |  |  | params.emails - Object of Emails associated with this SubFund |
| params.references | <code>object</code> |  | Object of References associated with this SubFund |
| params.comments | <code>object</code> |  | Object of Comments associated with the SubFund |
| params.links | <code>object</code> |  | Object of Links associated with the SubFund |
| params.createdBy | <code>string</code> |  | ID of the user that created the SubFund |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the SubFund |
| params.createdTime | <code>date</code> |  | Time that the SubFund was created |
| params.updatedTime | <code>date</code> |  | Time that the SubFund was updated |
| params.version | <code>number</code> |  | Version number of the SubFund |

<a name="module_parties.Party+upsertAddress"></a>

#### subFund.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[SubFund](#module_parties.SubFund)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_parties.Party+upsertEmail"></a>

#### subFund.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[SubFund](#module_parties.SubFund)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_relationships"></a>

## relationships
Classes and API methods for the Relationships service (not ready yet)


* [relationships](#module_relationships)
    * [.Relationship](#module_relationships.Relationship) ⇐ <code>module:Core.AMaaSModel</code>
        * [new Relationship(params)](#new_module_relationships.Relationship_new)

<a name="module_relationships.Relationship"></a>

### relationships.Relationship ⇐ <code>module:Core.AMaaSModel</code>
Class representing a Relationship

**Kind**: static class of <code>[relationships](#module_relationships)</code>  
**Extends:** <code>module:Core.AMaaSModel</code>  
<a name="new_module_relationships.Relationship_new"></a>

#### new Relationship(params)
Construct a new Relationship instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Relationship creation options |
| params.assetManagerId | <code>number</code> | ID of the Asset Manager who owns this Relationship |
| params.relationshipId | <code>number</code> | ID of the Relationship (to uniquely identity Relationship amongst other Relationships between the same parties) |
| params.relatedId | <code>number</code> | ID of the Asset Manager to whom this Relationship connects |
| params.relationshipType | <code>string</code> | The type of Relationship between these Asset Managers |
| params.clientId | <code>string</code> | The client ID that owns this Relationship |
| params.relationshipStatus | <code>string</code> | The status of the Relationship |
| params.createdBy | <code>string</code> | ID of the user that created the Relationship |
| params.updatedBy | <code>string</code> | ID of the user that updated the Relationship |
| params.createdTime | <code>date</code> | Time that the Relationship was created |
| params.updatedTime | <code>date</code> | Time that the Relationship was updated |
| params.version | <code>number</code> | Version number of the Relationship |

<a name="module_transactions"></a>

## transactions
Classes for the Transactions service. (Not ready yet)


* [transactions](#module_transactions)
    * [.PartyChild](#module_transactions.PartyChild) ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
        * [new PartyChild(params)](#new_module_transactions.PartyChild_new)
    * [.Transaction](#module_transactions.Transaction) ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
        * [new Transaction(params)](#new_module_transactions.Transaction_new)

<a name="module_transactions.PartyChild"></a>

### transactions.PartyChild ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
Class representing a Party (a Transaction children type)

**Kind**: static class of <code>[transactions](#module_transactions)</code>  
**Extends:** <code>[AMaaSModel](#module_core.AMaaSModel)</code>  
<a name="new_module_transactions.PartyChild_new"></a>

#### new PartyChild(params)
Construct a new PartyChild object


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | PartyChild creation options |
| params.partyId | <code>string</code> | ID of the linked Party |
| params.active | <code>bool</code> | Whether this Party as a child is active (Note: NOT whether the linked Party itself is active) |
| params.createdBy | <code>string</code> | ID of the user that created this object (required if creating a new linked Party) |
| params.updatedBy | <code>string</code> | ID of the user that updated this object (use if amending existing linked Party) |
| params.createdTime | <code>date</code> | Time that the linked Party was created (required if creating new linked Party) |
| params.updatedTime | <code>date</code> | Time that the linked Party was updated (required if amending existing linked Party) |
| params.version | <code>number</code> | Version number of the linked Party |

<a name="module_transactions.Transaction"></a>

### transactions.Transaction ⇐ <code>[AMaaSModel](#module_core.AMaaSModel)</code>
Class representing a Transaction

**Kind**: static class of <code>[transactions](#module_transactions)</code>  
**Extends:** <code>[AMaaSModel](#module_core.AMaaSModel)</code>  
<a name="new_module_transactions.Transaction_new"></a>

#### new Transaction(params)
Construct a new Transaction object


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Transaction creation options |
| params.assetManagerId | <code>string</code> | ID of the Transaction's Asset Manager |
| params.assetBookId | <code>string</code> | ID of the Transaction's book |
| params.counterpartyBookId | <code>string</code> | ID of the counterparty to this Transaction |
| params.transactionAction | <code>string</code> | Transaction action e.g. BUY, SELL etc. |
| params.assetId | <code>string</code> | ID of the asset being transacted |
| params.quantity | <code>number</code> | Quantity being transacted |
| params.transactionDate | <code>date</code> | Date of transactionDate |
| params.settlementDate | <code>date</code> | Date of settlement e.g. T+2 where T = transactionDate |
| params.price | <code>decimal</code> | price of Asset being transacted |
| params.transactionCurrency | <code>string</code> | Currency that the Transaction takes place in |
| params.settlementCurrency | <code>string</code> | Currency that the Transaction is settled in |
| params.asset | <code>\*</code> | * |
| params.executionTime | <code>date</code> | Time that the Transaction was executed |
| params.transactionType | <code>Asset</code> | Type of Transaction e.g. Trade, Allocation |
| params.transactionId | <code>string</code> | ID of the Transaction |
| params.transactionStatus | <code>\*</code> | * |
| params.charges | <code>object</code> | Object of all charges (Charge class) |
| params.codes | <code>object</code> | Object of all codes (Code class) |
| params.comments | <code>object</code> | Object of all comments (Comment class) |
| params.links | <code>object</code> | Object of all links (Link class) |
| params.parties | <code>object</code> | Object of all parties as a Transaction child (PartyChild class) |
| params.references | <code>object</code> | * |
| params.postings | <code>\*</code> | * |


## Contribution

If you would like to contribute, please fork the repo and send in a pull request.

## Support

For support with the SDKs, please raise issues on GitHub. The AMaaS team can be contacted at <support@amaas.com>. Customers who have purchased a support plan can find the contact details within AMaaS Admin.

## License

[Apache License](https://raw.githubusercontent.com/amaas-fintech/amaas-core-sdk-js/master/LICENSE)
