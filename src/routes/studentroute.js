const express = require('express')
const {post_data, get_data,put_data,del_data} = require('../controller/studentController');

const router = express.Router();

router.get('/',get_data);
router.post('/post',post_data);
router.put('/put/:_id',put_data);
router.delete('/delete/:_id',del_data);

module.exports = router;