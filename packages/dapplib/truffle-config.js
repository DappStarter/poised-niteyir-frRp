require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift rescue place million just entire metal gaze'; 
let testAccounts = [
"0x5a932322cd877433f095796bc5df4c527f89f6c7e5bb27a2066a6a5e10fa7fd0",
"0x4536f11fab8ac0ae01fca643788e85b44a938043e68adf0de2584b79e72ff6ff",
"0xeb1a8c846723f3d9adea6ff070a9775e66a2ac38dba9aa497c364cff68fe060a",
"0xf9f5942c9366d1374ed2ab8119d87021331d86266a971217bc1160cbda5ec601",
"0xd0300c903d95350e2dd2ff4fcf35c378500a2774b0445de3e37d6ba5181898f4",
"0xb5362700203764df37ff70eb3d11a01ef9ffad1f88723e2dcb1c8a051e2a503f",
"0xbdbc06e44482e4d5e352122ff107bdab7a04df5c61b46cbea922dac4daec875b",
"0xc44f813e52f14a23661560cfc0909ce5d48f1712e73bc490e23e8b4b2feac471",
"0x657bece4a997bedeca0b65c83f5a580228030690f4f13cb9d8f21a21ee562d6a",
"0xb83ce2483febbb5c53aa5ee0c48a1eecb834fac24a0dee06ebb8fbab29a0e107"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


