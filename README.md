# NFT Marketplace - Front

A Web3-enabled NFT marketplace frontend built with Angular 12 and Web3.js. Users can browse NFT listings and connect their MetaMask wallet to interact with the platform.

## Tech Stack

- **Framework:** Angular 12.2
- **Blockchain:** Web3.js 1.8.2 (MetaMask / window.ethereum)
- **Styling:** Bootstrap 5.1.3, Bootstrap Icons 1.6.1
- **Package Manager:** Yarn
- **Testing:** Karma + Jasmine

## Getting Started

```bash
# Install dependencies
yarn

# Start development server (http://localhost:4200)
yarn start

# Production build → dist/cloudkitchenweb/
yarn build

# Run unit tests
yarn test
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/marketplace` | NFT Marketplace |
| `/menu` | Menu listing |
| `/menu/:id` | NFT detail page |
| `/docs` | Documentation |
| `/about` | About |
| `/contact` | Contact |

## Wallet Integration

The navbar handles MetaMask connectivity — detecting `window.ethereum`, requesting account access, displaying the truncated wallet address, and reading the account balance. New blockchain features should extend this pattern rather than introducing separate Web3 instances.

## Project Structure

```
src/app/
├── pages/          # Page-level components
├── sharepage/      # Shared layout (navbar, footer)
├── services/       # Data services (NFT listings)
└── environments/   # Dev / prod config
```

## Generating Components

```bash
ng generate component pages/my-page
ng generate service services/my-service
```
