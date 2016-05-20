var should = require('chai').should(),
    UcpEstimator = require('../index');

describe('Estimator', function() {
    var usecases = [2, 0, 0];
    var actors = [2, 2, 1];
    
    it('Fails when calculated environmental factors weight does not match expected.', function() {
        UcpEstimator.calcEF().should.equal(0.7999999999999999);
    });

    it('Fails when calculated technical factors weight does not match expected.', function() {
        UcpEstimator.calcTF().should.equal(0.7725);
    });
    
    it('Fails when calculated use case weight does not match expected.', function() {
        UcpEstimator.calcUC(1, 1).should.equal(15);
    });
    
    it('Fails when calculated actors weight does not match expected.', function() {
        UcpEstimator.calcAct(1, null, 1).should.equal(4);
    });
    
    it('Fails when calculated man hours does not match expected.', function() {
        UcpEstimator.estimateManHours(usecases, actors).should.equal(234);
    });
    
    it('Fails when calculated cost does not match expected.', function() {
        UcpEstimator.estimateCost(usecases, actors).should.equal(117000);
    });
});
