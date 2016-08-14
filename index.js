var express = require('express'),
    router = express.Router();
    
// 多语言 RUL load 测试
router.get('/language', function(req, resp) {
    var lang = req.query.lang;
    console.log('have a  request for language: ' + lang);
    resp.sendFile(__dirname + '/public/language-data/locale-'+lang+'.json');
});
module.exports = router;