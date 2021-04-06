// Code your solution in this file!
const hq = 42


function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - hq) 

}





function distanceFromHqInFeet(distance) {
    return Math.abs(hq - distance)*264

}




function distanceTravelledInFeet(north, south) {
    return Math.abs(north - south)*264

}





function calculatesFarePrice(north, south) {
    let block = Math.abs(north - south)*264;
    if (block < 400) {return 0}
    else if (block > 400 && block <=2000) {return .02 * (block - 400)}
    else if (block > 2000 && block <=2500) {return 25}
    else if (block > 2500) {return 'cannot travel that far'}
}