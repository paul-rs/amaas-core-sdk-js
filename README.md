# amaas-core-sdk-js

This is the Asset Management as a Service (AMaaS) Software Development Kit (SDK) for JavaScript

### Installation

Coming soon

## API Reference

## Classes

<dl>
<dt><a href="#Charge">Charge</a> ⇐ <code>AMaaSModel</code></dt>
<dd><p>Class representing a Charge (a Transaction children type)</p>
</dd>
<dt><a href="#Code">Code</a> ⇐ <code>AMaaSModel</code></dt>
<dd><p>Class representing a Code (a Transaction children type)</p>
</dd>
<dt><a href="#Comment">Comment</a> ⇐ <code>AMaaSModel</code></dt>
<dd><p>Class representing a Comment (a Transaction children type)</p>
</dd>
<dt><a href="#Link">Link</a> ⇐ <code>AMaaSModel</code></dt>
<dd><p>Class representing a Link (a Transaction children type)</p>
</dd>
<dt><a href="#PartyChild">PartyChild</a> ⇐ <code>AMaaSModel</code></dt>
<dd><p>Class representing a Party (a Transaction children type)</p>
</dd>
<dt><a href="#Transaction">Transaction</a> ⇐ <code>AMaaSModel</code></dt>
<dd><p>Class representing a Transaction</p>
</dd>
</dl>

<a name="Charge"></a>

## Charge ⇐ <code>AMaaSModel</code>
Class representing a Charge (a Transaction children type)

**Kind**: global class  
**Extends:** <code>AMaaSModel</code>  
<a name="new_Charge_new"></a>

### new Charge(chargeValue, currency, active, createdBy, updatedBy, createdTime, updatedTime, version)
Construct a new Charge object


| Param | Type | Description |
| --- | --- | --- |
| chargeValue | <code>string</code> | Value of the charge |
| currency | <code>string</code> | Currency of the charge (e.g. SGD, USD etc.) |
| active | <code>bool</code> | Whether this Charge is active |
| createdBy | <code>string</code> | ID of the user that created this object (required if creating a new Charge) |
| updatedBy | <code>string</code> | ID of the user that updated this object (use if amending existing Charge) |
| createdTime | <code>date</code> | Time that the Charge was created (required if creating new Charge) |
| updatedTime | <code>date</code> | Time that the Charge was updated (required if amending existing Charge) |
| version | <code>number</code> | Version number of the Charge |

<a name="Code"></a>

## Code ⇐ <code>AMaaSModel</code>
Class representing a Code (a Transaction children type)

**Kind**: global class  
**Extends:** <code>AMaaSModel</code>  
<a name="new_Code_new"></a>

### new Code(options)
Construct a new Code object


| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Code creation options |
| options.codeValue | <code>string</code> | The code itself |
| options.active | <code>bool</code> | Whether this Code is active |
| options.createdBy | <code>string</code> | ID of the user that created this object (required if creating a new Code) |
| options.updatedBy | <code>string</code> | ID of the user that updated this object (use if amending existing Code) |
| options.createdTime | <code>date</code> | Time that the Code was created (required if creating new Code) |
| options.updatedTime | <code>date</code> | Time that the Code was updated (required if amending existing Code) |
| options.version | <code>number</code> | Version number of the Code |

<a name="Comment"></a>

## Comment ⇐ <code>AMaaSModel</code>
Class representing a Comment (a Transaction children type)

**Kind**: global class  
**Extends:** <code>AMaaSModel</code>  
<a name="new_Comment_new"></a>

### new Comment(commentValue, active, createdBy, updatedBy, createdTime, updatedTime, version)
Construct a new Comment object


| Param | Type | Description |
| --- | --- | --- |
| commentValue | <code>string</code> | The comment itself |
| active | <code>bool</code> | Whether this Comment is active |
| createdBy | <code>string</code> | ID of the user that created this object (required if creating a new Comment) |
| updatedBy | <code>string</code> | ID of the user that updated this object (use if amending existing Comment) |
| createdTime | <code>date</code> | Time that the Comment was created (required if creating new Comment) |
| updatedTime | <code>date</code> | Time that the Comment was updated (required if amending existing Comment) |
| version | <code>number</code> | Version number of the Comment |

