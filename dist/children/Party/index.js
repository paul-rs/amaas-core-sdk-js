'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../../core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Party (a Transaction children type)
 * @memberof module:Transactions.Class
 * @extends module:Core.AMaaSModel
 * @extends AMaaSModel
 */
var PartyChild = function (_AMaaSModel) {
  _inherits(PartyChild, _AMaaSModel);

  /**
   * Construct a new PartyChild object
   * @param {object} params - PartyChild creation options
   * @param {string} params.partyId - ID of the linked Party
   * @param {bool} params.active - Whether this Party as a child is active (Note: NOT whether the linked Party itself is active)
   * @param {string} params.createdBy - ID of the user that created this object (required if creating a new linked Party)
   * @param {string} params.updatedBy - ID of the user that updated this object (use if amending existing linked Party)
   * @param {date} params.createdTime - Time that the linked Party was created (required if creating new linked Party)
   * @param {date} params.updatedTime - Time that the linked Party was updated (required if amending existing linked Party)
   * @param {number} params.version - Version number of the linked Party
   */
  function PartyChild(_ref) {
    var partyId = _ref.partyId,
        active = _ref.active,
        createdBy = _ref.createdBy,
        createdTime = _ref.createdTime,
        updatedBy = _ref.updatedBy,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, PartyChild);

    var _this = _possibleConstructorReturn(this, (PartyChild.__proto__ || Object.getPrototypeOf(PartyChild)).call(this, {
      createdBy: createdBy,
      createdTime: createdTime,
      updatedBy: updatedBy,
      updatedTime: updatedTime,
      version: version
    }));

    _this.partyId = partyId;
    _this.active = active === false ? false : true;
    return _this;
  }

  return PartyChild;
}(_core.AMaaSModel);

exports.default = PartyChild;