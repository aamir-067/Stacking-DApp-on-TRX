var Migrations = artifacts.require("MyContract");


module.exports =async function (deployer) {
  console.log('MyContract is ', Migrations);
  const res = await deployer.deploy(Migrations);
  console.log("response is : ",res);
};
