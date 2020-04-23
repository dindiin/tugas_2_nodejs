// siswaController.js

// import siswa model
Siswa = require('./siswaModel');

// Handle index actions
exports.index = function (req, res) {
  Siswa.get(function (err, siswa) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Siswa retrieved successfully",
      data: siswa
    });
  });
};

// Handle create siswa actions
exports.new = function (req, res) {
  var siswa = new Siswa();
  siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
  siswa.tanggallahir = req.body.tanggallahir;
  siswa.jeniskelamin = req.body.jeniskelamin;
  siswa.hobi = req.body.hobi;

  // save the siswa and check for errors
  siswa.save(function (err) {
    // if (err)
    // res.json(err);
    res.json({
      message: 'Siswa berhasil ditambahkan',
      data: siswa
    });
  });
};
