require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet random six punch grace infant equal ghost'; 
let testAccounts = [
"0xddc05acf0f9b203fddf9d4c79493ec071ee69178de055c04fc3f705bdef3120f",
"0x86d63c618d1c232b27b132c827fa5345137a5087f3a2ecb33b1b37c668ae7c4c",
"0xd53a19409449a79dfdd6752fa57fcbe5eec8fe456fcb6fbeb3e007c03b7f4c2f",
"0x504c9b660b231ccd9d582cb9f5307dd7efd1a5f6209cb72ca3aa840f33fa69f0",
"0xc6dfc63acdd066426af765dd25ac60a1cba7423b629ffaf21475c67b630b335c",
"0xd05fe2f0193cea9858864fa1839c21379cabc48e84a1a41df993f482e7897d60",
"0xae5c990f7d8c4851fb47e79bf0d51f2366426f063bb35a45848cf399560df16e",
"0x4b27c2d37f11f3cdb09d02731d51b2102f90a6ce50a734e8903c3a96d28bb271",
"0x0c3c5c44ca132dfb4e5c7aaae58d81873fc5d2c53a9d13a8d383b815e16e6779",
"0x52fa1e3900e66917b23ad9a4f9319e29069fc31d8ffd05bb08098c449c321f7f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

