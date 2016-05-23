var defaultConfig = {
    envFactors: [5, 0, 5, 5, 5, 0, 0, 0],
    techFactors: [1, 1, 1, 1, 1, 0, 2.5, 2.5, 1, 1, 1, 1, 1],
    envMultipliers: [1.5, 0.5, 1, 0.5, 1, 2, -1, -1],
    techMultipliers: [2, 1, 1, 1, 1, 0.5, 0.5, 2, 1, 1, 1, 1, 1],
    ucMultipliers: [5, 10, 15],
    actMultipliers: [1, 2, 3],
    hoe: 20,
    flatRt: 500
};

var UcpEstimator = {
	config : {
		envFactors: defaultConfig.envFactors,
    	techFactors: defaultConfig.techFactors,
    	envMultipliers: defaultConfig.envMultipliers,
    	techMultipliers: defaultConfig.techMultipliers,
    	ucMultipliers: defaultConfig.ucMultipliers,
    	actMultipliers: defaultConfig.actMultipliers,
    	hoe: defaultConfig.hoe,
    	flatRt: defaultConfig.flatRt
	},
    calcEF: function() {
        var sum = 0;
        for(var i=0; i<this.config.envFactors.length; i++) {
            sum += this.config.envFactors[i] * this.config.envMultipliers[i];
        }

        return 1.4 - (0.03*sum); 
    },
    calcTF: function() {
        var sum = 0;
        for(var i=0; i<this.config.techFactors.length; i++) {
            sum += this.config.techFactors[i] * this.config.techMultipliers[i];
        }

        return 0.6 + (sum/100);
    },
    calcUC: function(spl, avg, dff) {
        spl = spl === undefined || spl === null ? 0 : spl;
        avg = avg === undefined || avg === null ? 0 : avg;
        dff = dff === undefined || dff === null ? 0 : dff;
        var calcUC = spl * this.config.ucMultipliers[0]
            + avg * this.config.ucMultipliers[1]
            + dff * this.config.ucMultipliers[2];

        return calcUC;
    },
    calcAct: function(spl, avg, cmp) {
        spl = spl === undefined || spl === null ? 0 : spl;
        avg = avg === undefined || avg === null ? 0 : avg;
        cmp = cmp === undefined || cmp === null ? 0 : cmp;
        var calcAct = spl * this.config.actMultipliers[0]
            + avg * this.config.actMultipliers[1]
            + cmp * this.config.actMultipliers[2];

        return calcAct;
    },
    estimate: function(usecases, actors) {
        var ucp = (
            this.calcUC(usecases[0], usecases[1], usecases[2]) + this.calcAct(actors[0], actors[1], actors[2])
            ) * this.calcEF() * this.calcTF();
        var manhrs = this.config.hoe * ucp;
        var cost = manhrs * this.config.flatRt;

        return {
            ManHours: manhrs,
            Cost: cost
        }
    },
    estimateManHours: function(usecases, actors) {
        var est = this.estimate(usecases, actors);
        return est.ManHours;
    },
    estimateCost: function(usecases, actors) {
        var est = this.estimate(usecases, actors);
        return est.Cost;
    },
};

module.exports = UcpEstimator;
