import React from 'react'
import { Center, Square, Circle , Text, Image} from "native-base";


function DepositScreen() {
    return <Center>
        <Text>
                Minimum amount: 0.0003
                If you do not have bitcoin, you can buy it Click here
            </Text>
            <Text>
                Transfer bitcoin (BTC) address
            </Text>
            <Image source={{
                uri: "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=bitcoin:353DzbiUnQTxJromjoQCwBRP4iKLKojkbZ"
                }} alt="Alternate Text" size="xl" />
            <Text>
                Wallet Bitcoin address: 353DzbiUnQTxJromjoQCwBRP4iKLKojkbZ
            </Text>
    </Center>;
//   return (
        // <Center>
            
        // </Center>;
    // )
}

export default DepositScreen