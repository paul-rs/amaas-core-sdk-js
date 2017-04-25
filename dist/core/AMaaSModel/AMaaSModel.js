'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class representing a AMaaSModel.
 * This is the Base Class for almost every other class
 * @memberof module:core
 */
var AMaaSModel =
/**
 * Construct new AMaaSModel object
 * @param {object} params - AMaaSModel creation options:
 * @param {string} params.createdBy - ID of the user that created this object
 * @param {string} params.updatedBy - ID of the user that updated this object
 * @param {date} params.createdTime - Time that the AMaaSModel was created
 * @param {date} params.updatedTime - Time that the AMaaSModel was updated
 * @param {number} params.version - Version number of the AMaaSModel
*/
function AMaaSModel() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { createdBy: 'TEMP', updatedBy: 'TEMP' },
      _ref$createdBy = _ref.createdBy,
      createdBy = _ref$createdBy === undefined ? 'TEMP' : _ref$createdBy,
      _ref$updatedBy = _ref.updatedBy,
      updatedBy = _ref$updatedBy === undefined ? 'TEMP' : _ref$updatedBy,
      createdTime = _ref.createdTime,
      updatedTime = _ref.updatedTime,
      version = _ref.version;

  _classCallCheck(this, AMaaSModel);

  this.createdBy = createdBy;
  this.updatedBy = updatedBy;
  this.createdTime = createdTime;
  this.updatedTime = updatedTime;
  this.version = version || 1;
};

exports.default = AMaaSModel;