<a name="Link"></a>

## Link ⇐ <code>AMaaSModel</code>
Class representing a Link (a Transaction children type)

**Kind**: global class  
**Extends:** <code>AMaaSModel</code>  
<a name="new_Link_new"></a>

### new Link(linkedTransactionId, active, createdBy, updatedBy, createdTime, updatedTime, version)
Construct a new Link object


| Param | Type | Description |
| --- | --- | --- |
| linkedTransactionId | <code>string</code> | ID of the linked Transaction |
| active | <code>bool</code> | Whether this Link is active (Note: NOT whether the linked Transaction itself is active) |
| createdBy | <code>string</code> | ID of the user that created this object (required if creating a new Link) |
| updatedBy | <code>string</code> | ID of the user that updated this object (use if amending existing Link) |
| createdTime | <code>date</code> | Time that the Link was created (required if creating new Link) |
| updatedTime | <code>date</code> | Time that the Link was updated (required if amending existing Link) |
| version | <code>number</code> | Version number of the Link |

<a name="PartyChild"></a>

## PartyChild ⇐ <code>AMaaSModel</code>
Class representing a Party (a Transaction children type)

**Kind**: global class  
**Extends:** <code>AMaaSModel</code>  
<a name="new_PartyChild_new"></a>

### new PartyChild(partyId, active, createdBy, updatedBy, createdTime, updatedTime, version)

| Param | Type | Description |
| --- | --- | --- |
| partyId | <code>string</code> | ID of the linked Party |
| active | <code>bool</code> | Whether this Party as a child is active (Note: NOT whether the linked Party itself is active) |
| createdBy | <code>string</code> | ID of the user that created this object (required if creating a new linked Party) |
| updatedBy | <code>string</code> | ID of the user that updated this object (use if amending existing linked Party) |
| createdTime | <code>date</code> | Time that the linked Party was created (required if creating new linked Party) |
| updatedTime | <code>date</code> | Time that the linked Party was updated (required if amending existing linked Party) |
| version | <code>number</code> | Version number of the linked Party |

<a name="Transaction"></a>

## Transaction ⇐ <code>AMaaSModel</code>
Class representing a Transaction

**Kind**: global class  
**Extends:** <code>AMaaSModel</code>  
<a name="new_Transaction_new"></a>

### new Transaction(assetManagerId, assetBookId, counterpartyBookId, transactionAction, assetId, quantity, transactionDate, settlementDate, price, transactionCurrency, settlementCurrency, transactionType, transactionStatus, executionTime, transactionId, charges, codes, references, postings, asset)
Construct a new Transaction object


| Param | Type | Description |
| --- | --- | --- |
| assetManagerId | <code>string</code> | ID of the Transaction's Asset Manager |
| assetBookId | <code>string</code> | ID of the Transaction's book |
| counterpartyBookId | <code>string</code> | ID of the counterparty to this Transaction |
| transactionAction | <code>string</code> | Transaction action e.g. BUY/SELL |
| assetId | <code>string</code> | ID of the asset being transacted |
| quantity | <code>number</code> | Quantity being transacted |
| transactionDate | <code>date</code> | Date of transactionDate |
| settlementDate | <code>date</code> | Date of settlement e.g. T+2 where T = transactionDate |
| price | <code>decimal</code> | price of Asset being transacted |
| transactionCurrency | <code>string</code> | Currency that the Transaction takes place in |
| settlementCurrency | <code>string</code> | Currency that the Transaction is settled in |
| transactionType | <code>Asset</code> | Type of Transaction e.g. Trade, Allocation |
| transactionStatus | <code>\*</code> | * |
| executionTime | <code>date</code> | Time that the Transaction was executed |
| transactionId | <code>string</code> | ID of the Transaction |
| charges | <code>object</code> | Object of all charges (Charge class) |
| codes | <code>object</code> | Object of all codes (Code class) |
| references | <code>object</code> | * |
| postings | <code>\*</code> | * |
| asset | <code>\*</code> | * |


* * *

2017 AMaaS
