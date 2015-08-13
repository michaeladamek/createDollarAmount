//=== === === === === === === === === === === ===
//What:   Future dollarAmount plugin
//Who:    Michael 
//When:   Aug 2015 
//=== === === === === === === === === === === === 

function dollarAmount(num) {
	total = parseFloat(Math.round(total * 100) / 100).toFixed(2);
	total = (total + "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	return total;
}