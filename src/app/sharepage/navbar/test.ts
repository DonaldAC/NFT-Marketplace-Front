async connectWallet() {
  // existing code

  try {
    // Request account access if needed
    await (window as any).ethereum.request({ method: 'eth_requestAccounts' });

    // Use the Web3 instance to get the user's address
    const accounts = await web3.eth.getAccounts();
    const userAddress = accounts[0];

    console.log('Connected to wallet with address', userAddress);

    // Update the button label with the user's address and add the connected-wallet class
    this.walletButtonLabel = userAddress;
    const connectButton = document.getElementById('connectButton');
    if (connectButton) {
      connectButton.classList.add('connected-wallet');
    }
  } catch (error) {
    // existing code
  }
}
