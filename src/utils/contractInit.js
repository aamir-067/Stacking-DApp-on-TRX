async function getTronWeb() {
    try {
        const tron = window.tron;
        const tronWeb = tron.tronWeb;
        console.log(tronWeb);
        setAddress(tronWeb);
        const emp = await tronWeb.contract(ALL.abi, ContractAddress);
        setContract(emp);
        return tronWeb;
    } catch (e) {
        console.log(e);
    }
}