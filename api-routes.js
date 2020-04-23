// initialize express router
let router = require('express').Router();

// set default api response
router.get('/', function (req, res) {
  res.json({
    status: 'API its working',
    message: 'Wellcome to TugasCRUD'
  });
});

// import siswaController
var siswaController = require('./siswaController');

// siswa Routes
router.route('/siswa')
.get(siswaController.index)
.post(siswaController.new);

// export API
module.exports = router;
