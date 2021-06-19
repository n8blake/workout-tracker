const path = require('path');
const router = require('express').Router();

router.get('/', (request, response) => {
	response.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/stats', (request, response) => {
	response.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get('/exercise', (request, response) => {
	// if(request.query.id !== 'undefined' ){
	// 	response.send(request.query.id);
	// } else {
	// 	response.sendFile(path.join(__dirname, '../public/exercise.html'));
	// }
	response.sendFile(path.join(__dirname, '../public/exercise.html'));
});


module.exports = router;
