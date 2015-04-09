var fs = require("fs"),
    filePath = process.argv[2],
    count = null;

fs.readFile(filePath, function (err, data) {

	if (err) {
	
		console.log('err:', err);
	
	} else {
	
		count = data.toString().split('\n').length - 1;
		
		console.log(count);

	}

});

