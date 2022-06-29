import { ApiPromise, WsProvider } from "@polkadot/api";


(async () => {
    const api = await ApiPromise.create({
        provider: new WsProvider("wss://rpc.polkadot.io") // works
        // provider: new WsProvider("wss://kusama-rpc.polkadot.io") // works
        // provider: new WsProvider("wss://westend-rpc.polkadot.io") // error 
        // provider: new WsProvider("wss://rococo-rpc.polkadot.io") // error
    })
    
   
    api.rpc.grandpa.subscribeJustifications(
        async justification => {
            console.log(justification.toHex())
        }
    )
})()