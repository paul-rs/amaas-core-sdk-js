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

## API

## Modules

<dl>
<dt><a href="#module_Core">Core</a></dt>
<dd><p>Core classes for the AMaaS Core SDK for JavaScript.
These classes cannot be instantiated from the SDK, they are included for reference</p>
</dd>
<dt><a href="#module_Allocations">Allocations</a></dt>
<dd><p>API methods to send and retrieve Transaction allocations.
(Not ready yet)</p>
</dd>
<dt><a href="#module_AssetManagers">AssetManagers</a></dt>
<dd><p>Classes and API methods for the AssetManagers service</p>
</dd>
<dt><a href="#module_Assets">Assets</a></dt>
<dd><p>Classes and API methods for the Assets service</p>
</dd>
<dt><a href="#module_Books">Books</a></dt>
<dd><p>Classes and API methods for the Books Service</p>
</dd>
<dt><a href="#module_Netting">Netting</a></dt>
<dd><p>API methods to send and retrieve Transaction Netting.
(Not ready yet)</p>
</dd>
<dt><a href="#module_Parties">Parties</a></dt>
<dd><p>Classes and API methods for the Parties service</p>
</dd>
<dt><a href="#module_Transactions">Transactions</a></dt>
<dd><p>Classes and API methods for the Transactions service. (Not ready yet)</p>
</dd>
</dl>

<a name="module_Core"></a>

## Core
Core classes for the AMaaS Core SDK for JavaScript.
These classes cannot be instantiated from the SDK, they are included for reference


