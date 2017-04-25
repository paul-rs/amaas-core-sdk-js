'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _core = require('../../core');

var _enums = require('./enums');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class representing a Book
 * @memberof module:books
 * @extends module:core.AMaaSModel
 */
var Book = function (_AMaaSModel) {
  _inherits(Book, _AMaaSModel);

  /**
   * Construct a new Book object
   * @param {object} params - Book creation options
   * @param {integer} params.assetManagerId - ID of Book's Asset Manager
   * @param {string} params.bookId - ID of this Book
   * @param {string} params.bookType - Book Type
   * @param {string} params.bookStatus - status of Book (e.g. Active, Retired, Superseded)
   * @param {integer} params.ownerId - ID of the owner of the Book (e.g. the Trader who is responsible for the Book)
   * @param {integer} params.partyId - ID of the party of which the activity being tracked belongs (e.g. Registered fund or HNWI)
   * @param {string} params.closeTime - Book close time. This is stored as local time, to be referenced against timezone
   * @param {string} params.timezone - Book's timezone (use this to determine absolute close time)
   * @param {string} params.baseCurrency - Base currency for the Book
   * @param {string} params.businessUnit - A business unit to associate with the Book (e.g. Emerging Markets, Equities)
   * @param {string} params.description - Description of the book
   * @param {Array} params.positions - Array of objects [{asset_id: string, quantity: number}]
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
        _ref$bookType = _ref.bookType,
        bookType = _ref$bookType === undefined ? 'Trading' : _ref$bookType,
        _ref$bookStatus = _ref.bookStatus,
        bookStatus = _ref$bookStatus === undefined ? 'Active' : _ref$bookStatus,
        ownerId = _ref.ownerId,
        partyId = _ref.partyId,
        closeTime = _ref.closeTime,
        _ref$timezone = _ref.timezone,
        timezone = _ref$timezone === undefined ? 'UTC' : _ref$timezone,
        _ref$baseCurrency = _ref.baseCurrency,
        baseCurrency = _ref$baseCurrency === undefined ? 'USD' : _ref$baseCurrency,
        _ref$businessUnit = _ref.businessUnit,
        businessUnit = _ref$businessUnit === undefined ? '' : _ref$businessUnit,
        _ref$description = _ref.description,
        description = _ref$description === undefined ? '' : _ref$description,
        _ref$positions = _ref.positions,
        positions = _ref$positions === undefined ? [] : _ref$positions,
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

    Object.defineProperties(_this, {
      _bookType: { writable: true, enumerable: false },
      bookType: {
        get: function get() {
          return _this._bookType;
        },
        set: function set(newBookType) {
          if (newBookType) {
            if (_enums.BOOK_TYPES.indexOf(newBookType) === -1) {
              throw new Error('Invalid Book Type: ' + newBookType);
            }
            _this._bookType = newBookType;
          }
        },
        enumerable: true
      }
    });
    _this.assetManagerId = assetManagerId;
    _this.bookId = bookId;
    _this.bookType = bookType;
    _this.bookStatus = bookStatus;
    _this.ownerId = ownerId;
    _this.partyId = partyId;
    _this.closeTime = closeTime;
    _this.timezone = timezone;
    _this.baseCurrency = baseCurrency;
    _this.businessUnit = businessUnit;
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