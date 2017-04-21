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
 * Class representing a Relationship
 * @memberof module:AssetManagers.Class
 * @extends module:Core.AMaaSModel
 */
var Relationship = function (_AMaaSModel) {
  _inherits(Relationship, _AMaaSModel);

  /**
   * Construct a new Relationship instance
   * @param {object} params - Relationship creation options
   * @param {number} params.assetManagerId - ID of the Asset Manager who owns this Relationship
   * @param {number} params.relationId - ID of the Asset Manager to whom this Relationship connects
   * @param {string} params.relationshipType - The type of Relationship between these Asset Managers
   * @param {string} params.clientId - The client ID that owns this Relationship
   * @param {string} params.relationshipStatus - The status of the Relationship
   * @param {string} params.createdBy - ID of the user that created the Relationship
   * @param {string} params.updatedBy - ID of the user that updated the Relationship
   * @param {date} params.createdTime - Time that the Relationship was created
   * @param {date} params.updatedTime - Time that the Relationship was updated
   * @param {number} params.version - Version number of the Relationship
   */
  function Relationship(_ref) {
    var assetManagerId = _ref.assetManagerId,
        relationId = _ref.relationId,
        relationshipType = _ref.relationshipType,
        clientId = _ref.clientId,
        relationshipStatus = _ref.relationshipStatus,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Relationship);

    var _this = _possibleConstructorReturn(this, (Relationship.__proto__ || Object.getPrototypeOf(Relationship)).call(this, {
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    Object.defineProperties(_this, {
      _relationshipType: { writable: true, enumerable: false },
      relationshipType: {
        get: function get() {
          return _this._relationshipType;
        },
        set: function set(newRelationshipType) {
          if (newRelationshipType) {
            if (_enums.RELATIONSHIP_TYPES.indexOf(newRelationshipType) == -1) {
              throw new Error('Invalid Relationship Type: ' + newRelationshipType);
            } else {
              _this._relationshipType = newRelationshipType;
            }
          }
        }, enumerable: true
      }
    });
    _this.assetManagerId = assetManagerId;
    _this.relationId = relationId;
    _this.clientId = clientId;
    _this.relationshipStatus = relationshipStatus;
    _this.relationshipType = relationshipType;
    return _this;
  }

  return Relationship;
}(_core.AMaaSModel);

exports.default = Relationship;