import {describe, it} from 'mocha'
//@ts-ignore: not an error after transpilation
import * as assert from 'assert'
import myFunction from './index'

describe('Test of test framework', function() {
    it('Test should pass', function() {
        assert.equal(myFunction(), 0);
    });
});