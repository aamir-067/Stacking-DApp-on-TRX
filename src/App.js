import { useEffect, useState } from "react";
import ALL from "./MyContract.json"

function App() {
  const [address, setAddress] = useState("0x000");
  const [contract, setContract] = useState(null);
  const [text, setText] = useState("nothing");

  async function getTronWeb() {
    try{
      const tron = window.tron;
      const tronWeb = tron.tronWeb;
      console.log(tronWeb);
    setAddress(tronWeb);
    const emp = await tronWeb.contract(ALL.abi, ContractAddress);
    setContract(emp);
    return tronWeb;
    }catch(e){
      console.log(e);
    }
  }

  // temp();

//   const tronWeb = new TronWeb({
//     fullHost: 'https://api.trongrid.io',
//     headers: { "TRON-PRO-API-KEY": TronGridAPI },
//     privateKey: PrivateKey
// })

// const contract = n


const retText = async()=>{
  const res = await contract.getString().call();
  console.log(res);
  setText(res);
}


const setTheText = async()=>{
  const text = document.querySelector("input").value;
  const res = await contract.setString(text).send({
    feeLimit:100000000,
    callValue:0,
    shouldPollResponse:true
});
  console.log(res);
  retText();
}









  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
