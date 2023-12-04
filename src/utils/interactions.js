import {store} from "../app/store";
// const retText = async()=>{
//     const res = await contract.getString().call();
//     console.log(res);
//     setText(res);
//   }
  
  
//   const setTheText = async()=>{
//     const text = document.querySelector("input").value;
//     const res = await contract.setString(text).send({
//       feeLimit:100000000,
//       callValue:0,
//       shouldPollResponse:true
//   });
//     console.log(res);
//     retText();
//   }



// const 
export const stackTokens = async ({amount})=>{
  const web3Api = store.getState(state => state).web3Api;
  console.log("stack function hitted successfully");
  if(web3Api.provider){
    try{
        const res = await web3Api.contract.stackTrx().send({
          feeLimit:100000000,
          callValue: amount * 1000000,
          shouldPollResponse:true
        });

        console.log("deposit response : ", res);
    }catch(e){
      console.log("error in sending transaction : ",e)
      return "error while sending transaction";
    }
  }else{
    console.log("connect wallet first");
    return "connect wallet first";
  }
}


export const unStackTokens = async ({amount})=>{
  const web3Api = store.getState(state => state).web3Api;
  console.log("unstack function hitted successfully");
  if(web3Api.provider){
    try{
        const res = await web3Api.contract.unstackTrx(amount).send({
          feeLimit:100000000,
          callValue: 0,
          shouldPollResponse:true
        });

        console.log("Unstack response : ", res);

    }catch(e){
      console.log("error in sending transaction : ", e)
      return "error while sending transaction";
    }
  }else{
    console.log("connect wallet first");
    return "connect wallet first";
  }
}

export const getDetails = async ()=>{
  const web3Api = store.getState(state => state).web3Api;
  console.log("getDetails function hit successfully");
  if(web3Api.provider){
    try{
        const res = await web3Api.contract.getDetails().call();

        console.log("getDetails response : ", res);
        return {...res};
    }catch(e){
      console.log("error in sending transaction : ", e)
      return "error while sending transaction";
    }
  }else{
    console.log("connect wallet first");
    return "connect wallet first";
  }
}
  
