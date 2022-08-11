function calculate(budget, n_count , m_count , p_count){
    let n_sum = n_count * 250;
	let m_price = n_sum * 0.35;
	let m_sum = m_count * m_price;
	let p_price = n_sum * 0.10;
	let p_sum = p_count * p_price;
	let total_sum = n_sum + m_sum + p_sum;

if (n_count > m_count){
    total_sum -= total_sum * 0.15;
}
let diff = Math.abs(total_sum - budget);

if (total_sum <= budget){
    console.log(`You have ${diff.toFixed(2)} USD left!`);
}
else{
    console.log(`Not enough money! You need ${diff.toFixed(2)} USD more!`);
}
}