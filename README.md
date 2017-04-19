# amaas-core-sdk-js

This is the Asset Management as a Service (AMaaS) Software Development Kit (SDK) for JavaScript

### Installation

Coming soon

## API Reference

## Modules

<dl>
<dt><a href="#module_Assets">Assets</a></dt>
<dd></dd>
<dt><a href="#module_Assets">Assets</a></dt>
<dd></dd>
<dt><a href="#module_Assets">Assets</a></dt>
<dd></dd>
<dt><a href="#module_Assets">Assets</a></dt>
<dd></dd>
<dt><a href="#module_Assets">Assets</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#AssetManager">AssetManager</a> ⇐ <code><a href="#AMaaSModel">AMaaSModel</a></code></dt>
<dd><p>Class representing an Asset Manager</p>
</dd>
<dt><a href="#Relationship">Relationship</a> ⇐ <code><a href="#AMaaSModel">AMaaSModel</a></code></dt>
<dd><p>Class representing a Relationship</p>
</dd>
<dt><a href="#Book">Book</a> ⇐ <code><a href="#AMaaSModel">AMaaSModel</a></code></dt>
<dd><p>Class representing a Book</p>
</dd>
<dt><a href="#PartyChild">PartyChild</a> ⇐ <code><a href="#AMaaSModel">AMaaSModel</a></code></dt>
<dd><p>Class representing a Party (a Transaction children type)</p>
</dd>
<dt><a href="#AMaaSModel">AMaaSModel</a></dt>
<dd><p>Class representing a AMaaSModel.
This is the Base Class for almost every other class</p>
</dd>
<dt><a href="#Reference">Reference</a> ⇐ <code><a href="#AMaaSModel">AMaaSModel</a></code></dt>
<dd><p>Class representing a Reference</p>
</dd>
<dt><a href="#Broker">Broker</a> ⇐ <code><a href="#Company">Company</a></code></dt>
<dd><p>Class representing a Broker</p>
</dd>
<dt><a href="#Address">Address</a> ⇐ <code><a href="#AMaaSModel">AMaaSModel</a></code></dt>
<dd><p>Class representing an Address</p>
</dd>
<dt><a href="#Email">Email</a> ⇐ <code><a href="#AMaaSModel">AMaaSModel</a></code></dt>
<dd><p>Class representing an Email</p>
</dd>
<dt><a href="#Company">Company</a> ⇐ <code><a href="#Organisation">Organisation</a></code></dt>
<dd><p>Class representing a Company</p>
</dd>
<dt><a href="#Exchange">Exchange</a> ⇐ <code><a href="#Company">Company</a></code></dt>
<dd><p>Class representing an Exchange</p>
</dd>
<dt><a href="#Fund">Fund</a> ⇐ <code><a href="#Company">Company</a></code></dt>
<dd><p>Class representing a Fund</p>
</dd>
<dt><a href="#GovernmentAgency">GovernmentAgency</a> ⇐ <code><a href="#Organisation">Organisation</a></code></dt>
<dd><p>Class representing a Government Agency</p>
</dd>
<dt><a href="#Individual">Individual</a> ⇐ <code><a href="#Party">Party</a></code></dt>
<dd><p>Class representing an Individual</p>
</dd>
<dt><a href="#Organisation">Organisation</a> ⇐ <code><a href="#Party">Party</a></code></dt>
<dd><p>Class representing an Organisation</p>
</dd>
<dt><a href="#Party">Party</a> ⇐ <code><a href="#AMaaSModel">AMaaSModel</a></code></dt>
<dd><p>Class representing a Party</p>
</dd>
<dt><a href="#PartyChild">PartyChild</a> ⇐ <code><a href="#AMaaSModel">AMaaSModel</a></code></dt>
<dd><p>Class representing a Party (a Transaction children type)</p>
</dd>
<dt><a href="#Transaction">Transaction</a> ⇐ <code><a href="#AMaaSModel">AMaaSModel</a></code></dt>
<dd><p>Class representing a Transaction</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#retrieve">retrieve(AMId, resourceId, token)</a></dt>
<dd><p>Retrieve Allocations for a specific Transaction</p>
</dd>
<dt><a href="#send">send(AMId, resourceId, data, token)</a></dt>
<dd><p>Send Allocations for a specific Transaction</p>
</dd>
<dt><a href="#retrieve">retrieve(AMId, callback)</a></dt>
<dd><p>Retrieve Asset Manager data for specified Asset Manager ID</p>
</dd>
<dt><a href="#insert">insert(assetManager, callback)</a></dt>
<dd><p>Insert a new Asset Manager into the database</p>
</dd>
<dt><a href="#deactivate">deactivate(AMId, callback)</a></dt>
<dd><p>Deactive an existing Asset Manager (AM)</p>
</dd>
<dt><a href="#retrieve">retrieve(AMId, [partyId], callback)</a></dt>
<dd><p>Retrieve Asset data for specified AMId and partyId</p>
</dd>
<dt><a href="#insert">insert(asset, callback)</a></dt>
<dd><p>Insert a new Asset into the database</p>
</dd>
<dt><a href="#amend">amend(asset, AMId, resourceId, callback)</a></dt>
<dd><p>Amend an existing Asset. WARNING: This makes a HTTP PUT request and will replace the existing Asset with the one passed in</p>
</dd>
<dt><a href="#partialAmend">partialAmend(changes, AMId, resourceId, callback)</a></dt>
<dd><p>Partially amend an existing Asset.</p>
</dd>
<dt><a href="#deactivate">deactivate(AMId, resourceId, callback)</a></dt>
<dd><p>Delete an exising Asset. This will set the Asset status to &#39;Inactive&#39;.</p>
</dd>
<dt><a href="#retrieve">retrieve(AMId, [bookId], callback)</a></dt>
<dd><p>Retrieve Book data for specified AMId and bookId</p>
</dd>
<dt><a href="#retrieve">retrieve(AMId, resourceId, token)</a></dt>
<dd><p>Retrieve Netting for a specific Transaction</p>
</dd>
<dt><a href="#send">send(AMId, data, token)</a></dt>
<dd><p>Send Transactions to Net</p>
</dd>
<dt><a href="#retrieve">retrieve(AMId, [partyId], callback)</a></dt>
<dd><p>Retrieve Party data for specified AMId and partyId</p>
</dd>
<dt><a href="#insert">insert(party, callback)</a></dt>
<dd><p>Insert a new Party into the database</p>
</dd>
<dt><a href="#amend">amend(party, AMId, resourceId, callback)</a></dt>
<dd><p>Amend an existing Party. WARNING: This makes a HTTP PUT request and will replace the existing Party with the one passed in</p>
</dd>
<dt><a href="#partialAmend">partialAmend(changes, AMId, resourceId, callback)</a></dt>
<dd><p>Partially amend an existing Party.</p>
</dd>
<dt><a href="#deactivate">deactivate(AMId, resourceId, callback)</a></dt>
<dd><p>Delete an exising Party. This will set the Party status to &#39;Inactive&#39;.</p>
</dd>
</dl>

