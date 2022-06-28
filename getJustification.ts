import { ApiPromise, WsProvider } from "@polkadot/api";


(async () => {
    const api = await ApiPromise.create({
        provider: new WsProvider("wss://rococo-rpc.polkadot.io")
    })
    
   
    api.rpc.grandpa.subscribeJustifications(
        async justification => {
            console.log(justification.toHex())
        }
    )
})()