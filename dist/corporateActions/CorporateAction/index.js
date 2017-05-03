'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../../core');

var _children = require('../../children');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Corporate Actions
 * @memberof module:corporateActions
 * @extends module:core.AMaaSModel
 */
var CorporateAction = function (_AMaaSModel) {
  _inherits(CorporateAction, _AMaaSModel);

  function CorporateAction(_ref) {
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

    _classCallCheck(this, CorporateAction);

    var _this = _possibleConstructorReturn(this, (CorporateAction.__proto__ || Object.getPrototypeOf(CorporateAction)).call(this, {
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    Object.defineProperties(_this, {
      _references: { writable: true, enumerable: false },
      references: {
        get: function get() {
          return _this._references;
        },
        set: function set(newReferences) {
          if (newReferences) {
            var refClass = {
              AMaaS: new _children.Reference({ referenceValue: corporateActionId })
            };
            for (var name in newReferences) {
              if (newReferences.hasOwnProperty(name)) {
                refClass[name] = new _children.Reference(newReferences[name]);
              }
            }
            _this._references = refClass;
          } else {
            _this._references = {
              AMaaS: new _children.Reference({ referenceValue: corporateActionId })
            };
          }
        }, enumerable: true
      }
    });

    _this.assetManagerId = assetManagerId;
    _this.corporateActionId = corporateActionId;
    _this.corporateActionType = _this.constructor.name;
    _this.corporateActionStatus = corporateActionStatus;
    _this.recordDate = recordDate;
    _this.declaredDate = declaredDate;
    _this.settlementDate = settlementDate;
    _this.assetId = assetId;
    _this.partyId = partyId;
    _this.elective = elective;
    _this.message = message;
    _this.description = description;
    _this.references = references;
    return _this;
  }

  return CorporateAction;
}(_core.AMaaSModel);

exports.default = CorporateAction;