# Nile Test Network DApp README

This decentralized application (DApp) is deployed on the Tron test network known as Nile. It leverages technologies such as React.js, Solidity, and Tailwind CSS for its development. Additionally, several libraries including tronWeb.js, TronBox, and TronLink wallet were utilized to facilitate interaction with the Tron network and smart contracts.


## Technologies Used

- **React.js**: Front-end user interface development.
- **Solidity**: Smart contract development language for the Tron blockchain.
- **Tailwind CSS**: Styling framework for the user interface.
- **tronWeb.js**: Library for interacting with smart contracts on the Tron network.
- **TronBox**: Tool used for deploying contracts on the blockchain.
- **TronLink Wallet**: Tron-compatible wallet for transactions and interactions.


## DApp Functionality

The functionality of this DApp is straightforward. Users are required to deposit testnet Tron into the contract, allowing them to generate another token as a reward. The mechanism governing the reward system is based on a simple principle: for every unit of testnet Tron deposited, users will receive one token of TKN. The allocation of tokens occurs at regular intervals of 5 minutes.

## How to Use the DApp
1. **Connect Wallet**: Ensure you have TronLink wallet installed and connected.
2. **Deposit TRX**: Deposit testnet Tron into the contract.
3. **Token Generation**: Tokens (TKN) will be generated based on the amount of TRX deposited, following the described reward mechanism.

## Getting Started

To begin working with this DApp locally, follow these steps:

1. **Clone Repository**: Clone this repository to your local machine.
```bash 
    git clone https://github.com/aamir-067/Stacking-DApp-on-TRX.git
```

2. **Install Dependencies**: Navigate to the project directory and install necessary dependencies.
```bash
cd your-project-directory
npm install 
```
3. **Run the Application**: Start the development server.
```bash
npm run start
```
**Access the DApp:** Access the DApp via a web browser at http://localhost:3000 by default.


## Contributing
We welcome contributions from the community to improve this DApp. If you're interested in contributing, please follow these guidelines:

1. Fork the repository and create your branch.
```bash
 git checkout -b feature/YourFeature
 ```
2. Commit your changes.
```bash
git commit -am 'Add new feature'
```

3. Push to the branch.
 ```bash
 git push origin feature/YourFeature
 ```

4. Submit a pull request detailing your changes.


## Contributors

1. Muhammad Aamir Khan - Developer
License

#### This project is licensed under the MIT License.
