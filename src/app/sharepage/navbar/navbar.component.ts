import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  walletButtonLabel = 'Connect Wallet';
  errorMessage = '';
  balanceReady = true;

  constructor() { }

  ngOnInit(): void {
  }

  async connectWallet() {
    if ((window as any).ethereum) {
      const web3 = new Web3((window as any).ethereum);
      const walletBtn = document.getElementById('wallet');
      console.log('the wallet node element is: ', walletBtn);
      try {
        // Request account access if needed
        await (window as any).ethereum.request({ method: 'eth_requestAccounts' });

        // Get the user address
        const accounts = await web3.eth.getAccounts();
        const strLength = accounts[0].length;
        console.log(strLength);
        const userAddress = accounts[0].substring(0, 6).concat('...', accounts[0].substring(strLength - 4));
        console.log('Connected to wallet with address', userAddress);

        this.walletButtonLabel = userAddress;

        const connectButton = document.getElementById('connectButton');
        console.log('connect Button: ', connectButton);
        if (connectButton) {
          connectButton.classList.add('connected-wallet');
        }
      } catch (error) {
        console.error(error);
        this.errorMessage = 'Failed to connect to wallet. Please try again.';
      }
    } else {
      console.log('Please install MetaMask to connect your wallet');
      this.errorMessage = 'Please install MetaMask to connect your wallet.';
    }
  } 

  disconnectWallet() {
    this.walletButtonLabel = 'Connect Wallet';
    this.errorMessage = '';
  }

  async checkMyBalance() {
    if ((window as any).ethereum) {
      const web3 = new Web3((window as any).ethereum);
      try {
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];
        const balance = await web3.eth.getBalance(userAddress);
        console.log('Balance for', userAddress, 'is', web3.utils.fromWei(balance));
      } catch (error) {
        console.error(error);
        this.errorMessage = 'Failed to get your balance. Please try again later.';
      }
    } else {
      console.log('Please install MetaMask to connect your wallet');
      this.errorMessage = 'Please install MetaMask to connect your wallet.';
    }
  }

  checkMyNFTs() {}

}