<a name="module_Assets"></a>

## Assets

* [Assets](#module_Assets)
    * [~Asset](#module_Assets..Asset) ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
        * [new Asset(params)](#new_module_Assets..Asset_new)
    * [~Currency](#module_Assets..Currency) ⇐ <code>Asset</code>
        * [new Currency(params)](#new_module_Assets..Currency_new)
    * [~CustomAsset](#module_Assets..CustomAsset) ⇐ <code>Asset</code>
        * [new CustomAsset(params)](#new_module_Assets..CustomAsset_new)
    * [~Equity](#module_Assets..Equity) ⇐ <code>Asset</code>
        * [new Equity(params)](#new_module_Assets..Equity_new)
    * [~ForeignExchangeOption](#module_Assets..ForeignExchangeOption) ⇐ <code>Asset</code>
        * [new ForeignExchangeOption(params)](#new_module_Assets..ForeignExchangeOption_new)

<a name="module_Assets..Asset"></a>

### Assets~Asset ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
Class representing an Asset

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>[AMaaSModel](#AMaaSModel)</code>  
<a name="new_module_Assets..Asset_new"></a>

#### new Asset(params)
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
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..Currency"></a>

### Assets~Currency ⇐ <code>Asset</code>
Class representing an Currency

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..Currency_new"></a>

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
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..CustomAsset"></a>

### Assets~CustomAsset ⇐ <code>Asset</code>
Class representing an Custom Asset

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..CustomAsset_new"></a>

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
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset (set in the Custom Asset class) |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..Equity"></a>

### Assets~Equity ⇐ <code>Asset</code>
Class representing an Equity

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..Equity_new"></a>

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
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..ForeignExchangeOption"></a>

### Assets~ForeignExchangeOption ⇐ <code>Asset</code>
Class representing an FX Option

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..ForeignExchangeOption_new"></a>

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
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets"></a>

## Assets

* [Assets](#module_Assets)
    * [~Asset](#module_Assets..Asset) ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
        * [new Asset(params)](#new_module_Assets..Asset_new)
    * [~Currency](#module_Assets..Currency) ⇐ <code>Asset</code>
        * [new Currency(params)](#new_module_Assets..Currency_new)
    * [~CustomAsset](#module_Assets..CustomAsset) ⇐ <code>Asset</code>
        * [new CustomAsset(params)](#new_module_Assets..CustomAsset_new)
    * [~Equity](#module_Assets..Equity) ⇐ <code>Asset</code>
        * [new Equity(params)](#new_module_Assets..Equity_new)
    * [~ForeignExchangeOption](#module_Assets..ForeignExchangeOption) ⇐ <code>Asset</code>
        * [new ForeignExchangeOption(params)](#new_module_Assets..ForeignExchangeOption_new)

<a name="module_Assets..Asset"></a>

### Assets~Asset ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
Class representing an Asset

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>[AMaaSModel](#AMaaSModel)</code>  
<a name="new_module_Assets..Asset_new"></a>

#### new Asset(params)
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
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..Currency"></a>

### Assets~Currency ⇐ <code>Asset</code>
Class representing an Currency

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..Currency_new"></a>

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
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..CustomAsset"></a>

### Assets~CustomAsset ⇐ <code>Asset</code>
Class representing an Custom Asset

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..CustomAsset_new"></a>

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
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset (set in the Custom Asset class) |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..Equity"></a>

### Assets~Equity ⇐ <code>Asset</code>
Class representing an Equity

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..Equity_new"></a>

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
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..ForeignExchangeOption"></a>

### Assets~ForeignExchangeOption ⇐ <code>Asset</code>
Class representing an FX Option

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..ForeignExchangeOption_new"></a>

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
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets"></a>

## Assets

* [Assets](#module_Assets)
    * [~Asset](#module_Assets..Asset) ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
        * [new Asset(params)](#new_module_Assets..Asset_new)
    * [~Currency](#module_Assets..Currency) ⇐ <code>Asset</code>
        * [new Currency(params)](#new_module_Assets..Currency_new)
    * [~CustomAsset](#module_Assets..CustomAsset) ⇐ <code>Asset</code>
        * [new CustomAsset(params)](#new_module_Assets..CustomAsset_new)
    * [~Equity](#module_Assets..Equity) ⇐ <code>Asset</code>
        * [new Equity(params)](#new_module_Assets..Equity_new)
    * [~ForeignExchangeOption](#module_Assets..ForeignExchangeOption) ⇐ <code>Asset</code>
        * [new ForeignExchangeOption(params)](#new_module_Assets..ForeignExchangeOption_new)

<a name="module_Assets..Asset"></a>

### Assets~Asset ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
Class representing an Asset

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>[AMaaSModel](#AMaaSModel)</code>  
<a name="new_module_Assets..Asset_new"></a>

#### new Asset(params)
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
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..Currency"></a>

### Assets~Currency ⇐ <code>Asset</code>
Class representing an Currency

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..Currency_new"></a>

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
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..CustomAsset"></a>

### Assets~CustomAsset ⇐ <code>Asset</code>
Class representing an Custom Asset

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..CustomAsset_new"></a>

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
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset (set in the Custom Asset class) |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..Equity"></a>

### Assets~Equity ⇐ <code>Asset</code>
Class representing an Equity

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..Equity_new"></a>

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
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..ForeignExchangeOption"></a>

### Assets~ForeignExchangeOption ⇐ <code>Asset</code>
Class representing an FX Option

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..ForeignExchangeOption_new"></a>

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
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets"></a>

## Assets

* [Assets](#module_Assets)
    * [~Asset](#module_Assets..Asset) ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
        * [new Asset(params)](#new_module_Assets..Asset_new)
    * [~Currency](#module_Assets..Currency) ⇐ <code>Asset</code>
        * [new Currency(params)](#new_module_Assets..Currency_new)
    * [~CustomAsset](#module_Assets..CustomAsset) ⇐ <code>Asset</code>
        * [new CustomAsset(params)](#new_module_Assets..CustomAsset_new)
    * [~Equity](#module_Assets..Equity) ⇐ <code>Asset</code>
        * [new Equity(params)](#new_module_Assets..Equity_new)
    * [~ForeignExchangeOption](#module_Assets..ForeignExchangeOption) ⇐ <code>Asset</code>
        * [new ForeignExchangeOption(params)](#new_module_Assets..ForeignExchangeOption_new)

<a name="module_Assets..Asset"></a>

### Assets~Asset ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
Class representing an Asset

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>[AMaaSModel](#AMaaSModel)</code>  
<a name="new_module_Assets..Asset_new"></a>

#### new Asset(params)
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
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..Currency"></a>

### Assets~Currency ⇐ <code>Asset</code>
Class representing an Currency

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..Currency_new"></a>

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
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..CustomAsset"></a>

### Assets~CustomAsset ⇐ <code>Asset</code>
Class representing an Custom Asset

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..CustomAsset_new"></a>

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
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset (set in the Custom Asset class) |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..Equity"></a>

### Assets~Equity ⇐ <code>Asset</code>
Class representing an Equity

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..Equity_new"></a>

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
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..ForeignExchangeOption"></a>

### Assets~ForeignExchangeOption ⇐ <code>Asset</code>
Class representing an FX Option

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..ForeignExchangeOption_new"></a>

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
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets"></a>

## Assets

* [Assets](#module_Assets)
    * [~Asset](#module_Assets..Asset) ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
        * [new Asset(params)](#new_module_Assets..Asset_new)
    * [~Currency](#module_Assets..Currency) ⇐ <code>Asset</code>
        * [new Currency(params)](#new_module_Assets..Currency_new)
    * [~CustomAsset](#module_Assets..CustomAsset) ⇐ <code>Asset</code>
        * [new CustomAsset(params)](#new_module_Assets..CustomAsset_new)
    * [~Equity](#module_Assets..Equity) ⇐ <code>Asset</code>
        * [new Equity(params)](#new_module_Assets..Equity_new)
    * [~ForeignExchangeOption](#module_Assets..ForeignExchangeOption) ⇐ <code>Asset</code>
        * [new ForeignExchangeOption(params)](#new_module_Assets..ForeignExchangeOption_new)

<a name="module_Assets..Asset"></a>

### Assets~Asset ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
Class representing an Asset

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>[AMaaSModel](#AMaaSModel)</code>  
<a name="new_module_Assets..Asset_new"></a>

#### new Asset(params)
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
| params.comments | <code>object</code> | Object of Comments attached to the Asset |
| params.links | <code>object</code> | Object of array of Links attached to the Asset |
| params.references | <code>object</code> | Object of References associated with this Asset |
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..Currency"></a>

### Assets~Currency ⇐ <code>Asset</code>
Class representing an Currency

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..Currency_new"></a>

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
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..CustomAsset"></a>

### Assets~CustomAsset ⇐ <code>Asset</code>
Class representing an Custom Asset

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..CustomAsset_new"></a>

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
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset (set in the Custom Asset class) |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..Equity"></a>

### Assets~Equity ⇐ <code>Asset</code>
Class representing an Equity

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..Equity_new"></a>

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
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="module_Assets..ForeignExchangeOption"></a>

### Assets~ForeignExchangeOption ⇐ <code>Asset</code>
Class representing an FX Option

**Kind**: inner class of <code>[Assets](#module_Assets)</code>  
**Extends:** <code>Asset</code>  
<a name="new_module_Assets..ForeignExchangeOption_new"></a>

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
| params.clientAdditional | <code>object</code> | Object of custom properties for creating a Custom Asset |
| params.createdBy | <code>string</code> | ID of the user that created this object |
| params.updatedBy | <code>string</code> | ID of the user that updated this object |
| params.createdTime | <code>date</code> | Time that the Asset was created |
| params.updatedTime | <code>date</code> | Time that the Asset was updated |
| params.version | <code>number</code> | Version number |

<a name="AssetManager"></a>

## AssetManager ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
Class representing an Asset Manager

**Kind**: global class  
**Extends:** <code>[AMaaSModel](#AMaaSModel)</code>  
<a name="new_AssetManager_new"></a>

### new AssetManager(params)
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
| params.createdBy | <code>string</code> | ID of the user that created the Asset Manager (required if creating a new Asset Manager) |
| params.updatedBy | <code>string</code> | ID of the user that updated the Asset Manager (use if amending existing Asset Manager) |
| params.createdTime | <code>date</code> | Time that the Asset Manager was created (required if creating new Asset Manager) |
| params.updatedTime | <code>date</code> | Time that the Asset Manager was updated (required if amending existing Asset Manager) |
| params.version | <code>number</code> | Version number of the Asset Manager |

<a name="Relationship"></a>

## Relationship ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
Class representing a Relationship

**Kind**: global class  
**Extends:** <code>[AMaaSModel](#AMaaSModel)</code>  
<a name="new_Relationship_new"></a>

### new Relationship(params, assetManagerId, relationId, relationshipType, clientId)
Construct a new Relationship instance


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Relationship creation options |
| assetManagerId | <code>number</code> | ID of the Asset Manager who owns this Relationship |
| relationId | <code>number</code> | ID of the Asset Manager to whom this Relationship connects |
| relationshipType | <code>string</code> | The type of Relationship between these Asset Managers |
| clientId | <code>string</code> | The client ID that owns this Relationship |
|  | <code>relationshipStatus</code> | The status of the Relationship |
| params.createdBy | <code>string</code> | ID of the user that created the Relationship (required if creating a new Relationship) |
| params.updatedBy | <code>string</code> | ID of the user that updated the Relationship (use if amending existing Relationship) |
| params.createdTime | <code>date</code> | Time that the Relationship was created (required if creating new Relationship) |
| params.updatedTime | <code>date</code> | Time that the Relationship was updated (required if amending existing Relationship) |
| params.version | <code>number</code> | Version number of the Relationship |

<a name="Book"></a>

## Book ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
Class representing a Book

**Kind**: global class  
**Extends:** <code>[AMaaSModel](#AMaaSModel)</code>  
<a name="new_Book_new"></a>

### new Book(params)
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

<a name="PartyChild"></a>

## PartyChild ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
Class representing a Party (a Transaction children type)

**Kind**: global class  
**Extends:** <code>[AMaaSModel](#AMaaSModel)</code>  

* [PartyChild](#PartyChild) ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
    * [new PartyChild(params)](#new_PartyChild_new)
    * [new PartyChild(params)](#new_PartyChild_new)

<a name="new_PartyChild_new"></a>

### new PartyChild(params)
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

<a name="new_PartyChild_new"></a>

### new PartyChild(params)
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

<a name="AMaaSModel"></a>

## AMaaSModel
Class representing a AMaaSModel.
This is the Base Class for almost every other class

**Kind**: global class  
<a name="new_AMaaSModel_new"></a>

### new AMaaSModel(params)
Construct new AMaaSModel object


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | AMaaSModelparams. creation options |
| params.createdBy | <code>string</code> | ID of the user that created this object (required if creating a new AMaaSModel) |
| params.updatedBy | <code>string</code> | ID of the user that updated this object (use if amending existing AMaaSModel) |
| params.createdTime | <code>date</code> | Time that the AMaaSModel was created (required if creating new AMaaSModel) |
| params.updatedTime | <code>date</code> | Time that the AMaaSModel was updated (required if amending existing AMaaSModel) |
| params.version | <code>number</code> | Version number of the AMaaSModel |

<a name="Reference"></a>

## Reference ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
Class representing a Reference

**Kind**: global class  
**Extends:** <code>[AMaaSModel](#AMaaSModel)</code>  
<a name="new_Reference_new"></a>

### new Reference(params)
Construct a new Reference object


| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Reference creation options |
| params.referenceValue | <code>string</code> | The identifier of this Reference (e.g. transactionId) |
| params.createdBy | <code>string</code> | ID of the user that created this object (required if creating a new Reference) |
| params.updatedBy | <code>string</code> | ID of the user that updated this object (use if amending existing Reference) |
| params.createdTime | <code>date</code> | Time that the Reference was created (required if creating new Reference) |
| params.updatedTime | <code>date</code> | Time that the Reference was updated (required if amending existing Reference) |
| params.version | <code>number</code> | Version number of the Reference |

<a name="Broker"></a>

## Broker ⇐ <code>[Company](#Company)</code>
Class representing a Broker

**Kind**: global class  
**Extends:** <code>[Company](#Company)</code>  
<a name="new_Broker_new"></a>

### new Broker(params, (object))

| Param | Type | Description |
| --- | --- | --- |
| params | <code>object</code> | Broker creation options |
| params.assetManagerId | <code>number</code> | Asset Manager ID of the Broker |
| params.partyId | <code>string</code> | Party ID of the Broker |
| params.partyStatus | <code>string</code> | Status of the Broker (e.g. 'Active') |
| params.partyClass | <code>string</code> | Class of the Broker |
| params.description | <code>string</code> | Description of the Broker |
| params.addresses | <code>object</code> | Object of Addresses associated with this Broker |
| (object) |  | params.emails - Object of Emails associated with this Broker |
| params.references | <code>object</code> | Object of References associated with this Broker |
| params.createdBy | <code>string</code> | ID of the user that created the Broker (required if creating a new Broker) |
| params.updatedBy | <code>string</code> | ID of the user that updated the Broker (use if amending existing Broker) |
| params.createdTime | <code>date</code> | Time that the Broker was created (required if creating new Broker) |
| params.updatedTime | <code>date</code> | Time that the Broker was updated (required if amending existing Broker) |
| params.version | <code>number</code> | Version number of the Broker |

<a name="Address"></a>

## Address ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
Class representing an Address

**Kind**: global class  
**Extends:** <code>[AMaaSModel](#AMaaSModel)</code>  
<a name="new_Address_new"></a>

### new Address(params)
Construct a new Address object


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
| params.createdBy | <code>string</code> | ID of the user that created the Address (required if creating a new Address) |
| params.updatedBy | <code>string</code> | ID of the user that updated the Address (use if amending existing Address) |
| params.createdTime | <code>date</code> | Time that the Address was created (required if creating new Address) |
| params.updatedTime | <code>date</code> | Time that the Address was updated (required if amending existing Address) |
| params.version | <code>number</code> | Version number of the Address |

<a name="Email"></a>

## Email ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
Class representing an Email

**Kind**: global class  
**Extends:** <code>[AMaaSModel](#AMaaSModel)</code>  
<a name="new_Email_new"></a>

### new Email(params)
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

<a name="Company"></a>

## Company ⇐ <code>[Organisation](#Organisation)</code>
Class representing a Company

**Kind**: global class  
**Extends:** <code>[Organisation](#Organisation)</code>  
<a name="new_Company_new"></a>

### new Company(params, (object))
Construct a new Company object


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Company creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Company |
| params.partyId | <code>string</code> |  | Party ID of the Company |
| params.partyStatus | <code>string</code> |  | Status of the Company (e.g. 'Active') |
| params.partyClass | <code>string</code> | <code>&quot;Company&quot;</code> | Class of the Company |
| params.partyType | <code>string</code> | <code>&quot;Company&quot;</code> | Type of the Company |
| params.description | <code>string</code> |  | Description of the Company |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Company |
| (object) |  |  | params.emails - Object of Emails associated with this Company |
| params.references | <code>object</code> |  | Object of References associated with this Company |
| params.createdBy | <code>string</code> |  | ID of the user that created the Company (required if creating a new Company) |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Company (use if amending existing Company) |
| params.createdTime | <code>date</code> |  | Time that the Company was created (required if creating new Company) |
| params.updatedTime | <code>date</code> |  | Time that the Company was updated (required if amending existing Company) |
| params.version | <code>number</code> |  | Version number of the Company |

<a name="Exchange"></a>

## Exchange ⇐ <code>[Company](#Company)</code>
Class representing an Exchange

**Kind**: global class  
**Extends:** <code>[Company](#Company)</code>  
<a name="new_Exchange_new"></a>

### new Exchange(params, (object))
Construct a new Exchange object


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Exchange creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Exchange |
| params.partyId | <code>string</code> |  | Party ID of the Exchange |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Exchange (e.g. 'Active') |
| params.partyClass | <code>string</code> | <code>&quot;Company&quot;</code> | Class of the Exchange |
| params.partyType | <code>string</code> | <code>&quot;Exchange&quot;</code> | Class of the Exchange |
| params.description | <code>string</code> |  | Description of the Exchange |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Exchange |
| (object) |  |  | params.emails - Object of Emails associated with this Exchange |
| params.references | <code>object</code> |  | Object of References associated with this Exchange |
| params.createdBy | <code>string</code> |  | ID of the user that created the Exchange (required if creating a new Exchange) |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Exchange (use if amending existing Exchange) |
| params.createdTime | <code>date</code> |  | Time that the Exchange was created (required if creating new Exchange) |
| params.updatedTime | <code>date</code> |  | Time that the Exchange was updated (required if amending existing Exchange) |
| params.version | <code>number</code> |  | Version number of the Exchange |

<a name="Fund"></a>

## Fund ⇐ <code>[Company](#Company)</code>
Class representing a Fund

**Kind**: global class  
**Extends:** <code>[Company](#Company)</code>  
<a name="new_Fund_new"></a>

### new Fund(params, (object))
Construct a new Fund object


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Fund creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Fund |
| params.partyId | <code>string</code> |  | Party ID of the Fund |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Fund (e.g. 'Active') |
| params.partyClass | <code>string</code> | <code>&quot;Company&quot;</code> | Class of the Fund |
| params.partyType | <code>string</code> | <code>&quot;Fund&quot;</code> | Type of the Fund |
| params.description | <code>string</code> |  | Description of the Fund |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Fund |
| (object) |  |  | params.emails - Object of Emails associated with this Fund |
| params.references | <code>object</code> |  | Object of References associated with this Fund |
| params.createdBy | <code>string</code> |  | ID of the user that created the Fund (required if creating a new Fund) |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Fund (use if amending existing Fund) |
| params.createdTime | <code>date</code> |  | Time that the Fund was created (required if creating new Fund) |
| params.updatedTime | <code>date</code> |  | Time that the Fund was updated (required if amending existing Fund) |
| params.version | <code>number</code> |  | Version number of the Fund |

<a name="GovernmentAgency"></a>

## GovernmentAgency ⇐ <code>[Organisation](#Organisation)</code>
Class representing a Government Agency

**Kind**: global class  
**Extends:** <code>[Organisation](#Organisation)</code>  
<a name="new_GovernmentAgency_new"></a>

### new GovernmentAgency(params, (object))
Construct a new GovernmentAgency object


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | GovernmentAgency creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Government Agency |
| params.partyId | <code>string</code> |  | Party ID of the Government Agency |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Government Agency (e.g. 'Active') |
| params.partyClass | <code>string</code> | <code>&quot;Organisation&quot;</code> | Class of the Government Agency |
| params.partyType | <code>string</code> | <code>&quot;GovernmentAgency&quot;</code> | Type of the Government Agency |
| params.description | <code>string</code> |  | Description of the Government Agency |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Government Agency |
| (object) |  |  | params.emails - Object of Emails associated with this Government Agency |
| params.references | <code>object</code> |  | Object of References associated with this Government Agency |
| params.createdBy | <code>string</code> |  | ID of the user that created the Government Agency (required if creating a new Government Agency) |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Government Agency (use if amending existing Government Agency) |
| params.createdTime | <code>date</code> |  | Time that the Government Agency was created (required if creating new Government Agency) |
| params.updatedTime | <code>date</code> |  | Time that the Government Agency was updated (required if amending existing Government Agency) |
| params.version | <code>number</code> |  | Version number of the Government Agency |

<a name="Individual"></a>

## Individual ⇐ <code>[Party](#Party)</code>
Class representing an Individual

**Kind**: global class  
**Extends:** <code>[Party](#Party)</code>  

* [Individual](#Individual) ⇐ <code>[Party](#Party)</code>
    * [new Individual(params, (object))](#new_Individual_new)
    * [.upsertAddress(type, address)](#Party+upsertAddress)
    * [.upsertEmail(type, email)](#Party+upsertEmail)

<a name="new_Individual_new"></a>

### new Individual(params, (object))
Construct a new Individual object


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Individual creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Individual |
| params.partyId | <code>string</code> |  | Party ID of the Individual |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Individual (e.g. 'Active') |
| params.partyClass | <code>string</code> | <code>&quot;Individual&quot;</code> | Class of the Individual |
| params.partyType | <code>string</code> | <code>&quot;Individual&quot;</code> | Type of the Individual |
| params.description | <code>string</code> |  | Description of the Individual |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Individual |
| (object) |  |  | params.emails - Object of Emails associated with this Individual |
| params.references | <code>object</code> |  | Object of References associated with this Individual |
| params.createdBy | <code>string</code> |  | ID of the user that created the Individual (required if creating a new Individual) |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Individual (use if amending existing Individual) |
| params.createdTime | <code>date</code> |  | Time that the Individual was created (required if creating new Individual) |
| params.updatedTime | <code>date</code> |  | Time that the Individual was updated (required if amending existing Individual) |
| params.version | <code>number</code> |  | Version number of the Individual |

<a name="Party+upsertAddress"></a>

### individual.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Individual](#Individual)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>[Address](#Address)</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="Party+upsertEmail"></a>

### individual.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Individual](#Individual)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="Organisation"></a>

## Organisation ⇐ <code>[Party](#Party)</code>
Class representing an Organisation

**Kind**: global class  
**Extends:** <code>[Party](#Party)</code>  

* [Organisation](#Organisation) ⇐ <code>[Party](#Party)</code>
    * [new Organisation(params, (object))](#new_Organisation_new)
    * [.upsertAddress(type, address)](#Party+upsertAddress)
    * [.upsertEmail(type, email)](#Party+upsertEmail)

<a name="new_Organisation_new"></a>

### new Organisation(params, (object))
Construct a new Organisation object


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Organisation creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Organisation |
| params.partyId | <code>string</code> |  | Party ID of the Organisation |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Organisation (e.g. 'Active') |
| params.partyClass | <code>string</code> | <code>&quot;Organisation&quot;</code> | Class of the Organisation |
| params.partyType | <code>string</code> | <code>&quot;Organisation&quot;</code> | Type of the Organisation |
| params.description | <code>string</code> |  | Description of the Organisation |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Organisation |
| (object) |  |  | params.emails - Object of Emails associated with this Organisation |
| params.references | <code>object</code> |  | Object of References associated with this Organisation |
| params.createdBy | <code>string</code> |  | ID of the user that created the Organisation (required if creating a new Organisation) |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Organisation (use if amending existing Organisation) |
| params.createdTime | <code>date</code> |  | Time that the Organisation was created (required if creating new Organisation) |
| params.updatedTime | <code>date</code> |  | Time that the Organisation was updated (required if amending existing Organisation) |
| params.version | <code>number</code> |  | Version number of the Organisation |

<a name="Party+upsertAddress"></a>

### organisation.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Organisation](#Organisation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>[Address](#Address)</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="Party+upsertEmail"></a>

### organisation.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Organisation](#Organisation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="Party"></a>

## Party ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
Class representing a Party

**Kind**: global class  
**Extends:** <code>[AMaaSModel](#AMaaSModel)</code>  

* [Party](#Party) ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
    * [new Party(params, (object))](#new_Party_new)
    * [.upsertAddress(type, address)](#Party+upsertAddress)
    * [.upsertEmail(type, email)](#Party+upsertEmail)

<a name="new_Party_new"></a>

### new Party(params, (object))
Construct a new Party object


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>object</code> |  | Party creation options |
| params.assetManagerId | <code>number</code> |  | Asset Manager ID of the Party |
| params.partyId | <code>string</code> |  | Party ID of the Party |
| params.partyStatus | <code>string</code> | <code>&quot;Active&quot;</code> | Status of the Party (e.g. 'Active') |
| params.partyClass | <code>string</code> | <code>&quot;Party&quot;</code> | Class of the Party |
| params.partyType | <code>string</code> | <code>&quot;Party&quot;</code> | Type of the Party |
| params.description | <code>string</code> |  | Description of the Party |
| params.addresses | <code>object</code> |  | Object of Addresses associated with this Party |
| (object) |  |  | params.emails - Object of Emails associated with this Party |
| params.references | <code>object</code> |  | Object of References associated with this Party |
| params.createdBy | <code>string</code> |  | ID of the user that created the Party (required if creating a new Party) |
| params.updatedBy | <code>string</code> |  | ID of the user that updated the Party (use if amending existing Party) |
| params.createdTime | <code>date</code> |  | Time that the Party was created (required if creating new Party) |
| params.updatedTime | <code>date</code> |  | Time that the Party was updated (required if amending existing Party) |
| params.version | <code>number</code> |  | Version number of the Party |

<a name="Party+upsertAddress"></a>

### party.upsertAddress(type, address)
Upsert an Address

**Kind**: instance method of <code>[Party](#Party)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Address (e.g. 'Registered', 'Legal') |
| address | <code>[Address](#Address)</code> | new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??) |

<a name="Party+upsertEmail"></a>

### party.upsertEmail(type, email)
Upsert an Email

**Kind**: instance method of <code>[Party](#Party)</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of Email (e.g. 'Work', 'Support') |
| email | <code>Emails</code> | new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??) |

<a name="PartyChild"></a>

## PartyChild ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
Class representing a Party (a Transaction children type)

**Kind**: global class  
**Extends:** <code>[AMaaSModel](#AMaaSModel)</code>  

* [PartyChild](#PartyChild) ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
    * [new PartyChild(params)](#new_PartyChild_new)
    * [new PartyChild(params)](#new_PartyChild_new)

<a name="new_PartyChild_new"></a>

### new PartyChild(params)
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

<a name="new_PartyChild_new"></a>

### new PartyChild(params)
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

<a name="Transaction"></a>

## Transaction ⇐ <code>[AMaaSModel](#AMaaSModel)</code>
Class representing a Transaction

**Kind**: global class  
**Extends:** <code>[AMaaSModel](#AMaaSModel)</code>  
<a name="new_Transaction_new"></a>

### new Transaction(params)
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

<a name="retrieve"></a>

## retrieve(AMId, resourceId, token)
Retrieve Allocations for a specific Transaction

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| AMId | <code>number</code> | Asset Manager ID of Transaction |
| resourceId | <code>string</code> | Transaction ID |
| token | <code>string</code> | Authorization token |

<a name="send"></a>

## send(AMId, resourceId, data, token)
Send Allocations for a specific Transaction

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| AMId | <code>number</code> | Asset Manager ID of Transaction |
| resourceId | <code>string</code> | Transaction ID |
| data | <code>object</code> | Allocation data for the Transaction of the form [ { book_id: '123', quantity: '50', transaction_id: 'XYZ' }, { book_id: '456', quantity: '50', transaction_id: 'ABC' } ]    If transaction_id is given, the new Transaction that is created will have this as ID. |
| token | <code>string</code> | Authorization token |

<a name="retrieve"></a>

## retrieve(AMId, callback)
Retrieve Asset Manager data for specified Asset Manager ID

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| AMId | <code>number</code> | Asset Manager ID to retrieve |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="insert"></a>

## insert(assetManager, callback)
Insert a new Asset Manager into the database

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| assetManager | <code>[AssetManager](#AssetManager)</code> | Asset Manager instance to insert |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="deactivate"></a>

## deactivate(AMId, callback)
Deactive an existing Asset Manager (AM)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| AMId | <code>string</code> | AM ID of the AM to deactive |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="retrieve"></a>

## retrieve(AMId, [partyId], callback)
Retrieve Asset data for specified AMId and partyId

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| AMId | <code>number</code> | Asset Manager ID of the Asset |
| [partyId] | <code>string</code> | Party ID of the Asset. Omitting this will return all Assets associated with that AMId |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="insert"></a>

## insert(asset, callback)
Insert a new Asset into the database

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| asset | <code>Asset</code> | Asset instance to insert |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="amend"></a>

## amend(asset, AMId, resourceId, callback)
Amend an existing Asset. WARNING: This makes a HTTP PUT request and will replace the existing Asset with the one passed in

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| asset | <code>Asset</code> | Amended Asset instance to PUT |
| AMId | <code>number</code> | AMId of the Party to amend |
| resourceId | <code>string</code> | Asset ID of the Party to amend |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="partialAmend"></a>

## partialAmend(changes, AMId, resourceId, callback)
Partially amend an existing Asset.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| changes | <code>object</code> | Object of changes to the Asset. |
| AMId | <code>string</code> | AMId of the Asset to be partially amended |
| resourceId | <code>string</code> | Asset ID of the Asset to be partially amended |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="deactivate"></a>

## deactivate(AMId, resourceId, callback)
Delete an exising Asset. This will set the Asset status to 'Inactive'.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| AMId | <code>string</code> | AMId of the Asset to be deleted |
| resourceId | <code>string</code> | Asset ID of the Asset to be deleted |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="retrieve"></a>

## retrieve(AMId, [bookId], callback)
Retrieve Book data for specified AMId and bookId

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| AMId | <code>number</code> | Asset Manager ID of the Asset |
| [bookId] | <code>string</code> | ID of the Book |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="retrieve"></a>

## retrieve(AMId, resourceId, token)
Retrieve Netting for a specific Transaction

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| AMId | <code>number</code> | Asset Manager ID of Transaction |
| resourceId | <code>string</code> | Transaction ID |
| token | <code>string</code> | Authorization token |

<a name="send"></a>

## send(AMId, data, token)
Send Transactions to Net

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| AMId | <code>number</code> | Asset Manager ID of Transaction |
| data | <code>array</code> | TBC |
| token | <code>string</code> | Authorization token |

<a name="retrieve"></a>

## retrieve(AMId, [partyId], callback)
Retrieve Party data for specified AMId and partyId

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| AMId | <code>number</code> | Asset Manager ID of the Party |
| [partyId] | <code>string</code> | Party ID of the Party. Omitting this will return all Parties associated with that AMId |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="insert"></a>

## insert(party, callback)
Insert a new Party into the database

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| party | <code>[Party](#Party)</code> | Party instance to insert |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="amend"></a>

## amend(party, AMId, resourceId, callback)
Amend an existing Party. WARNING: This makes a HTTP PUT request and will replace the existing Party with the one passed in

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| party | <code>[Party](#Party)</code> | Amended Party instance to PUT |
| AMId | <code>number</code> | AMId of the Party to amend |
| resourceId | <code>string</code> | Party ID of the Party to amend |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="partialAmend"></a>

## partialAmend(changes, AMId, resourceId, callback)
Partially amend an existing Party.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| changes | <code>object</code> | Object of changes to the Party. |
| AMId | <code>string</code> | AMId of the Party to be partially amended |
| resourceId | <code>string</code> | Party ID of the Party to be partially amended |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |

<a name="deactivate"></a>

## deactivate(AMId, resourceId, callback)
Delete an exising Party. This will set the Party status to 'Inactive'.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| AMId | <code>string</code> | AMId of the Party to be deleted |
| resourceId | <code>string</code> | Party ID of the Party to be deleted |
| callback | <code>function</code> | Called with two arguments (error, result) on completion |


* * *

2017 AMaaS
