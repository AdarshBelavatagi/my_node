var should = require("should");
var helper = require('./helper.js');
var LowerCaseNode = require("../lower-case.js");
//var awsNode = require("../../aws/aws.js");
//var sinon = require('sinon');
var nock = helper.nock;

describe('Our test', function() {

    before(function(done) {
        helper.startServer(done);
    });

    afterEach(function() {
        if (nock) {
            nock.cleanAll();
        }
        helper.unload();
    });

    it('should be loaded', function(done) {
        var flow = [{
            id: "n1",
            type: "lower-case",
            name: "function"
        }];
        helper.load(LowerCaseNode, flow, function() {
            var n1 = helper.getNode("n1");
            console.log(n1);
            done();
        });
    });
    it('should send upper-case returned lower-case', function(done) {
        var flow = [{
                id: "n1",
                type: "lower-case",
                wires: [
                    ["n2"]
                ],
                func: "return msg;"
            },
            {
                id: "n2",
                type: "helper"
            }
        ];
        helper.load(LowerCaseNode, flow, function() {
            var n1 = helper.getNode("n1");
            var n2 = helper.getNode("n2");
            n2.on("input", function(msg) {
                msg.should.have.property('topic', 'bar');
                msg.should.have.property('payload', 'adarsh');
                done();
            });
            n1.receive({
                payload: "ADARSH",
                topic: "bar"
            });
        });
    });
});
