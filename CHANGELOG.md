# Change Log
All notable changes to this project will be documented in this file.

## Unreleased
### Added
- Added accountType field to the AssetManager class.

### Changed
- Removed `maturityDate` from the Asset base class and set either maturityDate or expiryDate on the relevant subclasses.

## 0.0.2 - 2017-05-09
### Changed
- Renamed the two files in `src/transactions/Transaction/*` to start with lowercase letters. Import statement in the index file was looking for files starting with capitals which was causing NotFound in some systems.

## 0.0.1 - 2017-05-08
### Added
- Published amaas-core-sdk-js to npm.
