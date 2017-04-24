'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('../../core');

var _enums = require('../enums');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing an Asset Manager
 * @memberof module:AssetManagers.Class
 * @extends module:Core.AMaaSModel
 */
var AssetManager = function (_AMaaSModel) {
  _inherits(AssetManager, _AMaaSModel);

  /**
   * Construct a new Asset Manager Model
   * @param {object} params - Asset Manager creation options
   * @param {number} params.assetManagerId - Asset Manager's ID
   * @param {string} params.assetManagerType - Type of Asset Manager (e.g. Hedge Fund)
   * @param {string} params.assetManagerStatus - Status of Asset Manager (e.g. Active)
   * @param {string} params.clientId - ID of the associated client
   * @param {string} params.partyId - ID of the associated party (associated party may be self)
   * @param {string} params.defaultBookOwnerId - ID of the default owner for any books owned by this Asset Manager
   * @param {date} params.defaultTimezone - Default timezone for any books owned by this Asset Manager
   * @param {date} params.defaultBookCloseTime - Default book close time for any books owned by this Asset Manager
   * @param {string} params.createdBy - ID of the user that created the Asset Manager
   * @param {string} params.updatedBy - ID of the user that updated the Asset Manager
   * @param {date} params.createdTime - Time that the Asset Manager was created
   * @param {date} params.updatedTime - Time that the Asset Manager was updated
   * @param {number} params.version - Version number of the Asset Manager
   */
  function AssetManager(_ref) {
    var assetManagerId = _ref.assetManagerId,
        assetManagerType = _ref.assetManagerType,
        _ref$assetManagerStat = _ref.assetManagerStatus,
        assetManagerStatus = _ref$assetManagerStat === undefined ? 'Active' : _ref$assetManagerStat,
        clientId = _ref.clientId,
        partyId = _ref.partyId,
        defaultBookOwnerId = _ref.defaultBookOwnerId,
        _ref$defaultTimezone = _ref.defaultTimezone,
        defaultTimezone = _ref$defaultTimezone === undefined ? 'UTC' : _ref$defaultTimezone,
        defaultBookCloseTime = _ref.defaultBookCloseTime,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, AssetManager);

    var _this = _possibleConstructorReturn(this, (AssetManager.__proto__ || Object.getPrototypeOf(AssetManager)).call(this, {
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    Object.defineProperties(_this, {
      _assetManagerType: { writable: true, enumerable: false },
      assetManagerType: {
        get: function get() {
          return _this._assetManagerType;
        },
        set: function set(newAssetManagerType) {
          if (newAssetManagerType) {
            if (_enums.ASSET_MANAGER_TYPES.indexOf(newAssetManagerType) == -1) {
              throw new Error('Invalid Asset Manager Type: ' + newAssetManagerType);
            } else {
              _this._assetManagerType = newAssetManagerType;
            }
          }
        }, enumerable: true
      }
    });
    _this.assetManagerId = assetManagerId;
    _this.assetManagerType = assetManagerType;
    _this.assetManagerStatus = assetManagerStatus;
    _this.clientId = clientId;
    _this.partyId = partyId;
    _this.defaultBookOwnerId = defaultBookOwnerId;
    _this.defaultTimezone = defaultTimezone;
    _this.defaultBookCloseTime = defaultBookCloseTime;
    return _this;
  }

  return AssetManager;
}(_core.AMaaSModel);

exports.default = AssetManager;