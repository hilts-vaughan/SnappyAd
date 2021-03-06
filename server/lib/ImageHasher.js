'use strict'

var fs = require('fs')
var crypto = require('crypto')

/**
 * Hashes an image into an identifiable string and provides various utitlies
 * for for this kind of tool.
 */
class ImageHasher {
  constructor(hashType) {
    this.hashType = hashType || 'sha256'
  }

  getImageBase64String(filename, callback) {
    fs.readFile(filename, {encoding: 'base64'}, (err, base64data) => {
       if(err) {
         callback(null)
       } else {
         callback(this._hashString(base64data))
       }
    });
  }

  // Hash the string
  _hashString(s)  {
    return crypto.createHash(this.hashType).update(s, 'utf8').digest('hex')
  }
}

module.exports = ImageHasher
