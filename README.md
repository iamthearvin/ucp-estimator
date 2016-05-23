# ucp-estimator

A package for software cost estimation using use case points given the number of use cases and actors. This can be useful when including estimation to your organization's landing page.

This estimator is patterned after the estimation sheet available [here](http://tynerblain.com/blog/2007/02/12/software-cost-estimation-ucp-1/). If you want to know more about the estimation method and logic, you may refer to the same link.

## Usage and Functions

All functions are accessible using the object **UcpEstimator**.

### Estimate

**UcpEstimator.estimate(*usecases*, *actors*)**

Returns an object with the estimated man-hours and cost given that your organization uses a flat rate (e.g. **{ ManHours: 234, Cost: 117420 }**).

***usecases*** - Array of number of use cases grouped an arranged by complexity. For instance, given [3, 2, 0], the application has 3 simple use cases, 2 average use cases,and 0 complex use case. For additional information on how to assess use cases, please refer to primary reference linked above.

***actors*** - Array of number of actors grouped and arranged by type. For instance, given [1, 2, 1], the application has 1 simple actor, 2 average actors, and 1 complex actors. For additional information on how to assess actors, please refer to primary reference linked above.

### Estimate Man-hours

**UcpEstimator.estimateManHours(*usecases*, *actors*)**

Returns the estimated man-hours.

Parameters are the same with **UcpEstimator.estimate()**.

### Estimate Cost

**UcpEstimator.estimateCost(*usecases*, *actors*)**

Returns the estimated cost given that your organization uses a flat rate.

Parameters are the same with **UcpEstimator.estimate()**.

## Configuration

The configuration used by the estimator is accessible through **UcpEstimator.config**. Default values were set with reference to the downloadable estimation sheet and consideration to the ideal scenario of a ground up project.

This can be altered depending on you or your organizations view of a typical project.

|Key|Long Name|Format/Description|Default Value|
|---|---------|------------------|-------------|
|envFactors|Environmental Factors| Array of values corresponding to the following in order:<ol><li>Familiarity with the Project</li>    <li>Application Experience</li>    <li>OO Programming Experience</li>    <li>Lead Analyst Capability</li>    <li>Motivation</li>    <li>Stable Requirements</li>    <li>Part Time Staff</li>    <li>Difficult Programming Language</li></ol> | [5, 0, 5, 5, 5, 0, 0, 0] |
|techFactors|Technical Factors|Array of values corresponding to the following in order:<ol><li>Distributed System Required</li>    <li>Response Time Is Important</li>    <li>End User Efficiency</li>    <li>Complex Internal Processing Required</li>    <li>Reusable Code Must Be A Focus</li>    <li>Installation Ease</li>    <li>Usability</li>    <li>Cross-Platform Support</li>    <li>Easy To Change</li>    <li>Highly Concurrent</li>    <li>Custom Security</li>    <li>Dependence On Third-Party Code</li>    <li>User Training</li></ol>|[1, 1, 1, 1, 1, 0, 2.5, 2.5, 1, 1, 1, 1, 1]|
|envMultipliers|Environment Factor Multipliers|Default multipliers for environment factors in the estimation sheet.|[1.5, 0.5, 1, 0.5, 1, 2, -1, -1]|
|techMultipliers|Technial Factor Multipliers|Default multipliers for technical factors in the estimation sheet.|[2, 1, 1, 1, 1, 0.5, 0.5, 2, 1, 1, 1, 1, 1]|
|ucMultipliers|Use Case Multipliers|Default multipliers for use cases arranged from Simple to Complex.|[5, 10, 15]|
|actMultipliers|Actor Multipliers|Default multipliers for actors arranged from Simple to Complex.|[1, 2, 3]|
|hoe|Hours of Effort per Use Case|In favor of the best case, this is set to 20.|20|
|[Optional]flatRt|Flat Rate|Only useful if you or your organization uses a flat rate for costing. The value is just a sample.|500|