function kilometerToMeter(kilometer){
    if(typeof kilometer !="number"){
        return "Please Provide A Number";
    }
    else if(kilometer <0){
        return "Please Provide A Positive Number";
    }
    else{
        var oneKilometer=1000;
        var convertedMeter= kilometer*oneKilometer;
        return convertedMeter;
    }
}

function budgetCalculator(amountOfWatch, amountOfPhone, amountOfLaptop){
    if(typeof amountOfWatch !="number"){
        return "Please Provide A Number";
    }
    if(typeof amountOfPhone !="number"){
        return "Please Provide A Number";
    }
    if (typeof amountOfLaptop !="number"){
        return "Please Provide A Number";
    }
    if (amountOfWatch<0){
        return "Please Provide A Positive Number";
    }
    if (amountOfPhone<0){
        return "Please Provide A Positive Number";
    }
    if(amountOfLaptop<0){
        return "Please Provide A Positive Number";
    }
    else{
        var watchPrice= 50;
        var phonePrice=100;
        var laptopPrice=500;
        var totalBudget= (amountOfWatch*watchPrice)+(amountOfPhone*phonePrice)+(amountOfLaptop*laptopPrice);
        return totalBudget;
    }
}

function hotelCost(numberOfDays){
    if(typeof numberOfDays!="number"){
        return "Please Provide A Number";
    }
    if(numberOfDays<0){
        return "Please Provide A Positive Number"; 
    }
    var roomRateForFirstTenDay= 100;
    var roomRateForAfterTenDay=80;
    var roomRateForAfterTwentyDay=50;

    if(numberOfDays <=10){
        totalCost= numberOfDays*roomRateForFirstTenDay;
        return totalCost;
    }
    else if( numberOfDays<=20){
        var costOfFirstTenDay= (10*roomRateForFirstTenDay);
        var extraDay= numberOfDays-10;
        var totalCost= costOfFirstTenDay+(extraDay*roomRateForAfterTenDay);
        return totalCost;
    }
    else{
        var costOfFirstTenDay= (10*roomRateForFirstTenDay);
        var costOfAfterTenDay= (10*roomRateForAfterTenDay);
        var extraTwentyDay= numberOfDays-20;
        var totalCost= costOfFirstTenDay+costOfFirstTenDay+ (extraTwentyDay*roomRateForAfterTwentyDay);
        return totalCost;
    }
}

function megaFriend(nameListOfFriends){
    if(typeof nameListOfFriends !="object"){
        return "Please Provide An Array";
    }
    if(!nameListOfFriends.length>0){
        return "Please Provide Atleast One Friend Name";
    }
    var friendName= nameListOfFriends[0];
    if(typeof friendName=="undefined"){
        return "Please Provide String Element";
    }
    var friendNameLength= nameListOfFriends[0].length;
    for (var i=0; i<nameListOfFriends.length; i++){
        if(typeof nameListOfFriends[i] != "string"){
            return "Please Provide String Element";
        }
        if(friendNameLength<nameListOfFriends[i].length){
            friendName = nameListOfFriends[i];
            friendNameLength= nameListOfFriends[i].length;
        }
    }
    return friendName;
}