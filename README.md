# Justification validation:
There are inconsistencies between Polkadot & Kusama relaychains and the testnets (Rococo & Westend). We realized a couple of days ago that the verifications broke at some point for Rococo. Essentially it boils down to the signature checks returning false. A quick guide to reproduce:

## Steps to Reproduce:
- run `yarn` to install TS dependencies.
- in `getJustification.ts`, select chain to receive justification from by setting the provider
- run `ts-node getJustification.ts` and copy encoded justifcation into main.rs (without leading 0x)
- run `cargo run` and copy `target_hash` from the console output
- use <https://polkadot.js.org/apps/#/explorer> to lookup `currentSetID` (chain_state -> grandpad -> currentSetID) and add target_hash as blockhash
- set returned ID as `authorities_set_id` in `main.rs`
- rerun `cargo run`

The following approach used to work with Rococo, but a couple of days ago, we realized this is not the case anymore. We thought updating to the newest `finality_grandpa` and `sp_finality_grandpa` versions will fix the issue, but it is persisting. Is this currently expected and the justification validation has changed? Or will this work again on Rococo in the future.