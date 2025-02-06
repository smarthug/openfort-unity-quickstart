# Openfort Unity Quickstart
Minting ERC 1155 NFTs with gas fee sponsorship through [guest mode login](https://www.openfort.xyz/docs/guides/javascript/auth/guest)

* [slide](https://docs.google.com/presentation/d/1LyNoFS3vyIM4nnE3t5tfWBhIzgLuyafB9ynSBWl4JKo/edit?usp=sharing)
* [video](https://www.youtube.com/watch?v=68EOquzJs6U)
##  🚦Prerequisite
1. Access to the Openfort dashboard through whitelisting
2. Deployed ERC1155 Smart Contract Address


## 🚀 Getting started
Follow the relevant steps below.

### Backend
#### 1. Set Envirnment Variables
```
cp .env.example .env.local
```

SECRET_KEY can be found at Openfort Dashboard Deveopers Tab
```env
OPENFORT_SECRET_KEY=
```
<!-- <img width="964" alt="스크린샷 2025-02-03 174029" src="https://github.com/user-attachments/assets/52d0ecbe-b4e3-4d22-9dc9-db2840384d61" />
<img width="946" alt="스크린샷 2025-02-03 174322" src="https://github.com/user-attachments/assets/e5a2a9b6-dc8b-409e-8ebd-28311ada96ca" /> -->


#### 2. Run Backend
```
npm install
npm run dev
```

### Client
#### 1. Open Unity Hub
#### 2. Change API Keys


### 1. Clone the repo
```
npm install
```

### 2. Visit the Openfort Dashboard
check the [video](https://www.youtube.com/watch?v=68EOquzJs6U)

ABI
```
[{
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
}]
```
### 3. Fill the .env
```
cp .env.example .env.local
```

```
VITE_PUBLIC_OPENFORT_PUBLIC_KEY=
VITE_OPENFORT_SECRET_KEY=
VITE_PUBLIC_SHIELD_API_KEY=

VITE_PUBLIC_ERC1155_ADDRESS=
VITE_PUBLIC_POLICY_ID=
```

### 4. Run the Demo
```
npm run dev
```

