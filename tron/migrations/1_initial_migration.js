var Migrations = artifacts.require("./Token.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
