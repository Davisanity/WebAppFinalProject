
var assert = require('assert');
var setting = require('../setting.js');
describe('Test check function', function(){
	describe('Check', function(){
		it('true', function(){
			var storage={code1:'4',
					 code2:'3',
					 code3:'2',
					 code4:'1',
					 vrfy1:'4',
					 vrfy2:'3',
					 vrfy3:'2',
					 vrfy4:'1'
					};
      		assert.equal( true , setting.is_correspond(storage));
      	})
      	it('false', function(){
			var storage={code1:'4',
					 code2:'3',
					 code3:'2',
					 code4:'1',
					 vrfy1:'1',
					 vrfy2:'2',
					 vrfy3:'3',
					 vrfy4:'4'
					};
      		assert.equal( false , setting.is_correspond(storage));
      	})
    })
})
