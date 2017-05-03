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


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset Manager creation options |
| params.assetManagerId | <code>number</code> | Asset Manager's ID |
| params.assetManagerType | <code>string</code> | Type of Asset Manager (e.g. Hedge Fund) |
| params.assetManagerStatus | <code>string</code> | Status of Asset Manager (e.g. Active) |
| params.clientId | <code>string</code> | ID of the associated client |
| params.partyId | <code>string</code> | ID of the associated party (associated party may be self) |
| params.defaultBookOwnerId | <code>string</code> | ID of the default owner for any books owned by this Asset Manager |
| params.defaultTimezone | <code>date</code> | Default timezone for any books owned by this Asset Manager |
| params.defaultBookCloseTime | <code>date</code> | Default book close time for any books owned by this Asset Manager |
| params.createdBy | <code>string</code> | ID of the user that created the Asset Manager |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset Manager |
| params.createdTime | <code>date</code> | Time that the Asset Manager was created |
| params.updatedTime | <code>date</code> | Time that the Asset Manager was updated |
| params.version | <code>number</code> | Version number of the Asset Manager |

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
    * [.CFD](#module_assets.CFD) ⇐ <code>[Derivative](#module_assets.Derivative)</code>
        * [new CFD(params)](#new_module_assets.CFD_new)
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
    * [.ForeignExchange](#module_assets.ForeignExchange) ⇐ <code>[FXBase](#module_assets.FXBase)</code>
        * [new ForeignExchange(params)](#new_module_assets.ForeignExchange_new)
    * [.FXBase](#module_assets.FXBase) ⇐ <code>[Asset](#module_assets.Asset)</code>
        * [new FXBase(params)](#new_module_assets.FXBase_new)
    * [.NonDeliverableForward](#module_assets.NonDeliverableForward) ⇐ <code>[Asset](#module_assets.Asset)</code>
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


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset (set in the Custom Asset class) |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.BondBase"></a>

### assets.BondBase ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing a Base Bond

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.BondBase_new"></a>

#### new BondBase(params)
Construct new Bond instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | BondBase creation options |
| params.assetManagerId | <code>string</code> | ID of Bond's Asset Manager |
| params.assetId | <code>string</code> | ID of asset |
| params.assetClass | <code>string</code> | Class of Asset. This should always be 'Bond' |
| params.fungible | <code>boolean</code> | Whether this Bond is fungible |
| params.assetIssuerId | <code>string</code> | ID of the Bond Issuer |
| params.assetStatus | <code>string</code> | Status of the Bond |
| params.countryId | <code>string</code> | ID of the Bond's origin country |
| params.venueId | <code>string</code> | ID of the Bond's venue |
| params.currency | <code>string</code> | Currency denomination of the Bond |
| params.issueDate | <code>string</code> | The date that the Bond was issued |
| params.maturityDate | <code>string</code> | Date of Bond's maturity |
| params.description | <code>string</code> | Description of the Bond |
| params.clientId | <code>string</code> | ID of the client |
| params.coupon | <code>number</code> | The Bond's coupon (represented as a fraction of 1 i.e. 0.05 = 5%) |
| params.par | <code>number</code> | The Bond's par |
| params.payFrequency | <code>string</code> | ??? |
| params.defaulted | <code>boolean</code> | Whether the issuer has defaulted |
| params.comments | <code>object</code> | Object of comments for the Bond. { name: string: comment: Comment } |
| params.links | <code>object</code> | Object of links for the Bond. { name: string: link: Link[] } |
| params.references | <code>object</code> | Object of references for the Bond |
| params.createdBy | <code>string</code> | ID of the user that created the Bond |
| params.updatedBy | <code>string</code> | ID of the user that updated the Bond |
| params.createdTime | <code>date</code> | Time that the Bond was created |
| params.updatedTime | <code>date</code> | Time that the Bond was updated |
| params.version | <code>number</code> | Version number of the Bond |

<a name="module_assets.BondCorporate"></a>

### assets.BondCorporate ⇐ <code>[BondBase](#module_assets.BondBase)</code>
Class representing a Corporate Bond

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[BondBase](#module_assets.BondBase)</code>  
<a name="new_module_assets.BondCorporate_new"></a>

#### new BondCorporate(params)
Construct new Corporate Bond instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | BondBase creation options |
| params.assetManagerId | <code>string</code> | ID of Bond's Asset Manager |
| params.assetId | <code>string</code> | ID of asset |
| params.assetClass | <code>string</code> | Class of Asset. This should always be 'Bond' |
| params.fungible | <code>boolean</code> | Whether this Bond is fungible |
| params.assetIssuerId | <code>string</code> | ID of the Bond Issuer |
| params.assetStatus | <code>string</code> | Status of the Bond |
| params.countryId | <code>string</code> | ID of the Bond's origin country |
| params.venueId | <code>string</code> | ID of the Bond's venue |
| params.currency | <code>string</code> | Currency denomination of the Bond |
| params.issueDate | <code>string</code> | The date that the Bond was issued |
| params.maturityDate | <code>string</code> | Date of Bond's maturity |
| params.description | <code>string</code> | Description of the Bond |
| params.clientId | <code>string</code> | ID of the client |
| params.coupon | <code>decimal</code> | The Bond's coupon (represented as a fraction of 1 i.e. 0.05 = 5%) |
| params.par | <code>decimal</code> | The Bond's par |
| params.payFrequency | <code>string</code> | ??? |
| params.defaulted | <code>boolean</code> | Whether the issuer has defaulted |
| params.comments | <code>object</code> | Object of comments for the Bond. { name: string: comment: Comment } |
| params.links | <code>object</code> | Object of links for the Bond. { name: string: link: Link[] } |
| params.references | <code>object</code> | Object of references for the Bond |
| params.createdBy | <code>string</code> | ID of the user that created the Bond |
| params.updatedBy | <code>string</code> | ID of the user that updated the Bond |
| params.createdTime | <code>date</code> | Time that the Bond was created |
| params.updatedTime | <code>date</code> | Time that the Bond was updated |
| params.version | <code>number</code> | Version number of the Bond |

<a name="module_assets.BondGovernment"></a>

### assets.BondGovernment ⇐ <code>[BondBase](#module_assets.BondBase)</code>
Class representing a Government Bond

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[BondBase](#module_assets.BondBase)</code>  
<a name="new_module_assets.BondGovernment_new"></a>

#### new BondGovernment(params)
Construct new Government Bond instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Bond creation options |
| params.assetManagerId | <code>string</code> | ID of Bond's Asset Manager |
| params.assetId | <code>string</code> | ID of asset |
| params.assetClass | <code>string</code> | Class of Asset. This should always be 'Bond' |
| params.fungible | <code>boolean</code> | Whether this Bond is fungible |
| params.assetIssuerId | <code>string</code> | ID of the Bond Issuer |
| params.assetStatus | <code>string</code> | Status of the Bond |
| params.countryId | <code>string</code> | ID of the Bond's origin country |
| params.venueId | <code>string</code> | ID of the Bond's venue |
| params.currency | <code>string</code> | Currency denomination of the Bond |
| params.issueDate | <code>string</code> | The date that the Bond was issued |
| params.maturityDate | <code>string</code> | Date of Bond's maturity |
| params.description | <code>string</code> | Description of the Bond |
| params.clientId | <code>string</code> | ID of the client |
| params.coupon | <code>decimal</code> | The Bond's coupon (represented as a fraction of 1 i.e. 0.05 = 5%) |
| params.par | <code>decimal</code> | The Bond's par |
| params.payFrequency | <code>string</code> | ??? |
| params.defaulted | <code>boolean</code> | Whether the issuer has defaulted |
| params.comments | <code>object</code> | Object of comments for the Bond. { name: string: comment: Comment } |
| params.links | <code>object</code> | Object of links for the Bond. { name: string: link: Link[] } |
| params.references | <code>object</code> | Object of references for the Bond |
| params.createdBy | <code>string</code> | ID of the user that created the Bond |
| params.updatedBy | <code>string</code> | ID of the user that updated the Bond |
| params.createdTime | <code>date</code> | Time that the Bond was created |
| params.updatedTime | <code>date</code> | Time that the Bond was updated |
| params.version | <code>number</code> | Version number of the Bond |

<a name="module_assets.BondMortgage"></a>

### assets.BondMortgage ⇐ <code>[BondBase](#module_assets.BondBase)</code>
Class representing a Mortgage Bond

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[BondBase](#module_assets.BondBase)</code>  
<a name="new_module_assets.BondMortgage_new"></a>

#### new BondMortgage(params)
Construct new Mortgage Bond instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Bond creation options |
| params.assetManagerId | <code>string</code> | ID of Bond's Asset Manager |
| params.assetId | <code>string</code> | ID of asset |
| params.assetClass | <code>string</code> | Class of Asset. This should always be 'Bond' |
| params.fungible | <code>boolean</code> | Whether this Bond is fungible |
| params.assetIssuerId | <code>string</code> | ID of the Bond Issuer |
| params.assetStatus | <code>string</code> | Status of the Bond |
| params.countryId | <code>string</code> | ID of the Bond's origin country |
| params.venueId | <code>string</code> | ID of the Bond's venue |
| params.currency | <code>string</code> | Currency denomination of the Bond |
| params.issueDate | <code>string</code> | The date that the Bond was issued |
| params.maturityDate | <code>string</code> | Date of Bond's maturity |
| params.description | <code>string</code> | Description of the Bond |
| params.clientId | <code>string</code> | ID of the client |
| params.coupon | <code>decimal</code> | The Bond's coupon (represented as a fraction of 1 i.e. 0.05 = 5%) |
| params.par | <code>decimal</code> | The Bond's par |
| params.payFrequency | <code>string</code> | ??? |
| params.defaulted | <code>boolean</code> | Whether the issuer has defaulted |
| params.comments | <code>object</code> | Object of comments for the Bond. { name: string: comment: Comment } |
| params.links | <code>object</code> | Object of links for the Bond. { name: string: link: Link[] } |
| params.references | <code>object</code> | Object of references for the Bond |
| params.createdBy | <code>string</code> | ID of the user that created the Bond |
| params.updatedBy | <code>string</code> | ID of the user that updated the Bond |
| params.createdTime | <code>date</code> | Time that the Bond was created |
| params.updatedTime | <code>date</code> | Time that the Bond was updated |
| params.version | <code>number</code> | Version number of the Bond |

<a name="module_assets.Currency"></a>

### assets.Currency ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing an Currency

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.Currency_new"></a>

#### new Currency(params)
Construct a new Currency instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Currency creation options |
| params.assetManagerId | <code>integer</code> | ID of Currency's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Currency (required) |
| params.assetClass | <code>string</code> | Class of the Currency |
| params.fungible | <code>bool</code> | Whether this Currency is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Currency's issuer |
| params.assetStatus | <code>string</code> | Status of the Currency (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Currency's country |
| params.venueId | <code>string</code> | ID of Currency's venue if applicable |
| params.currency | <code>string</code> | Currency currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Currency |
| params.clientId | <code>string</code> | ID of the client to which the Currency belongs |
| params.deliverable | <code>boolean</code> | Whether the Currency is deliverable |
| params.minorUnitPlaces | <code>number</code> | Decimal precision of Currency (e.g. 4 for JPY, 2 for USD) |
| params.comments | <code>object</code> | Object of Comments attached to the Currency |
| params.links | <code>object</code> | Object of array of Links attached to the Currency |
| params.references | <code>object</code> | Object of References associated with this Currency |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number of the Asset |

<a name="module_assets.CustomAsset"></a>

### assets.CustomAsset ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing an Custom Asset

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.CustomAsset_new"></a>

#### new CustomAsset(params)
Construct a new Custom Asset instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset (e.g. { size: 'Large', Flavour: 'Lime' }) |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number of the Asset |

<a name="module_assets.BondOption"></a>

### assets.BondOption ⇐ <code>[Derivative](#module_assets.Derivative)</code>
Class representing an Bond Option

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Derivative](#module_assets.Derivative)</code>  
<a name="new_module_assets.BondOption_new"></a>

#### new BondOption(params)
Construct a new Bond Option instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.premium | <code>number</code> | Premium of the Asset |
| params.optionStyle | <code>string</code> | Option style (American, Bermudan, European) |
| params.optionType | <code>string</code> | Option type (Put, Call) |
| params.strike | <code>number</code> | Strike price of the Option |
| params.underlyingAssetId | <code>string</code> | ID of the underlying Asset |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Bond Option |
| params.updatedBy | <code>string</code> | ID of the user that updated the Bond Option |
| params.createdTime | <code>date</code> | Time that the Bond Option was created |
| params.updatedTime | <code>date</code> | Time that the Bond Option was updated |
| params.version | <code>number</code> | Version number of the Bond Option |

<a name="module_assets.CFD"></a>

### assets.CFD ⇐ <code>[Derivative](#module_assets.Derivative)</code>
Class representing a CFD

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Derivative](#module_assets.Derivative)</code>  
<a name="new_module_assets.CFD_new"></a>

#### new CFD(params)
Construct a new CFD instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.premium | <code>number</code> | Premium of the Asset |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the CFD |
| params.updatedBy | <code>string</code> | ID of the user that updated the CFD |
| params.createdTime | <code>date</code> | Time that the CFD was created |
| params.updatedTime | <code>date</code> | Time that the CFD was updated |
| params.version | <code>number</code> | Version number of the CFD |

<a name="module_assets.Derivative"></a>

### assets.Derivative ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing an Derivative

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.Derivative_new"></a>

#### new Derivative(params)
Construct a new Derivative instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Derivative creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.premium | <code>number</code> | Premium of the Asset |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Derivative |
| params.updatedBy | <code>string</code> | ID of the user that updated the Derivative |
| params.createdTime | <code>date</code> | Time that the Derivative was created |
| params.updatedTime | <code>date</code> | Time that the Derivative was updated |
| params.version | <code>number</code> | Version number of the Derivative |

<a name="module_assets.Equity"></a>

### assets.Equity ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing an Equity

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.Equity_new"></a>

#### new Equity(params)
Construct a new Equity instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.shareClass | <code>string</code> | Share Class. Defaults to 'Common' |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Equity |
| params.updatedBy | <code>string</code> | ID of the user that updated the Equity |
| params.createdTime | <code>date</code> | Time that the Equity was created |
| params.updatedTime | <code>date</code> | Time that the Equity was updated |
| params.version | <code>number</code> | Version number of the Equity |

<a name="module_assets.ForeignExchangeOption"></a>

### assets.ForeignExchangeOption ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing an FX Option

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.ForeignExchangeOption_new"></a>

#### new ForeignExchangeOption(params)
Construct a new FX Option instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.optionStyle | <code>string</code> | Option style (American, Bermudan, European) |
| params.optionType | <code>string</code> | Option type (Put, Call) |
| params.strike | <code>number</code> | Strike price of the Option |
| params.underlyingAssetId | <code>string</code> | ID of the underlying Asset |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the FX Option |
| params.updatedBy | <code>string</code> | ID of the user that updated the FX Option |
| params.createdTime | <code>date</code> | Time that the FX Option was created |
| params.updatedTime | <code>date</code> | Time that the FX Option was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.ExchangeTradedFund"></a>

### assets.ExchangeTradedFund ⇐ <code>[Fund](#module_assets.Fund)</code>
Class representing an ETF

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Fund](#module_assets.Fund)</code>  
<a name="new_module_assets.ExchangeTradedFund_new"></a>

#### new ExchangeTradedFund(params)
Construct a new ETF instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.fundType | <code>string</code> | Type of Fund (Open, Closed, ETF) |
| params.creationDate | <code>string</code> | Fund's creation date (YYYY-MM-DD) |
| params.nav | <code>number</code> | Fund's Net Asset Value |
| params.expenseRatio | <code>number</code> | Fund's expense ratio |
| params.netAssets | <code>number</code> | ??? |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the ETF |
| params.updatedBy | <code>string</code> | ID of the user that updated the ETF |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.Fund"></a>

### assets.Fund ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing a Fund

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.Fund_new"></a>

#### new Fund(params)
Construct a new Fund instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.fundType | <code>string</code> | Type of Fund (Open, Closed, ETF) |
| params.creationDate | <code>string</code> | Fund's creation date (YYYY-MM-DD) |
| params.nav | <code>number</code> | Fund's Net Asset Value |
| params.expenseRatio | <code>number</code> | Fund's expense ratio |
| params.netAssets | <code>number</code> | ??? |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.ForeignExchange"></a>

### assets.ForeignExchange ⇐ <code>[FXBase](#module_assets.FXBase)</code>
Class representing FX

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[FXBase](#module_assets.FXBase)</code>  
<a name="new_module_assets.ForeignExchange_new"></a>

#### new ForeignExchange(params)
Construct a new Foreign Exchange instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.FXBase"></a>

### assets.FXBase ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing FX (this should never be instantiated directly, use the appropriate subclass instead)

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.FXBase_new"></a>

#### new FXBase(params)
Construct a new FXBase instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.NonDeliverableForward"></a>

### assets.NonDeliverableForward ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing FX (this should never be instantiated directly, use the appropriate subclass instead)

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.NonDeliverableForward_new"></a>

#### new NonDeliverableForward(params)
Construct a new Non Deliverable Forward instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.Index"></a>

### assets.Index ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing an Index

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.Index_new"></a>

#### new Index(params)
Construct a new Index instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.BondFuture"></a>

### assets.BondFuture ⇐ <code>[Future](#module_assets.Future)</code>
Class representing a Bond Future

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Future](#module_assets.Future)</code>  
<a name="new_module_assets.BondFuture_new"></a>

#### new BondFuture(params)
Construct a new Bond Future instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.settlementType | <code>string</code> | Settlement Type (Physical, Cash) |
| params.contractSize | <code>number</code> | Contract Size |
| params.pointValue | <code>number</code> | ??? |
| params.tickSize | <code>number</code> | ??? |
| params.quoteUnit | <code>number</code> | ??? |
| params.underlyingAssetId | <code>string</code> | ID of the underlying Asset |
| params.expiryDate | <code>string</code> | Date of the contract's expiry (YYYY-MM-DD) |
| params.cheapestToDeliverId | <code>string</code> | ??? |
| params.underlyingBondTenor | <code>string</code> | ??? |
| params.underlyingBondCoupon | <code>number</code> | Coupon of the underlying Bond |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Bond Future |
| params.updatedBy | <code>string</code> | ID of the user that updated the Bond Future |
| params.createdTime | <code>date</code> | Time that the Bond Future was created |
| params.updatedTime | <code>date</code> | Time that the Bond Future was updated |
| params.version | <code>number</code> | Version number of the Bond Future |

<a name="module_assets.BondFutureOption"></a>

### assets.BondFutureOption ⇐ <code>[Future](#module_assets.Future)</code>
Class representing a Bond Future Option

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Future](#module_assets.Future)</code>  
<a name="new_module_assets.BondFutureOption_new"></a>

#### new BondFutureOption(params)
Construct a new Bond Future Option instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.settlementType | <code>string</code> | Settlement Type (Physical, Cash) |
| params.contractSize | <code>number</code> | Contract Size |
| params.pointValue | <code>number</code> | ??? |
| params.tickSize | <code>number</code> | ??? |
| params.quoteUnit | <code>number</code> | ??? |
| params.underlyingAssetId | <code>string</code> | ID of the underlying Asset |
| params.expiryDate | <code>string</code> | Date of the contract's expiry (YYYY-MM-DD) |
| params.optionType | <code>string</code> | Option type (Put, Call) |
| params.strike | <code>number</code> | Strike price |
| params.optionStyle | <code>string</code> | Option style (American , Bermudan, European) |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.EnergyFuture"></a>

### assets.EnergyFuture ⇐ <code>[Future](#module_assets.Future)</code>
Class representing an Energy Future

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Future](#module_assets.Future)</code>  
<a name="new_module_assets.EnergyFuture_new"></a>

#### new EnergyFuture(params)
Construct a new Energy Future instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.settlementType | <code>string</code> | Settlement Type (Physical, Cash) |
| params.contractSize | <code>number</code> | Contract Size |
| params.pointValue | <code>number</code> | ??? |
| params.tickSize | <code>number</code> | ??? |
| params.quoteUnit | <code>number</code> | ??? |
| params.underlyingAssetId | <code>string</code> | ID of the underlying Asset |
| params.expiryDate | <code>string</code> | Date of the contract's expiry (YYYY-MM-DD) |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.EquityFuture"></a>

### assets.EquityFuture ⇐ <code>[ListedDerivative](#module_assets.ListedDerivative)</code>
Class representing a Future

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[ListedDerivative](#module_assets.ListedDerivative)</code>  
<a name="new_module_assets.EquityFuture_new"></a>

#### new EquityFuture(params)
Construct a new Asset object


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.settlementType | <code>string</code> | Settlement Type (Physical, Cash) |
| params.contractSize | <code>number</code> | Contract Size |
| params.pointValue | <code>number</code> | ??? |
| params.tickSize | <code>number</code> | ??? |
| params.quoteUnit | <code>number</code> | ??? |
| params.underlyingAssetId | <code>string</code> | ID of the underlying Asset |
| params.expiryDate | <code>string</code> | Date of the contract's expiry (YYYY-MM-DD) |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.Future"></a>

### assets.Future ⇐ <code>[ListedDerivative](#module_assets.ListedDerivative)</code>
Class representing a Future

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[ListedDerivative](#module_assets.ListedDerivative)</code>  
<a name="new_module_assets.Future_new"></a>

#### new Future(params)
Construct a new Future instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.settlementType | <code>string</code> | Settlement Type (Physical, Cash) |
| params.contractSize | <code>number</code> | Contract Size |
| params.pointValue | <code>number</code> | ??? |
| params.tickSize | <code>number</code> | ??? |
| params.quoteUnit | <code>number</code> | ??? |
| params.underlyingAssetId | <code>string</code> | ID of the underlying Asset |
| params.expiryDate | <code>string</code> | Date of the contract's expiry (YYYY-MM-DD) |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.FutureOption"></a>

### assets.FutureOption ⇐ <code>[Future](#module_assets.Future)</code>
Class representing a Future Option

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Future](#module_assets.Future)</code>  
<a name="new_module_assets.FutureOption_new"></a>

#### new FutureOption(params)
Construct a new Future Option instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.settlementType | <code>string</code> | Settlement Type (Physical, Cash) |
| params.contractSize | <code>number</code> | Contract Size |
| params.pointValue | <code>number</code> | ??? |
| params.tickSize | <code>number</code> | ??? |
| params.quoteUnit | <code>number</code> | ??? |
| params.underlyingAssetId | <code>string</code> | ID of the underlying Asset |
| params.expiryDate | <code>string</code> | Date of the contract's expiry (YYYY-MM-DD) |
| params.optionType | <code>string</code> | Option type (Put, Call) |
| params.optionStyle | <code>string</code> | Option style (American, Bermudan, European) |
| params.strike | <code>number</code> | Strike price |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.IndexFuture"></a>

### assets.IndexFuture ⇐ <code>[Future](#module_assets.Future)</code>
Class representing an Index Future

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Future](#module_assets.Future)</code>  
<a name="new_module_assets.IndexFuture_new"></a>

#### new IndexFuture(params)
Construct a new Index Future instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.settlementType | <code>string</code> | Settlement Type (Physical, Cash) |
| params.contractSize | <code>number</code> | Contract Size |
| params.pointValue | <code>number</code> | ??? |
| params.tickSize | <code>number</code> | ??? |
| params.quoteUnit | <code>number</code> | ??? |
| params.underlyingAssetId | <code>string</code> | ID of the underlying Asset |
| params.expiryDate | <code>string</code> | Date of the contract's expiry (YYYY-MM-DD) |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.InterestRateFuture"></a>

### assets.InterestRateFuture ⇐ <code>[Future](#module_assets.Future)</code>
Class representing an Interest Rate Future

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Future](#module_assets.Future)</code>  
<a name="new_module_assets.InterestRateFuture_new"></a>

#### new InterestRateFuture(params)
Construct a new Interest Rate Future instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.settlementType | <code>string</code> | Settlement Type (Physical, Cash) |
| params.contractSize | <code>number</code> | Contract Size |
| params.pointValue | <code>number</code> | ??? |
| params.tickSize | <code>number</code> | ??? |
| params.quoteUnit | <code>number</code> | ??? |
| params.underlyingAssetId | <code>string</code> | ID of the underlying Asset |
| params.expiryDate | <code>string</code> | Date of the contract's expiry (YYYY-MM-DD) |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.ListedContractForDifference"></a>

### assets.ListedContractForDifference ⇐ <code>[ListedDerivative](#module_assets.ListedDerivative)</code>
Class representing a Listed CFD

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[ListedDerivative](#module_assets.ListedDerivative)</code>  
<a name="new_module_assets.ListedContractForDifference_new"></a>

#### new ListedContractForDifference(params)
Construct a new Listed CFD instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.ListedDerivative"></a>

### assets.ListedDerivative ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing a Listed Derivative

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.ListedDerivative_new"></a>

#### new ListedDerivative(params)
Construct a new Listed Derivative instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.RealAsset"></a>

### assets.RealAsset ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing a Real Asset

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.RealAsset_new"></a>

#### new RealAsset(params)
Construct a new Real Asset instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.RealEstate"></a>

### assets.RealEstate ⇐ <code>[RealAsset](#module_assets.RealAsset)</code>
Class representing Real Estate

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[RealAsset](#module_assets.RealAsset)</code>  
<a name="new_module_assets.RealEstate_new"></a>

#### new RealEstate(params)
Construct a new Real Estate instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset (set in the Custom Asset class) |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.Wine"></a>

### assets.Wine ⇐ <code>[RealAsset](#module_assets.RealAsset)</code>
Class representing Wine

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[RealAsset](#module_assets.RealAsset)</code>  
<a name="new_module_assets.Wine_new"></a>

#### new Wine(params)
Construct a new Wine instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset (set in the Custom Asset class) |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.Sukuk"></a>

### assets.Sukuk ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing a Sukuk

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.Sukuk_new"></a>

#### new Sukuk(params)
Construct a new Sukuk instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset (set in the Custom Asset class) |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.Synthetic"></a>

### assets.Synthetic ⇐ <code>[Asset](#module_assets.Asset)</code>
Class representing a Synthetic

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Asset](#module_assets.Asset)</code>  
<a name="new_module_assets.Synthetic_new"></a>

#### new Synthetic(params)
Construct a new Synthetic instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset (set in the Custom Asset class) |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.SyntheticFromBook"></a>

### assets.SyntheticFromBook ⇐ <code>[Synthetic](#module_assets.Synthetic)</code>
Class representing a Synthetic From Book

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Synthetic](#module_assets.Synthetic)</code>  
<a name="new_module_assets.SyntheticFromBook_new"></a>

#### new SyntheticFromBook(params)
Construct a new Synthetic From Book instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset (set in the Custom Asset class) |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_assets.SyntheticMultiLeg"></a>

### assets.SyntheticMultiLeg ⇐ <code>[Synthetic](#module_assets.Synthetic)</code>
Class representing a Multi-Leg Synthetic

**Kind**: static class of <code>[assets](#module_assets)</code>  
**Extends:** <code>[Synthetic](#module_assets.Synthetic)</code>  
<a name="new_module_assets.SyntheticMultiLeg_new"></a>

#### new SyntheticMultiLeg(params)
Construct a new Multi-Leg Synthetic instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Asset creation options |
| params.assetManagerId | <code>integer</code> | ID of Asset's Asset Manager (required) |
| params.assetId | <code>integer</code> | ID of the Asset (required) |
| params.assetClass | <code>string</code> | Class of the Asset |
| params.fungible | <code>bool</code> | Whether this Asset is fungible (required) |
| params.assetIssuerId | <code>string</code> | ID of the Asset's issuer |
| params.assetStatus | <code>string</code> | Status of the Asset (e.g. 'Active') |
| params.countryId | <code>string</code> | ID of Asset's country |
| params.venueId | <code>string</code> | ID of Asset's venue if applicable |
| params.currency | <code>string</code> | Asset currency (e.g. USD, SGD) |
| params.issueDate | <code>string</code> | Issue date if applicable (YYYY-MM-DD) |
| params.maturityDate | <code>string</code> | Maturity date if applicable (YYYY-MM-DD) |
| params.description | <code>string</code> | Description of the Asset |
| params.clientId | <code>string</code> | ID of the client to which the Asset belongs |
| params.legs | <code>string</code> | ??? |
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset (set in the Custom Asset class) |
| params.createdBy | <code>string</code> | ID of the user that created the Asset |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

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
