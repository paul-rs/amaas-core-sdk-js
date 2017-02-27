'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('../../core');

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Book
 * @extends AMaaSModel
 */
var Book = function (_AMaaSModel) {
  _inherits(Book, _AMaaSModel);

  /**
   * Construct a new Book object
   * @param {object} params - Book creation options
   * @param {integer} params.assetManagerId - ID of Book's Asset Manager
   * @param {string} params.bookId - ID of this Book
   * @param {string} params.bookStatus - status of Book (e.g. Active, Retired, Superseded)
   * @param {integer} params.ownerId - ID of the owner of the Book
   * @param {string} params.closeTime - Book close time. This is stored as local time, to be referenced against timezone
   * @param {string} params.timezone - Book's timezone (use this to determine absolute close time)
   * @param {string} params.description - Description of the book
   * @param {Array} params.positions - Array of objects [{asset_id: quantity}]
   * @param {string} params.createdBy - ID of the user that created this object (required if creating a new Book)
   * @param {string} params.updatedBy - ID of the user that updated this object (use if amending existing Book)
   * @param {date} params.createdTime - Time that the Book was created (required if creating new Book)
   * @param {date} params.updatedTime - Time that the Book was updated (required if amending existing Book)
   * @param {number} params.version - Version number of the Book
   */
  function Book(_ref) {
    var assetManagerId = _ref.assetManagerId,
        _ref$bookId = _ref.bookId,
        bookId = _ref$bookId === undefined ? (0, _uuid2.default)() : _ref$bookId,
        _ref$bookStatus = _ref.bookStatus,
        bookStatus = _ref$bookStatus === undefined ? 'Active' : _ref$bookStatus,
        ownerId = _ref.ownerId,
        closeTime = _ref.closeTime,
        _ref$timezone = _ref.timezone,
        timezone = _ref$timezone === undefined ? 'UTC' : _ref$timezone,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        positions = _ref.positions,
        createdBy = _ref.createdBy,
        updatedBy = _ref.updatedBy,
        createdTime = _ref.createdTime,
        updatedTime = _ref.updatedTime,
        version = _ref.version;

    _classCallCheck(this, Book);

    var _this = _possibleConstructorReturn(this, (Book.__proto__ || Object.getPrototypeOf(Book)).call(this, {
      createdBy: createdBy,
      updatedBy: updatedBy,
      createdTime: createdTime,
      updatedTime: updatedTime,
      version: version
    }));

    _this.assetManagerId = assetManagerId;
    _this.bookId = bookId;
    _this.bookStatus = bookStatus;
    _this.ownerId = ownerId;
    _this.closeTime = closeTime;
    _this.timezone = timezone;
    _this.description = description;
    _this.positions = positions;
    return _this;
  }

  _createClass(Book, [{
    key: 'positionsByAsset',
    value: function positionsByAsset() {
      // TODO: Iterate over the positions array and sum by asset_id
    }
  }]);

  return Book;
}(_core.AMaaSModel);

exports.default = Book;