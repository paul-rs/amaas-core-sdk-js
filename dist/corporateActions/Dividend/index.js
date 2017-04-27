'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decimal = require('decimal.js');

var _decimal2 = _interopRequireDefault(_decimal);

var _CorporateAction2 = require('../CorporateAction');

var _CorporateAction3 = _interopRequireDefault(_CorporateAction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Dividend
 * @memberof module:corporateActions
 * @extends module:coporateActions.CorporateAction
 */
var Dividend = function (_CorporateAction) {
  _inherits(Dividend, _CorporateAction);

  function Dividend(_ref) {
    var assetManagerId = _ref.assetManagerId,
        corporateActionId = _ref.corporateActionId,
        corporateActionStatus = _ref.corporateActionStatus,
        recordDate = _ref.recordDate,
        declaredDate = _ref.declaredDate,
        settlementDate = _ref.settlementDate,
        assetId = _ref.assetId,
        partyId = _ref.partyId,
        elective = _ref.elective,
        message = _ref.message,
        dividendRate = _ref.dividendRate,
        dividendAssetId = _ref.dividendAssetId,
        description = _ref.description,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Dividend);

    var _this = _possibleConstructorReturn(this, (Dividend.__proto__ || Object.getPrototypeOf(Dividend)).call(this, {
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    Object.defineProperties(_this, {
      _dividendRate: { writable: true, enumerable: false },
      dividendRate: {
        get: function get() {
          return _this._dividendRate;
        },
        set: function set(newDividendRate) {
          if (newDividendRate) {
            _this._dividendRate = new _decimal2.default(newDividendRate);
          } else {
            _this._dividendRate = new _decimal2.default(0);
          }
        },
        enumerable: true
      }
    });

    _this.dividendRate = dividendRate;
    _this.dividendAssetId = dividendAssetId;
    return _this;
  }

  return Dividend;
}(_CorporateAction3.default);

exports.default = Dividend;