function solve(seconds,meters,secondPerMeters) {
    let swim = meters * secondPerMeters;
    let totalsec = Number((Math.floor((meters)/15)*12.5).toFixed(2));
    let sumTime = (swim+totalsec).toFixed(2);
  	let sub=(sumTime-seconds).toFixed(2);
    if (seconds <= sumTime) {
        console.log(`No, he failed! He was ${sub} seconds slower.`)
    }
    else  {
        console.log(`Yes, he succeeded! The new world record is ${(sumTime)} seconds.`)
    }
}