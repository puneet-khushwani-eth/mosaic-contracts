// Copyright 2018 OpenST Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ----------------------------------------------------------------------------
//
// http://www.simpletoken.org/
//
// ----------------------------------------------------------------------------

const AuxStoreUtils = require('./aux_store_utils.js');
const BN = require('bn.js');

const initialBlock = {
        height: 0,
        hash: '0x7f1034f3d32a11c606f8ae8265344d2ab06d71500289df6f9cac2e013990830c',
        stateRoot: '0xb6a85955e3671040901a17db85b121550338ad1a0071ca13d196d19df31f56ca',
        gas: new BN('2100'),
        transactionRoot: '0x5fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67',
};

// Maps heights to block data at that height, including an RLP encoded header.
const blocks = {
    1: {
        header: '0xf901f9a07f1034f3d32a11c606f8ae8265344d2ab06d71500289df6f9cac2e013990830ca01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0ef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017a05fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67a0bc37d79753ad738a6dac4921e57392f145d8887476de3f783dfa7edae9283e52b90100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008302000001832fefd8825208845506eb0780a0bd4472abb6659ebe3ee06ee4d7b72a00a9f4d001caca51342001075469aff49888a13a5a8c8f2bb1c4',
        hash: '0xc5a48e5dc71e5e4a96b14f2564d0c95b1b37bad30f3abd12577b7da06ad01d37',
        stateRoot: '0xef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017',
        gas: new BN('21000'),
        transactionRoot: '0x5fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67',
    },
    2: {
        header: '0xf901f9a0c5a48e5dc71e5e4a96b14f2564d0c95b1b37bad30f3abd12577b7da06ad01d37a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0ef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017a05fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67a0bc37d79753ad738a6dac4921e57392f145d8887476de3f783dfa7edae9283e52b90100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008302000002832fefd8825208845506eb0780a0bd4472abb6659ebe3ee06ee4d7b72a00a9f4d001caca51342001075469aff49888a13a5a8c8f2bb1c4',
        hash: '0xaca01fe2aee27754baa2399a915d608991cfb58553775126fb031ef8613ee047',
        stateRoot: '0xef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017',
        gas: new BN('21000'),
        transactionRoot: '0x5fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67',
    },
    3: {
        header: '0xf901f9a0aca01fe2aee27754baa2399a915d608991cfb58553775126fb031ef8613ee047a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0ef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017a05fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67a0bc37d79753ad738a6dac4921e57392f145d8887476de3f783dfa7edae9283e52b90100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008302000003832fefd8825208845506eb0780a0bd4472abb6659ebe3ee06ee4d7b72a00a9f4d001caca51342001075469aff49888a13a5a8c8f2bb1c4',
        hash: '0xdcd79d30c0d69fa20dd8fe8f6bf356db5a91228e8eea30ab7d497984e9d88220',
        stateRoot: '0xef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017',
        gas: new BN('21000'),
        transactionRoot: '0x5fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67',
    },
    4: {
        header: '0xf901f9a0dcd79d30c0d69fa20dd8fe8f6bf356db5a91228e8eea30ab7d497984e9d88220a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0ef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017a05fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67a0bc37d79753ad738a6dac4921e57392f145d8887476de3f783dfa7edae9283e52b90100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008302000004832fefd8825208845506eb0780a0bd4472abb6659ebe3ee06ee4d7b72a00a9f4d001caca51342001075469aff49888a13a5a8c8f2bb1c4',
        hash: '0xefe32d9b0a4579882922c3bf5f92e0f0a649af50f02eb572f4df32cb48e5a611',
        stateRoot: '0xef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017',
        gas: new BN('21000'),
        transactionRoot: '0x5fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67',
    },
    5: {
        header: '0xf901f9a0efe32d9b0a4579882922c3bf5f92e0f0a649af50f02eb572f4df32cb48e5a611a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0ef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017a05fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67a0bc37d79753ad738a6dac4921e57392f145d8887476de3f783dfa7edae9283e52b90100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008302000005832fefd8825208845506eb0780a0bd4472abb6659ebe3ee06ee4d7b72a00a9f4d001caca51342001075469aff49888a13a5a8c8f2bb1c4',
        hash: '0x454255babf96779219b31613464aff4db4c260b36989cac3c0ea32c97ab3aed6',
        stateRoot: '0xef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017',
        gas: new BN('21000'),
        transactionRoot: '0x5fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67',
    },
    6: {
        header: '0xf901f9a0454255babf96779219b31613464aff4db4c260b36989cac3c0ea32c97ab3aed6a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0ef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017a05fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67a0bc37d79753ad738a6dac4921e57392f145d8887476de3f783dfa7edae9283e52b90100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008302000006832fefd8825208845506eb0780a0bd4472abb6659ebe3ee06ee4d7b72a00a9f4d001caca51342001075469aff49888a13a5a8c8f2bb1c4',
        hash: '0xce1ed58d557df588eb7a282941a4ae6e058967e958a65a87b13dfd2615f28aa2',
        stateRoot: '0xef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017',
        gas: new BN('21000'),
        transactionRoot: '0x5fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67',
    },
    7: {
        header: '0xf901f9a0ce1ed58d557df588eb7a282941a4ae6e058967e958a65a87b13dfd2615f28aa2a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0ef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017a05fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67a0bc37d79753ad738a6dac4921e57392f145d8887476de3f783dfa7edae9283e52b90100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008302000007832fefd8825208845506eb0780a0bd4472abb6659ebe3ee06ee4d7b72a00a9f4d001caca51342001075469aff49888a13a5a8c8f2bb1c4',
        hash: '0x13cd2a518d3aa9a2fe4d544b9c285ab5bb39c66b681dea9e3782fe7d26875cf5',
        stateRoot: '0xef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017',
        gas: new BN('21000'),
        transactionRoot: '0x5fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67',
    },
    8: {
        header: '0xf901f9a013cd2a518d3aa9a2fe4d544b9c285ab5bb39c66b681dea9e3782fe7d26875cf5a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0ef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017a05fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67a0bc37d79753ad738a6dac4921e57392f145d8887476de3f783dfa7edae9283e52b90100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008302000008832fefd8825208845506eb0780a0bd4472abb6659ebe3ee06ee4d7b72a00a9f4d001caca51342001075469aff49888a13a5a8c8f2bb1c4',
        hash: '0x560d5fbb6c565e489134405eed39835ea7b7e00e5af910a6753f5496e0e6dd33',
        stateRoot: '0xef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017',
        gas: new BN('21000'),
        transactionRoot: '0x5fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67',
    },
    9: {
        header: '0xf901f9a0560d5fbb6c565e489134405eed39835ea7b7e00e5af910a6753f5496e0e6dd33a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0ef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017a05fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67a0bc37d79753ad738a6dac4921e57392f145d8887476de3f783dfa7edae9283e52b90100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008302000009832fefd8825208845506eb0780a0bd4472abb6659ebe3ee06ee4d7b72a00a9f4d001caca51342001075469aff49888a13a5a8c8f2bb1c4',
        hash: '0x8ceeb930ac5a14f34469bd601a93d628b121dcf659b92bdb96a39226ba9b22b9',
        stateRoot: '0xef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017',
        gas: new BN('21000'),
        transactionRoot: '0x5fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67',
    },
    10: {
        header: '0xf901f9a08ceeb930ac5a14f34469bd601a93d628b121dcf659b92bdb96a39226ba9b22b9a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0ef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017a05fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67a0bc37d79753ad738a6dac4921e57392f145d8887476de3f783dfa7edae9283e52b9010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000830200000a832fefd8825208845506eb0780a0bd4472abb6659ebe3ee06ee4d7b72a00a9f4d001caca51342001075469aff49888a13a5a8c8f2bb1c4',
        hash: '0xd65c53ebc7239b0f3e15b330e381881e3a5714b6c170421f70c24ed2beffc0e6',
        stateRoot: '0xef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017',
        gas: new BN('21000'),
        transactionRoot: '0x5fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67',
    },
    11: {
        header: '0xf901f9a0d65c53ebc7239b0f3e15b330e381881e3a5714b6c170421f70c24ed2beffc0e6a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0ef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017a05fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67a0bc37d79753ad738a6dac4921e57392f145d8887476de3f783dfa7edae9283e52b9010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000830200000b832fefd8825208845506eb0780a0bd4472abb6659ebe3ee06ee4d7b72a00a9f4d001caca51342001075469aff49888a13a5a8c8f2bb1c4',
        hash: '0x5c9510134bad0548041d0f4574cc5065bb38ccec36be028e5e5178caaaf87a93',
        stateRoot: '0xef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017',
        gas: new BN('21000'),
        transactionRoot: '0x5fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67',
    },
    12: {
        header: '0xf901f9a05c9510134bad0548041d0f4574cc5065bb38ccec36be028e5e5178caaaf87a93a01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347948888f1f195afa192cfee860698584c030f4c9db1a0ef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017a05fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67a0bc37d79753ad738a6dac4921e57392f145d8887476de3f783dfa7edae9283e52b9010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000830200000c832fefd8825208845506eb0780a0bd4472abb6659ebe3ee06ee4d7b72a00a9f4d001caca51342001075469aff49888a13a5a8c8f2bb1c4',
        hash: '0x2fd293341ba54b01eac151d44e8d23eb1d27d97b46bcb71e452847862d054703',
        stateRoot: '0xef1552a40b7165c3cd773806b9e0c165b75356e0314bf0706f279c729f51e017',
        gas: new BN('21000'),
        transactionRoot: '0x5fe50b260da6308036625b850b5d6ced6d0a9f814c0688bc91ffb7b7a3a54b67',
    },
};