* [Core](#module_Core)
    * [.Reference](#module_Core.Reference) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
        * [new Reference(params)](#new_module_Core.Reference_new)
    * [.AMaaSModel](#module_Core.AMaaSModel)
        * [new AMaaSModel(params)](#new_module_Core.AMaaSModel_new)

<a name="module_Core.Reference"></a>

### Core.Reference ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
Class representing a Reference

**Kind**: static class of <code>[Core](#module_Core)</code>  
**Extends**: <code>[AMaaSModel](#module_Core.AMaaSModel)</code>  
<a name="new_module_Core.Reference_new"></a>

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

<a name="module_Core.AMaaSModel"></a>

### Core.AMaaSModel
Class representing a AMaaSModel.
This is the Base Class for almost every other class

**Kind**: static class of <code>[Core](#module_Core)</code>  
<a name="new_module_Core.AMaaSModel_new"></a>

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

<a name="module_Allocations"></a>

## Allocations
API methods to send and retrieve Transaction allocations.
(Not ready yet)


* [Allocations](#module_Allocations)
    * [.api](#module_Allocations.api) : <code>object</code>
        * [.retrieve(params, [callback])](#module_Allocations.api.retrieve) ⇒ <code>Promise</code> \| <code>Array</code>
        * [.send(params)](#module_Allocations.api.send) ⇒ <code>Promise</code> \| <code>Array</code>

<a name="module_Allocations.api"></a>

### Allocations.api : <code>object</code>
**Kind**: static namespace of <code>[Allocations](#module_Allocations)</code>  

* [.api](#module_Allocations.api) : <code>object</code>
    * [.retrieve(params, [callback])](#module_Allocations.api.retrieve) ⇒ <code>Promise</code> \| <code>Array</code>
    * [.send(params)](#module_Allocations.api.send) ⇒ <code>Promise</code> \| <code>Array</code>

<a name="module_Allocations.api.retrieve"></a>

#### api.retrieve(params, [callback]) ⇒ <code>Promise</code> \| <code>Array</code>
Retrieve Allocations for a specific Transaction

**Kind**: static method of <code>[api](#module_Allocations.api)</code>  
**Returns**: <code>Promise</code> \| <code>Array</code> - If callback given, callback is called with array of Allocations. Otherwise returns promise which resolves with array of Allocations  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of Transaction |
| params.resourceId | <code>string</code> | Transaction ID |
| params.token | <code>string</code> | Authorization token |
| [callback] | <code>function</code> | Function of form (error, result) called on completion |

<a name="module_Allocations.api.send"></a>

#### api.send(params) ⇒ <code>Promise</code> \| <code>Array</code>
Send Allocations for a specific Transaction

**Kind**: static method of <code>[api](#module_Allocations.api)</code>  
**Returns**: <code>Promise</code> \| <code>Array</code> - ???  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of Transaction |
| params.resourceId | <code>string</code> | Transaction ID |
| params.data | <code>object</code> | Allocation data for the Transaction of the form [ { book_id: '123', quantity: '50', transaction_id: 'XYZ' }, { book_id: '456', quantity: '50', transaction_id: 'ABC' } ]    If transaction_id is given, the new Transaction that is created will have this as ID. |
| params.token | <code>string</code> | Authorization token |

<a name="module_AssetManagers"></a>

## AssetManagers
Classes and API methods for the AssetManagers service


* [AssetManagers](#module_AssetManagers)
    * [.Class](#module_AssetManagers.Class) : <code>object</code>
        * [.AssetManager](#module_AssetManagers.Class.AssetManager) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
            * [new AssetManager(params)](#new_module_AssetManagers.Class.AssetManager_new)
        * [.Relationship](#module_AssetManagers.Class.Relationship) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
            * [new Relationship(params)](#new_module_AssetManagers.Class.Relationship_new)
    * [.api](#module_AssetManagers.api) : <code>object</code>
        * [.retrieve(params, callback)](#module_AssetManagers.api.retrieve) ⇒ <code>Promise</code> \| <code>AssetManager</code>
        * [.insert(params, callback)](#module_AssetManagers.api.insert) ⇒ <code>Promise</code> \| <code>AssetManager</code>
        * [.amend(params, callback)](#module_AssetManagers.api.amend) ⇒ <code>Promise</code> \| <code>AssetManager</code>
        * [.deactivate(params, callback)](#module_AssetManagers.api.deactivate) ⇒ <code>Promise</code> \| <code>AssetManager</code>

<a name="module_AssetManagers.Class"></a>

### AssetManagers.Class : <code>object</code>
**Kind**: static namespace of <code>[AssetManagers](#module_AssetManagers)</code>  

* [.Class](#module_AssetManagers.Class) : <code>object</code>
    * [.AssetManager](#module_AssetManagers.Class.AssetManager) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
        * [new AssetManager(params)](#new_module_AssetManagers.Class.AssetManager_new)
    * [.Relationship](#module_AssetManagers.Class.Relationship) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
        * [new Relationship(params)](#new_module_AssetManagers.Class.Relationship_new)

<a name="module_AssetManagers.Class.AssetManager"></a>

#### Class.AssetManager ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
Class representing an Asset Manager

**Kind**: static class of <code>[Class](#module_AssetManagers.Class)</code>  
**Extends**: <code>[AMaaSModel](#module_Core.AMaaSModel)</code>  
<a name="new_module_AssetManagers.Class.AssetManager_new"></a>

##### new AssetManager(params)
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

<a name="module_AssetManagers.Class.Relationship"></a>

#### Class.Relationship ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
Class representing a Relationship

**Kind**: static class of <code>[Class](#module_AssetManagers.Class)</code>  
**Extends**: <code>[AMaaSModel](#module_Core.AMaaSModel)</code>  
<a name="new_module_AssetManagers.Class.Relationship_new"></a>

##### new Relationship(params)
Construct a new Relationship instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Relationship creation options |
| params.assetManagerId | <code>number</code> | ID of the Asset Manager who owns this Relationship |
| params.relationId | <code>number</code> | ID of the Asset Manager to whom this Relationship connects |
| params.relationshipType | <code>string</code> | The type of Relationship between these Asset Managers |
| params.clientId | <code>string</code> | The client ID that owns this Relationship |
| params.relationshipStatus | <code>string</code> | The status of the Relationship |
| params.createdBy | <code>string</code> | ID of the user that created the Relationship |
| params.updatedBy | <code>string</code> | ID of the user that updated the Relationship |
| params.createdTime | <code>date</code> | Time that the Relationship was created |
| params.updatedTime | <code>date</code> | Time that the Relationship was updated |
| params.version | <code>number</code> | Version number of the Relationship |

<a name="module_AssetManagers.api"></a>

### AssetManagers.api : <code>object</code>
**Kind**: static namespace of <code>[AssetManagers](#module_AssetManagers)</code>  

* [.api](#module_AssetManagers.api) : <code>object</code>
    * [.retrieve(params, callback)](#module_AssetManagers.api.retrieve) ⇒ <code>Promise</code> \| <code>AssetManager</code>
    * [.insert(params, callback)](#module_AssetManagers.api.insert) ⇒ <code>Promise</code> \| <code>AssetManager</code>
    * [.amend(params, callback)](#module_AssetManagers.api.amend) ⇒ <code>Promise</code> \| <code>AssetManager</code>
    * [.deactivate(params, callback)](#module_AssetManagers.api.deactivate) ⇒ <code>Promise</code> \| <code>AssetManager</code>

<a name="module_AssetManagers.api.retrieve"></a>

#### api.retrieve(params, callback) ⇒ <code>Promise</code> \| <code>AssetManager</code>
Retrieve Asset Manager data for specified Asset Manager ID

**Kind**: static method of <code>[api](#module_AssetManagers.api)</code>  
**Returns**: <code>Promise</code> \| <code>AssetManager</code> - If callback supplied, callback(null, AssetManager) is called. Otherwise promise is returned that resolves with AssetManager instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID to retrieve |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_AssetManagers.api.insert"></a>

#### api.insert(params, callback) ⇒ <code>Promise</code> \| <code>AssetManager</code>
Insert a new Asset Manager into the database

**Kind**: static method of <code>[api](#module_AssetManagers.api)</code>  
**Returns**: <code>Promise</code> \| <code>AssetManager</code> - If callback supplied, callback(null, AssetManager) is called. Otherwise promise is returned that resolves with AssetManager instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.assetManager | <code>AssetManager</code> | Asset Manager instance to insert |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_AssetManagers.api.amend"></a>

#### api.amend(params, callback) ⇒ <code>Promise</code> \| <code>AssetManager</code>
Amend an Asset Manager (Replaces current Asset Manager with what is passed in)

**Kind**: static method of <code>[api](#module_AssetManagers.api)</code>  
**Returns**: <code>Promise</code> \| <code>AssetManager</code> - If callback supplied, callback(null, AssetManager) is called. Otherwise promise is returned that resolves with AssetManager instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMID of the Asset Manager to amend |
| params.assetManager | <code>AssetManager</code> | Asset Manager instance to insert |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_AssetManagers.api.deactivate"></a>

#### api.deactivate(params, callback) ⇒ <code>Promise</code> \| <code>AssetManager</code>
Deactivate an Asset Manager

**Kind**: static method of <code>[api](#module_AssetManagers.api)</code>  
**Returns**: <code>Promise</code> \| <code>AssetManager</code> - ???  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | AMID of the Asset Manager to deactivate |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_Assets"></a>

## Assets
Classes and API methods for the Assets service


* [Assets](#module_Assets)
    * [.Class](#module_Assets.Class) : <code>object</code>
        * [.Asset](#module_Assets.Class.Asset) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
            * [new Asset(params)](#new_module_Assets.Class.Asset_new)
        * [.BondBase](#module_Assets.Class.BondBase) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
            * [new BondBase(params)](#new_module_Assets.Class.BondBase_new)
        * [.BondCorporate](#module_Assets.Class.BondCorporate) ⇐ <code>[BondBase](#module_Assets.Class.BondBase)</code>
            * [new BondCorporate(params)](#new_module_Assets.Class.BondCorporate_new)
        * [.BondGovernment](#module_Assets.Class.BondGovernment) ⇐ <code>[BondBase](#module_Assets.Class.BondBase)</code>
            * [new BondGovernment(params)](#new_module_Assets.Class.BondGovernment_new)
        * [.BondMortgage](#module_Assets.Class.BondMortgage) ⇐ <code>[BondBase](#module_Assets.Class.BondBase)</code>
            * [new BondMortgage(params)](#new_module_Assets.Class.BondMortgage_new)
        * [.Currency](#module_Assets.Class.Currency) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
            * [new Currency(params)](#new_module_Assets.Class.Currency_new)
        * [.CustomAsset](#module_Assets.Class.CustomAsset) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
            * [new CustomAsset(params)](#new_module_Assets.Class.CustomAsset_new)
        * [.BondOption](#module_Assets.Class.BondOption) ⇐ <code>[Derivative](#module_Assets.Class.Derivative)</code>
            * [new BondOption(params)](#new_module_Assets.Class.BondOption_new)
        * [.CFD](#module_Assets.Class.CFD) ⇐ <code>[Derivative](#module_Assets.Class.Derivative)</code>
            * [new CFD(params)](#new_module_Assets.Class.CFD_new)
        * [.Derivative](#module_Assets.Class.Derivative) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
            * [new Derivative(params)](#new_module_Assets.Class.Derivative_new)
        * [.Equity](#module_Assets.Class.Equity) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
            * [new Equity(params)](#new_module_Assets.Class.Equity_new)
        * [.ForeignExchangeOption](#module_Assets.Class.ForeignExchangeOption) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
            * [new ForeignExchangeOption(params)](#new_module_Assets.Class.ForeignExchangeOption_new)
        * [.ExchangeTradedFund](#module_Assets.Class.ExchangeTradedFund) ⇐ <code>[Fund](#module_Assets.Class.Fund)</code>
            * [new ExchangeTradedFund(params)](#new_module_Assets.Class.ExchangeTradedFund_new)
        * [.Fund](#module_Assets.Class.Fund) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
            * [new Fund(params)](#new_module_Assets.Class.Fund_new)
        * [.ForeignExchange](#module_Assets.Class.ForeignExchange) ⇐ <code>[FXBase](#module_Assets.Class.FXBase)</code>
            * [new ForeignExchange(params)](#new_module_Assets.Class.ForeignExchange_new)
        * [.FXBase](#module_Assets.Class.FXBase) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
            * [new FXBase(params)](#new_module_Assets.Class.FXBase_new)
        * [.NonDeliverableForward](#module_Assets.Class.NonDeliverableForward) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
            * [new NonDeliverableForward(params)](#new_module_Assets.Class.NonDeliverableForward_new)
        * [.Index](#module_Assets.Class.Index) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
            * [new Index(params)](#new_module_Assets.Class.Index_new)
        * [.BondFuture](#module_Assets.Class.BondFuture) ⇐ <code>[Future](#module_Assets.Class.Future)</code>
            * [new BondFuture(params)](#new_module_Assets.Class.BondFuture_new)
        * [.BondFutureOption](#module_Assets.Class.BondFutureOption) ⇐ <code>[Future](#module_Assets.Class.Future)</code>
            * [new BondFutureOption(params)](#new_module_Assets.Class.BondFutureOption_new)
        * [.EnergyFuture](#module_Assets.Class.EnergyFuture) ⇐ <code>[Future](#module_Assets.Class.Future)</code>
            * [new EnergyFuture(params)](#new_module_Assets.Class.EnergyFuture_new)
        * [.EquityFuture](#module_Assets.Class.EquityFuture) ⇐ <code>[ListedDerivative](#module_Assets.Class.ListedDerivative)</code>
            * [new EquityFuture(params)](#new_module_Assets.Class.EquityFuture_new)
        * [.Future](#module_Assets.Class.Future) ⇐ <code>[ListedDerivative](#module_Assets.Class.ListedDerivative)</code>
            * [new Future(params)](#new_module_Assets.Class.Future_new)
        * [.FutureOption](#module_Assets.Class.FutureOption) ⇐ <code>[Future](#module_Assets.Class.Future)</code>
            * [new FutureOption(params)](#new_module_Assets.Class.FutureOption_new)
        * [.IndexFuture](#module_Assets.Class.IndexFuture) ⇐ <code>[Future](#module_Assets.Class.Future)</code>
            * [new IndexFuture(params)](#new_module_Assets.Class.IndexFuture_new)
        * [.InterestRateFuture](#module_Assets.Class.InterestRateFuture) ⇐ <code>[Future](#module_Assets.Class.Future)</code>
            * [new InterestRateFuture(params)](#new_module_Assets.Class.InterestRateFuture_new)
        * [.ListedContractForDifference](#module_Assets.Class.ListedContractForDifference) ⇐ <code>[ListedDerivative](#module_Assets.Class.ListedDerivative)</code>
            * [new ListedContractForDifference(params)](#new_module_Assets.Class.ListedContractForDifference_new)
        * [.ListedDerivative](#module_Assets.Class.ListedDerivative) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
            * [new ListedDerivative(params)](#new_module_Assets.Class.ListedDerivative_new)
        * [.RealAsset](#module_Assets.Class.RealAsset) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
            * [new RealAsset(params)](#new_module_Assets.Class.RealAsset_new)
        * [.RealEstate](#module_Assets.Class.RealEstate) ⇐ <code>[RealAsset](#module_Assets.Class.RealAsset)</code>
            * [new RealEstate(params)](#new_module_Assets.Class.RealEstate_new)
        * [.Wine](#module_Assets.Class.Wine) ⇐ <code>[RealAsset](#module_Assets.Class.RealAsset)</code>
            * [new Wine(params)](#new_module_Assets.Class.Wine_new)
        * [.Sukuk](#module_Assets.Class.Sukuk) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
            * [new Sukuk(params)](#new_module_Assets.Class.Sukuk_new)
        * [.Synthetic](#module_Assets.Class.Synthetic) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
            * [new Synthetic(params)](#new_module_Assets.Class.Synthetic_new)
        * [.SyntheticFromBook](#module_Assets.Class.SyntheticFromBook) ⇐ <code>[Synthetic](#module_Assets.Class.Synthetic)</code>
            * [new SyntheticFromBook(params)](#new_module_Assets.Class.SyntheticFromBook_new)
        * [.SyntheticMultiLeg](#module_Assets.Class.SyntheticMultiLeg) ⇐ <code>[Synthetic](#module_Assets.Class.Synthetic)</code>
            * [new SyntheticMultiLeg(params)](#new_module_Assets.Class.SyntheticMultiLeg_new)
    * [.api](#module_Assets.api) : <code>object</code>
        * [.retrieve(params, callback)](#module_Assets.api.retrieve)
        * [.insert(params, callback)](#module_Assets.api.insert)
        * [.amend(params, callback)](#module_Assets.api.amend)
        * [.partialAmend(params, callback)](#module_Assets.api.partialAmend)
        * [.deactivate(params, callback)](#module_Assets.api.deactivate)

<a name="module_Assets.Class"></a>

### Assets.Class : <code>object</code>
**Kind**: static namespace of <code>[Assets](#module_Assets)</code>  

* [.Class](#module_Assets.Class) : <code>object</code>
    * [.Asset](#module_Assets.Class.Asset) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
        * [new Asset(params)](#new_module_Assets.Class.Asset_new)
    * [.BondBase](#module_Assets.Class.BondBase) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
        * [new BondBase(params)](#new_module_Assets.Class.BondBase_new)
    * [.BondCorporate](#module_Assets.Class.BondCorporate) ⇐ <code>[BondBase](#module_Assets.Class.BondBase)</code>
        * [new BondCorporate(params)](#new_module_Assets.Class.BondCorporate_new)
    * [.BondGovernment](#module_Assets.Class.BondGovernment) ⇐ <code>[BondBase](#module_Assets.Class.BondBase)</code>
        * [new BondGovernment(params)](#new_module_Assets.Class.BondGovernment_new)
    * [.BondMortgage](#module_Assets.Class.BondMortgage) ⇐ <code>[BondBase](#module_Assets.Class.BondBase)</code>
        * [new BondMortgage(params)](#new_module_Assets.Class.BondMortgage_new)
    * [.Currency](#module_Assets.Class.Currency) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
        * [new Currency(params)](#new_module_Assets.Class.Currency_new)
    * [.CustomAsset](#module_Assets.Class.CustomAsset) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
        * [new CustomAsset(params)](#new_module_Assets.Class.CustomAsset_new)
    * [.BondOption](#module_Assets.Class.BondOption) ⇐ <code>[Derivative](#module_Assets.Class.Derivative)</code>
        * [new BondOption(params)](#new_module_Assets.Class.BondOption_new)
    * [.CFD](#module_Assets.Class.CFD) ⇐ <code>[Derivative](#module_Assets.Class.Derivative)</code>
        * [new CFD(params)](#new_module_Assets.Class.CFD_new)
    * [.Derivative](#module_Assets.Class.Derivative) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
        * [new Derivative(params)](#new_module_Assets.Class.Derivative_new)
    * [.Equity](#module_Assets.Class.Equity) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
        * [new Equity(params)](#new_module_Assets.Class.Equity_new)
    * [.ForeignExchangeOption](#module_Assets.Class.ForeignExchangeOption) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
        * [new ForeignExchangeOption(params)](#new_module_Assets.Class.ForeignExchangeOption_new)
    * [.ExchangeTradedFund](#module_Assets.Class.ExchangeTradedFund) ⇐ <code>[Fund](#module_Assets.Class.Fund)</code>
        * [new ExchangeTradedFund(params)](#new_module_Assets.Class.ExchangeTradedFund_new)
    * [.Fund](#module_Assets.Class.Fund) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
        * [new Fund(params)](#new_module_Assets.Class.Fund_new)
    * [.ForeignExchange](#module_Assets.Class.ForeignExchange) ⇐ <code>[FXBase](#module_Assets.Class.FXBase)</code>
        * [new ForeignExchange(params)](#new_module_Assets.Class.ForeignExchange_new)
    * [.FXBase](#module_Assets.Class.FXBase) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
        * [new FXBase(params)](#new_module_Assets.Class.FXBase_new)
    * [.NonDeliverableForward](#module_Assets.Class.NonDeliverableForward) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
        * [new NonDeliverableForward(params)](#new_module_Assets.Class.NonDeliverableForward_new)
    * [.Index](#module_Assets.Class.Index) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
        * [new Index(params)](#new_module_Assets.Class.Index_new)
    * [.BondFuture](#module_Assets.Class.BondFuture) ⇐ <code>[Future](#module_Assets.Class.Future)</code>
        * [new BondFuture(params)](#new_module_Assets.Class.BondFuture_new)
    * [.BondFutureOption](#module_Assets.Class.BondFutureOption) ⇐ <code>[Future](#module_Assets.Class.Future)</code>
        * [new BondFutureOption(params)](#new_module_Assets.Class.BondFutureOption_new)
    * [.EnergyFuture](#module_Assets.Class.EnergyFuture) ⇐ <code>[Future](#module_Assets.Class.Future)</code>
        * [new EnergyFuture(params)](#new_module_Assets.Class.EnergyFuture_new)
    * [.EquityFuture](#module_Assets.Class.EquityFuture) ⇐ <code>[ListedDerivative](#module_Assets.Class.ListedDerivative)</code>
        * [new EquityFuture(params)](#new_module_Assets.Class.EquityFuture_new)
    * [.Future](#module_Assets.Class.Future) ⇐ <code>[ListedDerivative](#module_Assets.Class.ListedDerivative)</code>
        * [new Future(params)](#new_module_Assets.Class.Future_new)
    * [.FutureOption](#module_Assets.Class.FutureOption) ⇐ <code>[Future](#module_Assets.Class.Future)</code>
        * [new FutureOption(params)](#new_module_Assets.Class.FutureOption_new)
    * [.IndexFuture](#module_Assets.Class.IndexFuture) ⇐ <code>[Future](#module_Assets.Class.Future)</code>
        * [new IndexFuture(params)](#new_module_Assets.Class.IndexFuture_new)
    * [.InterestRateFuture](#module_Assets.Class.InterestRateFuture) ⇐ <code>[Future](#module_Assets.Class.Future)</code>
        * [new InterestRateFuture(params)](#new_module_Assets.Class.InterestRateFuture_new)
    * [.ListedContractForDifference](#module_Assets.Class.ListedContractForDifference) ⇐ <code>[ListedDerivative](#module_Assets.Class.ListedDerivative)</code>
        * [new ListedContractForDifference(params)](#new_module_Assets.Class.ListedContractForDifference_new)
    * [.ListedDerivative](#module_Assets.Class.ListedDerivative) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
        * [new ListedDerivative(params)](#new_module_Assets.Class.ListedDerivative_new)
    * [.RealAsset](#module_Assets.Class.RealAsset) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
        * [new RealAsset(params)](#new_module_Assets.Class.RealAsset_new)
    * [.RealEstate](#module_Assets.Class.RealEstate) ⇐ <code>[RealAsset](#module_Assets.Class.RealAsset)</code>
        * [new RealEstate(params)](#new_module_Assets.Class.RealEstate_new)
    * [.Wine](#module_Assets.Class.Wine) ⇐ <code>[RealAsset](#module_Assets.Class.RealAsset)</code>
        * [new Wine(params)](#new_module_Assets.Class.Wine_new)
    * [.Sukuk](#module_Assets.Class.Sukuk) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
        * [new Sukuk(params)](#new_module_Assets.Class.Sukuk_new)
    * [.Synthetic](#module_Assets.Class.Synthetic) ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
        * [new Synthetic(params)](#new_module_Assets.Class.Synthetic_new)
    * [.SyntheticFromBook](#module_Assets.Class.SyntheticFromBook) ⇐ <code>[Synthetic](#module_Assets.Class.Synthetic)</code>
        * [new SyntheticFromBook(params)](#new_module_Assets.Class.SyntheticFromBook_new)
    * [.SyntheticMultiLeg](#module_Assets.Class.SyntheticMultiLeg) ⇐ <code>[Synthetic](#module_Assets.Class.Synthetic)</code>
        * [new SyntheticMultiLeg(params)](#new_module_Assets.Class.SyntheticMultiLeg_new)

<a name="module_Assets.Class.Asset"></a>

#### Class.Asset ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
Class representing an Asset

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[AMaaSModel](#module_Core.AMaaSModel)</code>  
<a name="new_module_Assets.Class.Asset_new"></a>

##### new Asset(params)
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

<a name="module_Assets.Class.BondBase"></a>

#### Class.BondBase ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
Class representing a Base Bond

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Asset](#module_Assets.Class.Asset)</code>  
<a name="new_module_Assets.Class.BondBase_new"></a>

##### new BondBase(params)
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

<a name="module_Assets.Class.BondCorporate"></a>

#### Class.BondCorporate ⇐ <code>[BondBase](#module_Assets.Class.BondBase)</code>
Class representing a Corporate Bond

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[BondBase](#module_Assets.Class.BondBase)</code>  
<a name="new_module_Assets.Class.BondCorporate_new"></a>

##### new BondCorporate(params)
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

<a name="module_Assets.Class.BondGovernment"></a>

#### Class.BondGovernment ⇐ <code>[BondBase](#module_Assets.Class.BondBase)</code>
Class representing a Government Bond

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[BondBase](#module_Assets.Class.BondBase)</code>  
<a name="new_module_Assets.Class.BondGovernment_new"></a>

##### new BondGovernment(params)
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

<a name="module_Assets.Class.BondMortgage"></a>

#### Class.BondMortgage ⇐ <code>[BondBase](#module_Assets.Class.BondBase)</code>
Class representing a Mortgage Bond

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[BondBase](#module_Assets.Class.BondBase)</code>  
<a name="new_module_Assets.Class.BondMortgage_new"></a>

##### new BondMortgage(params)
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

<a name="module_Assets.Class.Currency"></a>

#### Class.Currency ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
Class representing an Currency

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Asset](#module_Assets.Class.Asset)</code>  
<a name="new_module_Assets.Class.Currency_new"></a>

##### new Currency(params)
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

<a name="module_Assets.Class.CustomAsset"></a>

#### Class.CustomAsset ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
Class representing an Custom Asset

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Asset](#module_Assets.Class.Asset)</code>  
<a name="new_module_Assets.Class.CustomAsset_new"></a>

##### new CustomAsset(params)
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

<a name="module_Assets.Class.BondOption"></a>

#### Class.BondOption ⇐ <code>[Derivative](#module_Assets.Class.Derivative)</code>
Class representing an Bond Option

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Derivative](#module_Assets.Class.Derivative)</code>  
<a name="new_module_Assets.Class.BondOption_new"></a>

##### new BondOption(params)
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

<a name="module_Assets.Class.CFD"></a>

#### Class.CFD ⇐ <code>[Derivative](#module_Assets.Class.Derivative)</code>
Class representing a CFD

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Derivative](#module_Assets.Class.Derivative)</code>  
<a name="new_module_Assets.Class.CFD_new"></a>

##### new CFD(params)
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

<a name="module_Assets.Class.Derivative"></a>

#### Class.Derivative ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
Class representing an Derivative

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Asset](#module_Assets.Class.Asset)</code>  
<a name="new_module_Assets.Class.Derivative_new"></a>

##### new Derivative(params)
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

<a name="module_Assets.Class.Equity"></a>

#### Class.Equity ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
Class representing an Equity

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Asset](#module_Assets.Class.Asset)</code>  
<a name="new_module_Assets.Class.Equity_new"></a>

##### new Equity(params)
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

<a name="module_Assets.Class.ForeignExchangeOption"></a>

#### Class.ForeignExchangeOption ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
Class representing an FX Option

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Asset](#module_Assets.Class.Asset)</code>  
<a name="new_module_Assets.Class.ForeignExchangeOption_new"></a>

##### new ForeignExchangeOption(params)
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

<a name="module_Assets.Class.ExchangeTradedFund"></a>

#### Class.ExchangeTradedFund ⇐ <code>[Fund](#module_Assets.Class.Fund)</code>
Class representing an ETF

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Fund](#module_Assets.Class.Fund)</code>  
<a name="new_module_Assets.Class.ExchangeTradedFund_new"></a>

##### new ExchangeTradedFund(params)
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

<a name="module_Assets.Class.Fund"></a>

#### Class.Fund ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
Class representing a Fund

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Asset](#module_Assets.Class.Asset)</code>  
<a name="new_module_Assets.Class.Fund_new"></a>

##### new Fund(params)
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

<a name="module_Assets.Class.ForeignExchange"></a>

#### Class.ForeignExchange ⇐ <code>[FXBase](#module_Assets.Class.FXBase)</code>
Class representing FX

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[FXBase](#module_Assets.Class.FXBase)</code>  
<a name="new_module_Assets.Class.ForeignExchange_new"></a>

##### new ForeignExchange(params)
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

<a name="module_Assets.Class.FXBase"></a>

#### Class.FXBase ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
Class representing FX (this should never be instantiated directly, use the appropriate subclass instead)

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Asset](#module_Assets.Class.Asset)</code>  
<a name="new_module_Assets.Class.FXBase_new"></a>

##### new FXBase(params)
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

<a name="module_Assets.Class.NonDeliverableForward"></a>

#### Class.NonDeliverableForward ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
Class representing FX (this should never be instantiated directly, use the appropriate subclass instead)

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Asset](#module_Assets.Class.Asset)</code>  
<a name="new_module_Assets.Class.NonDeliverableForward_new"></a>

##### new NonDeliverableForward(params)
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

<a name="module_Assets.Class.Index"></a>

#### Class.Index ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
Class representing an Index

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Asset](#module_Assets.Class.Asset)</code>  
<a name="new_module_Assets.Class.Index_new"></a>

##### new Index(params)
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

<a name="module_Assets.Class.BondFuture"></a>

#### Class.BondFuture ⇐ <code>[Future](#module_Assets.Class.Future)</code>
Class representing a Bond Future

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Future](#module_Assets.Class.Future)</code>  
<a name="new_module_Assets.Class.BondFuture_new"></a>

##### new BondFuture(params)
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

<a name="module_Assets.Class.BondFutureOption"></a>

#### Class.BondFutureOption ⇐ <code>[Future](#module_Assets.Class.Future)</code>
Class representing a Bond Future Option

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Future](#module_Assets.Class.Future)</code>  
<a name="new_module_Assets.Class.BondFutureOption_new"></a>

##### new BondFutureOption(params)
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

<a name="module_Assets.Class.EnergyFuture"></a>

#### Class.EnergyFuture ⇐ <code>[Future](#module_Assets.Class.Future)</code>
Class representing an Energy Future

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Future](#module_Assets.Class.Future)</code>  
<a name="new_module_Assets.Class.EnergyFuture_new"></a>

##### new EnergyFuture(params)
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

<a name="module_Assets.Class.EquityFuture"></a>

#### Class.EquityFuture ⇐ <code>[ListedDerivative](#module_Assets.Class.ListedDerivative)</code>
Class representing a Future

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[ListedDerivative](#module_Assets.Class.ListedDerivative)</code>  
<a name="new_module_Assets.Class.EquityFuture_new"></a>

##### new EquityFuture(params)
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

<a name="module_Assets.Class.Future"></a>

#### Class.Future ⇐ <code>[ListedDerivative](#module_Assets.Class.ListedDerivative)</code>
Class representing a Future

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[ListedDerivative](#module_Assets.Class.ListedDerivative)</code>  
<a name="new_module_Assets.Class.Future_new"></a>

##### new Future(params)
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

<a name="module_Assets.Class.FutureOption"></a>

#### Class.FutureOption ⇐ <code>[Future](#module_Assets.Class.Future)</code>
Class representing a Future Option

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Future](#module_Assets.Class.Future)</code>  
<a name="new_module_Assets.Class.FutureOption_new"></a>

##### new FutureOption(params)
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

<a name="module_Assets.Class.IndexFuture"></a>

#### Class.IndexFuture ⇐ <code>[Future](#module_Assets.Class.Future)</code>
Class representing an Index Future

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Future](#module_Assets.Class.Future)</code>  
<a name="new_module_Assets.Class.IndexFuture_new"></a>

##### new IndexFuture(params)
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

<a name="module_Assets.Class.InterestRateFuture"></a>

#### Class.InterestRateFuture ⇐ <code>[Future](#module_Assets.Class.Future)</code>
Class representing an Interest Rate Future

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Future](#module_Assets.Class.Future)</code>  
<a name="new_module_Assets.Class.InterestRateFuture_new"></a>

##### new InterestRateFuture(params)
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

<a name="module_Assets.Class.ListedContractForDifference"></a>

#### Class.ListedContractForDifference ⇐ <code>[ListedDerivative](#module_Assets.Class.ListedDerivative)</code>
Class representing a Listed CFD

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[ListedDerivative](#module_Assets.Class.ListedDerivative)</code>  
<a name="new_module_Assets.Class.ListedContractForDifference_new"></a>

##### new ListedContractForDifference(params)
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

<a name="module_Assets.Class.ListedDerivative"></a>

#### Class.ListedDerivative ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
Class representing a Listed Derivative

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Asset](#module_Assets.Class.Asset)</code>  
<a name="new_module_Assets.Class.ListedDerivative_new"></a>

##### new ListedDerivative(params)
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

<a name="module_Assets.Class.RealAsset"></a>

#### Class.RealAsset ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
Class representing a Real Asset

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Asset](#module_Assets.Class.Asset)</code>  
<a name="new_module_Assets.Class.RealAsset_new"></a>

##### new RealAsset(params)
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

<a name="module_Assets.Class.RealEstate"></a>

#### Class.RealEstate ⇐ <code>[RealAsset](#module_Assets.Class.RealAsset)</code>
Class representing Real Estate

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[RealAsset](#module_Assets.Class.RealAsset)</code>  
<a name="new_module_Assets.Class.RealEstate_new"></a>

##### new RealEstate(params)
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

<a name="module_Assets.Class.Wine"></a>

#### Class.Wine ⇐ <code>[RealAsset](#module_Assets.Class.RealAsset)</code>
Class representing Wine

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[RealAsset](#module_Assets.Class.RealAsset)</code>  
<a name="new_module_Assets.Class.Wine_new"></a>

##### new Wine(params)
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

<a name="module_Assets.Class.Sukuk"></a>

#### Class.Sukuk ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
Class representing a Sukuk

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Asset](#module_Assets.Class.Asset)</code>  
<a name="new_module_Assets.Class.Sukuk_new"></a>

##### new Sukuk(params)
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

<a name="module_Assets.Class.Synthetic"></a>

#### Class.Synthetic ⇐ <code>[Asset](#module_Assets.Class.Asset)</code>
Class representing a Synthetic

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Asset](#module_Assets.Class.Asset)</code>  
<a name="new_module_Assets.Class.Synthetic_new"></a>

##### new Synthetic(params)
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

<a name="module_Assets.Class.SyntheticFromBook"></a>

#### Class.SyntheticFromBook ⇐ <code>[Synthetic](#module_Assets.Class.Synthetic)</code>
Class representing a Synthetic From Book

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Synthetic](#module_Assets.Class.Synthetic)</code>  
<a name="new_module_Assets.Class.SyntheticFromBook_new"></a>

##### new SyntheticFromBook(params)
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

<a name="module_Assets.Class.SyntheticMultiLeg"></a>

#### Class.SyntheticMultiLeg ⇐ <code>[Synthetic](#module_Assets.Class.Synthetic)</code>
Class representing a Multi-Leg Synthetic

**Kind**: static class of <code>[Class](#module_Assets.Class)</code>  
**Extends**: <code>[Synthetic](#module_Assets.Class.Synthetic)</code>  
<a name="new_module_Assets.Class.SyntheticMultiLeg_new"></a>

##### new SyntheticMultiLeg(params)
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

<a name="module_Assets.api"></a>

### Assets.api : <code>object</code>
**Kind**: static namespace of <code>[Assets](#module_Assets)</code>  

* [.api](#module_Assets.api) : <code>object</code>
    * [.retrieve(params, callback)](#module_Assets.api.retrieve)
    * [.insert(params, callback)](#module_Assets.api.insert)
    * [.amend(params, callback)](#module_Assets.api.amend)
    * [.partialAmend(params, callback)](#module_Assets.api.partialAmend)
    * [.deactivate(params, callback)](#module_Assets.api.deactivate)

<a name="module_Assets.api.retrieve"></a>

#### api.retrieve(params, callback)
Retrieve Asset data for specified AMId and partyId

**Kind**: static method of <code>[api](#module_Assets.api)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Asset |
| [params.resourceId] | <code>string</code> | Party ID of the Asset. Omitting this will return all Assets associated with that AMId |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_Assets.api.insert"></a>

#### api.insert(params, callback)
Insert a new Asset into the database

**Kind**: static method of <code>[api](#module_Assets.api)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.asset | <code>Asset</code> | Asset instance to insert |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_Assets.api.amend"></a>

#### api.amend(params, callback)
Amend an existing Asset. WARNING: This makes a HTTP PUT request and will replace the existing Asset with the one passed in

**Kind**: static method of <code>[api](#module_Assets.api)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.asset | <code>Asset</code> | Amended Asset instance to PUT |
| params.AMId | <code>number</code> | AMId of the Party to amend |
| params.resourceId | <code>string</code> | Asset ID of the Party to amend |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_Assets.api.partialAmend"></a>

#### api.partialAmend(params, callback)
Partially amend an existing Asset.

**Kind**: static method of <code>[api](#module_Assets.api)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.changes | <code>object</code> | Object of changes to the Asset. |
| params.AMId | <code>string</code> | AMId of the Asset to be partially amended |
| params.resourceId | <code>string</code> | Asset ID of the Asset to be partially amended |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_Assets.api.deactivate"></a>

#### api.deactivate(params, callback)
Delete an exising Asset. This will set the Asset status to 'Inactive'.

**Kind**: static method of <code>[api](#module_Assets.api)</code>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Asset to be deleted |
| params.resourceId | <code>string</code> | Asset ID of the Asset to be deleted |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_Books"></a>

## Books
Classes and API methods for the Books Service


* [Books](#module_Books)
    * [.Class](#module_Books.Class) : <code>object</code>
        * [.Book](#module_Books.Class.Book) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
            * [new Book(params)](#new_module_Books.Class.Book_new)
    * [.api](#module_Books.api) : <code>object</code>
        * [.retrieve(params, callback)](#module_Books.api.retrieve) ⇒ <code>Promise</code> \| <code>Array</code> \| <code>Book</code>
        * [.search(params, callback)](#module_Books.api.search) ⇒ <code>Promise</code> \| <code>Array</code>

<a name="module_Books.Class"></a>

### Books.Class : <code>object</code>
**Kind**: static namespace of <code>[Books](#module_Books)</code>  

* [.Class](#module_Books.Class) : <code>object</code>
    * [.Book](#module_Books.Class.Book) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
        * [new Book(params)](#new_module_Books.Class.Book_new)

<a name="module_Books.Class.Book"></a>

#### Class.Book ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
Class representing a Book

**Kind**: static class of <code>[Class](#module_Books.Class)</code>  
**Extends**: <code>[AMaaSModel](#module_Core.AMaaSModel)</code>  
<a name="new_module_Books.Class.Book_new"></a>

##### new Book(params)
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

<a name="module_Books.api"></a>

### Books.api : <code>object</code>
**Kind**: static namespace of <code>[Books](#module_Books)</code>  

* [.api](#module_Books.api) : <code>object</code>
    * [.retrieve(params, callback)](#module_Books.api.retrieve) ⇒ <code>Promise</code> \| <code>Array</code> \| <code>Book</code>
    * [.search(params, callback)](#module_Books.api.search) ⇒ <code>Promise</code> \| <code>Array</code>

<a name="module_Books.api.retrieve"></a>

#### api.retrieve(params, callback) ⇒ <code>Promise</code> \| <code>Array</code> \| <code>Book</code>
Retrieve Book data for specified AMId and bookId

**Kind**: static method of <code>[api](#module_Books.api)</code>  
**Returns**: <code>Promise</code> \| <code>Array</code> \| <code>Book</code> - If callback supplied, it is called and the function returns either an array of Books or a single Book instance. Otherwise promise is returned that resolves with either an array of Books or a single Book instance  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Asset |
| [params.resourceId] | <code>string</code> | ID of the Book |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_Books.api.search"></a>

#### api.search(params, callback) ⇒ <code>Promise</code> \| <code>Array</code>
Search Books for specified AMId and bookId

**Kind**: static method of <code>[api](#module_Books.api)</code>  
**Returns**: <code>Promise</code> \| <code>Array</code> - If callback supplied, it is called and the function returns an array of Books. Otherwise promise is returned that resolves with an array of Books  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.queryKey | <code>string</code> | Key of the category over which to search (e.g. bookIds) |
| params.queryValue | <code>string</code> | Value of the key for the search (e.g. 123 where 123 is a Book ID and queryKey = bookIds) |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_Netting"></a>

## Netting
API methods to send and retrieve Transaction Netting.
(Not ready yet)


* [Netting](#module_Netting)
    * [.api](#module_Netting.api) : <code>object</code>
        * [.retrieve(params)](#module_Netting.api.retrieve) ⇒ <code>Promise</code> \| <code>Array</code>
        * [.send()](#module_Netting.api.send) ⇒ <code>string</code>

<a name="module_Netting.api"></a>

### Netting.api : <code>object</code>
**Kind**: static namespace of <code>[Netting](#module_Netting)</code>  

* [.api](#module_Netting.api) : <code>object</code>
    * [.retrieve(params)](#module_Netting.api.retrieve) ⇒ <code>Promise</code> \| <code>Array</code>
    * [.send()](#module_Netting.api.send) ⇒ <code>string</code>

<a name="module_Netting.api.retrieve"></a>

#### api.retrieve(params) ⇒ <code>Promise</code> \| <code>Array</code>
Retrieve Netting for a specific Transaction

**Kind**: static method of <code>[api](#module_Netting.api)</code>  
**Returns**: <code>Promise</code> \| <code>Array</code> - If callback is supplied, it is called with ???. Otherwise a promise that resolves with ??? is returned  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of Transaction |
| params.resourceId | <code>string</code> | Transaction ID |
| params.token | <code>string</code> | Authorization token |

<a name="module_Netting.api.send"></a>

#### api.send() ⇒ <code>string</code>
Send Transactions to Net

**Kind**: static method of <code>[api](#module_Netting.api)</code>  
**Returns**: <code>string</code> - *  

| Type | Description |
| --- | --- |
| <code>string</code> | * |

<a name="module_Parties"></a>

## Parties
Classes and API methods for the Parties service


* [Parties](#module_Parties)
    * [.Class](#module_Parties.Class) : <code>object</code>
        * [.AssetManager](#module_Parties.Class.AssetManager) ⇐ <code>[Company](#module_Parties.Class.Company)</code>
            * [new AssetManager(params, (object))](#new_module_Parties.Class.AssetManager_new)
            * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
            * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
        * [.Broker](#module_Parties.Class.Broker) ⇐ <code>[Company](#module_Parties.Class.Company)</code>
            * [new Broker(params, (object))](#new_module_Parties.Class.Broker_new)
            * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
            * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
        * [.Address](#module_Parties.Class.Address) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
            * [new Address(params)](#new_module_Parties.Class.Address_new)
        * [.Email](#module_Parties.Class.Email) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
            * [new Email(params)](#new_module_Parties.Class.Email_new)
        * [.Company](#module_Parties.Class.Company) ⇐ <code>[Organisation](#module_Parties.Class.Organisation)</code>
            * [new Company(params, (object))](#new_module_Parties.Class.Company_new)
            * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
            * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
        * [.Exchange](#module_Parties.Class.Exchange) ⇐ <code>[Company](#module_Parties.Class.Company)</code>
            * [new Exchange(params, (object))](#new_module_Parties.Class.Exchange_new)
            * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
            * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
        * [.Fund](#module_Parties.Class.Fund) ⇐ <code>[Company](#module_Parties.Class.Company)</code>
            * [new Fund(params, (object))](#new_module_Parties.Class.Fund_new)
            * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
            * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
        * [.GovernmentAgency](#module_Parties.Class.GovernmentAgency) ⇐ <code>[Organisation](#module_Parties.Class.Organisation)</code>
            * [new GovernmentAgency(params, (object))](#new_module_Parties.Class.GovernmentAgency_new)
            * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
            * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
        * [.Individual](#module_Parties.Class.Individual) ⇐ <code>[Party](#module_Parties.Class.Party)</code>
            * [new Individual(params, (object))](#new_module_Parties.Class.Individual_new)
            * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
            * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
        * [.Organisation](#module_Parties.Class.Organisation) ⇐ <code>[Party](#module_Parties.Class.Party)</code>
            * [new Organisation(params, (object))](#new_module_Parties.Class.Organisation_new)
            * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
            * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
        * [.Party](#module_Parties.Class.Party) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
            * [new Party(params, (object))](#new_module_Parties.Class.Party_new)
            * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
            * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
    * [.api](#module_Parties.api) : <code>object</code>
        * [.retrieve(params, callback)](#module_Parties.api.retrieve) ⇒ <code>Promise</code> \| <code>Array</code> \| <code>Party</code>
        * [.insert(params, callback)](#module_Parties.api.insert) ⇒ <code>Promise</code> \| <code>Party</code>
        * [.amend(params, callback)](#module_Parties.api.amend) ⇒ <code>Promise</code> \| <code>Party</code>
        * [.partialAmend(params, callback)](#module_Parties.api.partialAmend) ⇒ <code>Promise</code> \| <code>Party</code>
        * [.deactivate(params, callback)](#module_Parties.api.deactivate)

<a name="module_Parties.Class"></a>

### Parties.Class : <code>object</code>
**Kind**: static namespace of <code>[Parties](#module_Parties)</code>  

* [.Class](#module_Parties.Class) : <code>object</code>
    * [.AssetManager](#module_Parties.Class.AssetManager) ⇐ <code>[Company](#module_Parties.Class.Company)</code>
        * [new AssetManager(params, (object))](#new_module_Parties.Class.AssetManager_new)
        * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
    * [.Broker](#module_Parties.Class.Broker) ⇐ <code>[Company](#module_Parties.Class.Company)</code>
        * [new Broker(params, (object))](#new_module_Parties.Class.Broker_new)
        * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
    * [.Address](#module_Parties.Class.Address) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
        * [new Address(params)](#new_module_Parties.Class.Address_new)
    * [.Email](#module_Parties.Class.Email) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
        * [new Email(params)](#new_module_Parties.Class.Email_new)
    * [.Company](#module_Parties.Class.Company) ⇐ <code>[Organisation](#module_Parties.Class.Organisation)</code>
        * [new Company(params, (object))](#new_module_Parties.Class.Company_new)
        * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
    * [.Exchange](#module_Parties.Class.Exchange) ⇐ <code>[Company](#module_Parties.Class.Company)</code>
        * [new Exchange(params, (object))](#new_module_Parties.Class.Exchange_new)
        * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
    * [.Fund](#module_Parties.Class.Fund) ⇐ <code>[Company](#module_Parties.Class.Company)</code>
        * [new Fund(params, (object))](#new_module_Parties.Class.Fund_new)
        * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
    * [.GovernmentAgency](#module_Parties.Class.GovernmentAgency) ⇐ <code>[Organisation](#module_Parties.Class.Organisation)</code>
        * [new GovernmentAgency(params, (object))](#new_module_Parties.Class.GovernmentAgency_new)
        * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
    * [.Individual](#module_Parties.Class.Individual) ⇐ <code>[Party](#module_Parties.Class.Party)</code>
        * [new Individual(params, (object))](#new_module_Parties.Class.Individual_new)
        * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
    * [.Organisation](#module_Parties.Class.Organisation) ⇐ <code>[Party](#module_Parties.Class.Party)</code>
        * [new Organisation(params, (object))](#new_module_Parties.Class.Organisation_new)
        * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)
    * [.Party](#module_Parties.Class.Party) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
        * [new Party(params, (object))](#new_module_Parties.Class.Party_new)
        * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
        * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)

<a name="module_Parties.Class.AssetManager"></a>

#### Class.AssetManager ⇐ <code>[Company](#module_Parties.Class.Company)</code>
Class representing an Asset Manager

**Kind**: static class of <code>[Class](#module_Parties.Class)</code>  
**Extends**: <code>[Company](#module_Parties.Class.Company)</code>  

* [.AssetManager](#module_Parties.Class.AssetManager) ⇐ <code>[Company](#module_Parties.Class.Company)</code>
    * [new AssetManager(params, (object))](#new_module_Parties.Class.AssetManager_new)
    * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)

<a name="new_module_Parties.Class.AssetManager_new"></a>

##### new AssetManager(params, (object))
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

<a name="module_Parties.Class.Party+upsertAddress"></a>

##### assetManager.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[AssetManager](#module_Parties.Class.AssetManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_Parties.Class.Party+upsertEmail"></a>

##### assetManager.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[AssetManager](#module_Parties.Class.AssetManager)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_Parties.Class.Broker"></a>

#### Class.Broker ⇐ <code>[Company](#module_Parties.Class.Company)</code>
Class representing a Broker

**Kind**: static class of <code>[Class](#module_Parties.Class)</code>  
**Extends**: <code>[Company](#module_Parties.Class.Company)</code>  

* [.Broker](#module_Parties.Class.Broker) ⇐ <code>[Company](#module_Parties.Class.Company)</code>
    * [new Broker(params, (object))](#new_module_Parties.Class.Broker_new)
    * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)

<a name="new_module_Parties.Class.Broker_new"></a>

##### new Broker(params, (object))
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

<a name="module_Parties.Class.Party+upsertAddress"></a>

##### broker.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Broker](#module_Parties.Class.Broker)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_Parties.Class.Party+upsertEmail"></a>

##### broker.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Broker](#module_Parties.Class.Broker)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_Parties.Class.Address"></a>

#### Class.Address ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
Class representing an Address

**Kind**: static class of <code>[Class](#module_Parties.Class)</code>  
**Extends**: <code>[AMaaSModel](#module_Core.AMaaSModel)</code>  
<a name="new_module_Parties.Class.Address_new"></a>

##### new Address(params)
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

<a name="module_Parties.Class.Email"></a>

#### Class.Email ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
Class representing an Email

**Kind**: static class of <code>[Class](#module_Parties.Class)</code>  
**Extends**: <code>[AMaaSModel](#module_Core.AMaaSModel)</code>  
<a name="new_module_Parties.Class.Email_new"></a>

##### new Email(params)
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

<a name="module_Parties.Class.Company"></a>

#### Class.Company ⇐ <code>[Organisation](#module_Parties.Class.Organisation)</code>
Class representing a Company

**Kind**: static class of <code>[Class](#module_Parties.Class)</code>  
**Extends**: <code>[Organisation](#module_Parties.Class.Organisation)</code>  

* [.Company](#module_Parties.Class.Company) ⇐ <code>[Organisation](#module_Parties.Class.Organisation)</code>
    * [new Company(params, (object))](#new_module_Parties.Class.Company_new)
    * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)

<a name="new_module_Parties.Class.Company_new"></a>

##### new Company(params, (object))
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

<a name="module_Parties.Class.Party+upsertAddress"></a>

##### company.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Company](#module_Parties.Class.Company)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_Parties.Class.Party+upsertEmail"></a>

##### company.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Company](#module_Parties.Class.Company)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_Parties.Class.Exchange"></a>

#### Class.Exchange ⇐ <code>[Company](#module_Parties.Class.Company)</code>
Class representing an Exchange

**Kind**: static class of <code>[Class](#module_Parties.Class)</code>  
**Extends**: <code>[Company](#module_Parties.Class.Company)</code>  

* [.Exchange](#module_Parties.Class.Exchange) ⇐ <code>[Company](#module_Parties.Class.Company)</code>
    * [new Exchange(params, (object))](#new_module_Parties.Class.Exchange_new)
    * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)

<a name="new_module_Parties.Class.Exchange_new"></a>

##### new Exchange(params, (object))
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

<a name="module_Parties.Class.Party+upsertAddress"></a>

##### exchange.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Exchange](#module_Parties.Class.Exchange)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_Parties.Class.Party+upsertEmail"></a>

##### exchange.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Exchange](#module_Parties.Class.Exchange)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_Parties.Class.Fund"></a>

#### Class.Fund ⇐ <code>[Company](#module_Parties.Class.Company)</code>
Class representing a Fund

**Kind**: static class of <code>[Class](#module_Parties.Class)</code>  
**Extends**: <code>[Company](#module_Parties.Class.Company)</code>  

* [.Fund](#module_Parties.Class.Fund) ⇐ <code>[Company](#module_Parties.Class.Company)</code>
    * [new Fund(params, (object))](#new_module_Parties.Class.Fund_new)
    * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)

<a name="new_module_Parties.Class.Fund_new"></a>

##### new Fund(params, (object))
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

<a name="module_Parties.Class.Party+upsertAddress"></a>

##### fund.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Fund](#module_Parties.Class.Fund)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_Parties.Class.Party+upsertEmail"></a>

##### fund.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Fund](#module_Parties.Class.Fund)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_Parties.Class.GovernmentAgency"></a>

#### Class.GovernmentAgency ⇐ <code>[Organisation](#module_Parties.Class.Organisation)</code>
Class representing a Government Agency

**Kind**: static class of <code>[Class](#module_Parties.Class)</code>  
**Extends**: <code>[Organisation](#module_Parties.Class.Organisation)</code>  

* [.GovernmentAgency](#module_Parties.Class.GovernmentAgency) ⇐ <code>[Organisation](#module_Parties.Class.Organisation)</code>
    * [new GovernmentAgency(params, (object))](#new_module_Parties.Class.GovernmentAgency_new)
    * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)

<a name="new_module_Parties.Class.GovernmentAgency_new"></a>

##### new GovernmentAgency(params, (object))
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

<a name="module_Parties.Class.Party+upsertAddress"></a>

##### governmentAgency.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[GovernmentAgency](#module_Parties.Class.GovernmentAgency)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_Parties.Class.Party+upsertEmail"></a>

##### governmentAgency.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[GovernmentAgency](#module_Parties.Class.GovernmentAgency)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_Parties.Class.Individual"></a>

#### Class.Individual ⇐ <code>[Party](#module_Parties.Class.Party)</code>
Class representing an Individual

**Kind**: static class of <code>[Class](#module_Parties.Class)</code>  
**Extends**: <code>[Party](#module_Parties.Class.Party)</code>  

* [.Individual](#module_Parties.Class.Individual) ⇐ <code>[Party](#module_Parties.Class.Party)</code>
    * [new Individual(params, (object))](#new_module_Parties.Class.Individual_new)
    * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)

<a name="new_module_Parties.Class.Individual_new"></a>

##### new Individual(params, (object))
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

<a name="module_Parties.Class.Party+upsertAddress"></a>

##### individual.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Individual](#module_Parties.Class.Individual)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_Parties.Class.Party+upsertEmail"></a>

##### individual.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Individual](#module_Parties.Class.Individual)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_Parties.Class.Organisation"></a>

#### Class.Organisation ⇐ <code>[Party](#module_Parties.Class.Party)</code>
Class representing an Organisation

**Kind**: static class of <code>[Class](#module_Parties.Class)</code>  
**Extends**: <code>[Party](#module_Parties.Class.Party)</code>  

* [.Organisation](#module_Parties.Class.Organisation) ⇐ <code>[Party](#module_Parties.Class.Party)</code>
    * [new Organisation(params, (object))](#new_module_Parties.Class.Organisation_new)
    * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)

<a name="new_module_Parties.Class.Organisation_new"></a>

##### new Organisation(params, (object))
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

<a name="module_Parties.Class.Party+upsertAddress"></a>

##### organisation.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Organisation](#module_Parties.Class.Organisation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_Parties.Class.Party+upsertEmail"></a>

##### organisation.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Organisation](#module_Parties.Class.Organisation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_Parties.Class.Party"></a>

#### Class.Party ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
Class representing a Party

**Kind**: static class of <code>[Class](#module_Parties.Class)</code>  
**Extends**: <code>[AMaaSModel](#module_Core.AMaaSModel)</code>  

* [.Party](#module_Parties.Class.Party) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
    * [new Party(params, (object))](#new_module_Parties.Class.Party_new)
    * [.upsertAddress(type, address)](#module_Parties.Class.Party+upsertAddress)
    * [.upsertEmail(type, email)](#module_Parties.Class.Party+upsertEmail)

<a name="new_module_Parties.Class.Party_new"></a>

##### new Party(params, (object))
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

<a name="module_Parties.Class.Party+upsertAddress"></a>

##### party.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Party](#module_Parties.Class.Party)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>Address</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="module_Parties.Class.Party+upsertEmail"></a>

##### party.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Party](#module_Parties.Class.Party)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="module_Parties.api"></a>

### Parties.api : <code>object</code>
**Kind**: static namespace of <code>[Parties](#module_Parties)</code>  

* [.api](#module_Parties.api) : <code>object</code>
    * [.retrieve(params, callback)](#module_Parties.api.retrieve) ⇒ <code>Promise</code> \| <code>Array</code> \| <code>Party</code>
    * [.insert(params, callback)](#module_Parties.api.insert) ⇒ <code>Promise</code> \| <code>Party</code>
    * [.amend(params, callback)](#module_Parties.api.amend) ⇒ <code>Promise</code> \| <code>Party</code>
    * [.partialAmend(params, callback)](#module_Parties.api.partialAmend) ⇒ <code>Promise</code> \| <code>Party</code>
    * [.deactivate(params, callback)](#module_Parties.api.deactivate)

<a name="module_Parties.api.retrieve"></a>

#### api.retrieve(params, callback) ⇒ <code>Promise</code> \| <code>Array</code> \| <code>Party</code>
Retrieve Party data for specified AMId and partyId

**Kind**: static method of <code>[api](#module_Parties.api)</code>  
**Returns**: <code>Promise</code> \| <code>Array</code> \| <code>Party</code> - - If callback supplied, it is called and function returns either a Party instance of array of Party instances. Otherwise promise that resolves with Party instance or array of Party instances is returned  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>number</code> | Asset Manager ID of the Party |
| [params.partyId] | <code>string</code> | Party ID of the Party. Omitting this will return all Parties associated with that AMId |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_Parties.api.insert"></a>

#### api.insert(params, callback) ⇒ <code>Promise</code> \| <code>Party</code>
Insert a new Party into the database

**Kind**: static method of <code>[api](#module_Parties.api)</code>  
**Returns**: <code>Promise</code> \| <code>Party</code> - If callback is supplied, it is called and function returns the inserted Party instance. Otherwise promise that resolves with inserted Party instance is returned  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.party | <code>Party</code> | Party instance to insert |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_Parties.api.amend"></a>

#### api.amend(params, callback) ⇒ <code>Promise</code> \| <code>Party</code>
Amend an existing Party. WARNING: This makes a HTTP PUT request and will replace the existing Party with the one passed in

**Kind**: static method of <code>[api](#module_Parties.api)</code>  
**Returns**: <code>Promise</code> \| <code>Party</code> - If callback is supplied, it is called and function returns the amended Party instance. Otherwise promise that resolves with amended Party instance is returned  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.party | <code>Party</code> | Amended Party instance to PUT |
| params.AMId | <code>number</code> | AMId of the Party to amend |
| params.resourceId | <code>string</code> | Party ID of the Party to amend |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_Parties.api.partialAmend"></a>

#### api.partialAmend(params, callback) ⇒ <code>Promise</code> \| <code>Party</code>
Partially amend an existing Party.

**Kind**: static method of <code>[api](#module_Parties.api)</code>  
**Returns**: <code>Promise</code> \| <code>Party</code> - If callback is supplied, it is called and function returns the amended Party instance. Otherwise a promise that resolves with the amended Party instance is returned  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.changes | <code>object</code> | Object of changes to the Party. |
| params.AMId | <code>string</code> | AMId of the Party to be partially amended |
| params.resourceId | <code>string</code> | Party ID of the Party to be partially amended |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_Parties.api.deactivate"></a>

#### api.deactivate(params, callback)
Deactivate an exising Party. This will set the Party status to 'Inactive'

**Kind**: static method of <code>[api](#module_Parties.api)</code>  
**Erturns**: <code>PRomise\|string</code> If callback is supplied, it is called and the function returns ???. Otherwise a promise that resolves with ??? is returned  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | object of parameters: |
| params.AMId | <code>string</code> | AMId of the Party to be deleted |
| params.resourceId | <code>string</code> | Party ID of the Party to be deleted |
| params.token | <code>string</code> | Authorization token |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="module_Transactions"></a>

## Transactions
Classes and API methods for the Transactions service. (Not ready yet)


* [Transactions](#module_Transactions)
    * [.Class](#module_Transactions.Class) : <code>object</code>
        * [.PartyChild](#module_Transactions.Class.PartyChild) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
            * [new PartyChild(params)](#new_module_Transactions.Class.PartyChild_new)
        * [.Transaction](#module_Transactions.Class.Transaction) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
            * [new Transaction(params)](#new_module_Transactions.Class.Transaction_new)

<a name="module_Transactions.Class"></a>

### Transactions.Class : <code>object</code>
**Kind**: static namespace of <code>[Transactions](#module_Transactions)</code>  

* [.Class](#module_Transactions.Class) : <code>object</code>
    * [.PartyChild](#module_Transactions.Class.PartyChild) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
        * [new PartyChild(params)](#new_module_Transactions.Class.PartyChild_new)
    * [.Transaction](#module_Transactions.Class.Transaction) ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
        * [new Transaction(params)](#new_module_Transactions.Class.Transaction_new)

<a name="module_Transactions.Class.PartyChild"></a>

#### Class.PartyChild ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
Class representing a Party (a Transaction children type)

**Kind**: static class of <code>[Class](#module_Transactions.Class)</code>  
**Extends**: <code>[AMaaSModel](#module_Core.AMaaSModel)</code>, <code>AMaaSModel</code>  
<a name="new_module_Transactions.Class.PartyChild_new"></a>

##### new PartyChild(params)
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

<a name="module_Transactions.Class.Transaction"></a>

#### Class.Transaction ⇐ <code>[AMaaSModel](#module_Core.AMaaSModel)</code>
Class representing a Transaction

**Kind**: static class of <code>[Class](#module_Transactions.Class)</code>  
**Extends**: <code>[AMaaSModel](#module_Core.AMaaSModel)</code>  
<a name="new_module_Transactions.Class.Transaction_new"></a>

##### new Transaction(params)
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
