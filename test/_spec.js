
var should = require("should");
var helper = require('./helper.js');
var LowerCaseNode=require("../lower-case.js");
//var awsNode = require("../../aws/aws.js");
//var sinon = require('sinon');
var nock = helper.nock;

describe('Our test', function() {

    before(function(done) {
        helper.startServer(done);
    });

    afterEach(function() {
        if(nock) {
            nock.cleanAll();
        }
        //helper.unload();
    });


    it('Test1', function(done) {
      done();
      helper.load
        /*helper.load(awsNode,
                    [{id:"n1", type:"aws-config"}], function() {
                        var n1 = helper.getNode("n1");
                        n1.should.have.property('id', 'n1');
                        (typeof n1.AWS).should.be.equal("undefined");
                        done();
                    });
*/
    });

    it('should be loaded', function(done) {
        var flow = [{id:"n1", type:"function", name: "function" }];
        helper.load(LowerCaseNode, flow, function() {
            var n1 = helper.getNode("n1");
            console.log(n1);
            done();
        });
    });

    
});
