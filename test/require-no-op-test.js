'use strict';
var nodePath = require('path');
require('chai').config.includeStack = true;

var nodeRequireNoOp = require('../node-require-no-op');

describe('lasso/config' , function() {
    require('./autotest').scanDir(
        nodePath.join(__dirname, 'fixtures/require-no-op-autotest'),
        function (dir, done) {
            var main = require(nodePath.join(dir, 'test.js'));
            main.check(nodeRequireNoOp);
            done();
        });

});