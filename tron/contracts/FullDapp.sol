// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
contract FullDapp {

    enum TrxMethod {
        deposit,
        withdraw
    }
    struct Details {
        uint amount;
        TrxMethod method;
        uint time;
    }
    struct Record{
        uint total;
        uint avgTime;
        Details[] fullDetails;
    }

    event Deposit(address _owner, uint _amount);
    event Withdraw(address _owner, uint _reward);

    address public owner;
    constructor(address _owner) {
        owner = _owner;
    }

    mapping(address => Record) _stakers;



    function stackTrx() external payable returns(bool){
        // check tokens
        require(msg.value > 50 * (10 ** 6), "Trx must be greater then 50");
        Details memory tempRecord = Details(msg.value, TrxMethod.deposit, block.timestamp);

        Record storage personDetails = _stakers[msg.sender];
        personDetails.total += msg.value;  // recalculate total tokens

        // push the temprecord
        personDetails.fullDetails.push(tempRecord);

        // for avg time
        uint noOfRecords = personDetails.fullDetails.length;
        uint  totalTime;
        for (uint i = 0; i < noOfRecords; i++){
            totalTime += personDetails.fullDetails[i].time;
        }
        uint avgTime = totalTime / noOfRecords;

        personDetails.avgTime =  avgTime;

        emit Deposit(msg.sender, msg.value / (10 **  6));
        return true;
    }


    function unstackTrx(uint _amount) external{
        require(_amount > 0, "amount should be greater than 0");
        require(_stakers[msg.sender].total >= _amount, "not enough tokens you have");

        Record storage personDetails = _stakers[msg.sender];

        // edit the details
        Details memory tempRecord = Details(_amount, TrxMethod.withdraw, block.timestamp);
        personDetails.total -= _amount;  // recalculate total tokens
         // push the temprecord
        personDetails.fullDetails.push(tempRecord);

        // calculate the the reword tokens
        uint reward;
        // todo : check for the tokens availibitlity in contract address
        if(true){

        }






        emit Withdraw(msg.sender, reward);
    }

    function calculateReword(uint _time, uint _amount) internal view returns(uint){
        //? mechanism is that you will get one reward token for each trx token stacked for 5 mins
        //? so the one period == 5 mins  == 300 seconds 

        uint periods = (block.timestamp - _time)/300;

        uint reward = periods * (_amount / (10 ** 6));   // trx tokens has 6 decimals to deviding it will give you axact tokens amount.

        return reward;

    }

    function calculateTotalReword() public view returns(uint){
        Record memory personRecord = _stakers[msg.sender];

        if(personRecord.total <= 0){
            return 0;

        }else{

        uint reward = calculateReword(personRecord.avgTime, personRecord.total);
        return reward;
        }
    }

    function getDetails() public view returns(Record memory){
        return _stakers[msg.sender];
    }
}



