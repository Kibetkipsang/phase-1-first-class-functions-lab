const driversNames = ('Antonia', 'Nuru', 'Amari', 'Mo')
const returnFirstTwoDrivers = function(driversNames){
    return driversNames.slice (0,2);
}
const returnLastTwoDrivers = function(driversNames){
    return driversNames.slice (-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiplier){
    return function(fare){
        return fare*multiplier
    }
}
const fareDoubler =  createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function createFareMultiplier(multiply) {
    return function(fare) {
        return fare * multiply;
    };
}
function selectDifferentDrivers (driversNames, selectFunction){
    return selectFunction(driversNames);
}



