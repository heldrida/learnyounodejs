var total = 0,
    args = process.argv.slice(process.argv.length - 2, process.argv.length);

args.forEach(function (v, k) {

	total += Number(v);	

});


console.log(total);
