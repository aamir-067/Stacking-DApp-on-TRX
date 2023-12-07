import {store} from "../app/store";
import { setPeerDetails } from "../features";



// const 
export const stackTokens = async ({amount})=>{
  const web3Api = store.getState(state => state).web3Api;
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
  console.log("unstack function hit successfully");
  if(web3Api.provider){
    try{
        const res = await web3Api.contract.unstackTrx(Number(amount) * 1000000).send({   // since we have to send the amount in sun so i multiply 1000000
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
  if(web3Api.provider){
    try{

        const res = await web3Api.contract.getDetails().call();
        const reward = await web3Api.contract.calculateTotalReword().call();

        const address = web3Api.provider.defaultAddress.base58;
        const tokensInWallet = await web3Api.provider.trx.getBalance(address);  // token in wallet in from of sun.

        store.dispatch(setPeerDetails({
          total : web3Api.provider.toDecimal(res[0]) / 1000000,
          inWallet : web3Api.provider.toDecimal(tokensInWallet) / 1000000,
          history : res[2],
          reward : web3Api.provider.toDecimal(reward),
        }))
        return true;
    }catch(e){
      console.log("error in sending transaction : ", e)
      return "error while sending transaction";
    }
  }else{
    console.log("connect wallet first");
    return "connect wallet first";
  }
}

export const calculateReward = async ()=>{
  const web3Api = store.getState(state => state).web3Api;
  const record = store.getState(state => state.peerDetails);
  if(web3Api.provider){
    try{
        const res = await web3Api.contract.calculateTotalReword().call();
        const reward  = web3Api.provider.toDecimal(res);

        store.dispatch(setPeerDetails({
          ...record,
          reward,
        }));

        console.log("latest reward 2 : ", web3Api.provider.toDecimal(res));

        return true;

    }catch(e){
      console.log("error in checking Reward : ", e)
      return "error while checking Reward";
    }
  }else{
    console.log("connect wallet first");
    return "connect wallet first";
  }
}
  
