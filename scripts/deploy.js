const hre = require("hardhat");

async function main() {

  const AvoKitties = await hre.ethers.getContractFactory("AvoKitties");
  const avokitties = await AvoKitties.deploy();

  await avokitties.deployed();

  console.log("The Contract is deployed to:", avokitties.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
