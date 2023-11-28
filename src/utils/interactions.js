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
  
  
  
  