const contractABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ];

  const contractAddress = '0xcf242c69F165f14dC62B0afDc0308a2C36969F32';
  const web3 = new Web3('http://localhost:9545');
  const helloWorld = new web3.eth.Contract(contractABI, contractAddress);

  document.addEventListener('DOMContentLoaded', () => {
    helloWorld.methods.hello().call().then(result => {
        document.getElementById('hello').innerHTML=result;
    });
  });
  