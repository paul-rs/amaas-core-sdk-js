'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CorporateAction2 = require('../CorporateAction');

var _CorporateAction3 = _interopRequireDefault(_CorporateAction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Notification
 * @memberof module:corporateActions
 * @extends module:corporateActions.CorporateAction
 */
var Notification = function (_CorporateAction) {
  _inherits(Notification, _CorporateAction);

  function Notification(_ref) {
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
        description = _ref.description,
        references = _ref.references,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Notification);

    return _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, {
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));
  }

  return Notification;
}(_CorporateAction3.default);

exports.default = Notification;