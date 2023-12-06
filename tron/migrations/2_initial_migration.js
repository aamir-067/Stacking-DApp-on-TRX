var Migrations = artifacts.require("./FullDapp.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