/**
 * Calculates the accumulated gas from an accumulated gas and a new one.
 *
 * @param {BN} oldAccumulatedGos The accumulated gas so far.
 * @param {BN} newGas The new gas to add.
 *
 * @returns {BN} The new accumulated gas that includes the new gas.
 */
accumulateGas = (oldAccumulatedGos, newGas) => {
    return oldAccumulatedGos.add(newGas);
};

/**
 * Iterates over all blocks and calculates the accumulated gas and transaction
 * root, based on the accumulated gas and transaction root of the previous item
 * in the list.
 */
calculateAccumulatedValues = () => {
    blocks[1].accumulatedGas = accumulateGas(initialBlock.gas, blocks[1].gas);
    blocks[1].accumulatedTransactionRoot = AuxStoreUtils.accumulateTransactionRoot(
        initialBlock.transactionRoot,
        blocks[1].transactionRoot
    );
    for (let i = 2; i < 13; i++) {
        blocks[i].accumulatedGas = accumulateGas(
            blocks[i-1].accumulatedGas,
            blocks[i].gas,
        );
        blocks[i].accumulatedTransactionRoot = AuxStoreUtils.accumulateTransactionRoot(
            blocks[i-1].accumulatedTransactionRoot,
            blocks[i].transactionRoot,
        );
    }
};

calculateAccumulatedValues();

module.exports = {
    initialBlock: initialBlock,
    blocks: blocks,
};