angular.module('starter.services', [])
  .factory('Laporan', function($http) {
    return {
      getLaporan: function(laporan) {
        return $http.post('http://128.199.210.253/phplele/laporan.php')
        .success(function (data) {
          return data;
        }).error(function (err) {
            console.log('asaca');
          return err;
        });
      }
    }
  })

  .factory('Detail', function($http) {
    return {
      getDetail: function(laporan) {
        return $http.post('http://128.199.210.253/phplele/detailLaporan.php',{'idLaporan': laporan}).success(function(data){
          return data;
           console.log(data);
        }).error(function (err) {
            console.log('asaca');
          return err;
        });
      }
    }
  })

  .factory('CekKualitas', function($http,$q) {
      return {
    tambah: function (jenisKelamin,usia,berat,panjang){
          var deferred = $q.defer();
          var promise = deferred.promise;
          var link = 'http://128.199.210.253/phplele/cekKualitas.php';
          $http.post(link, {'jenisKelamin' : jenisKelamin,'usia' : usia,'berat' : berat,'panjang' : panjang}).then(function (res){
            console.log(res.data);
            if (res.data == 'ok') {
              deferred.resolve('Success');
            } else {
              deferred.reject('Wrong credentials.');
            }
          });
          promise.success = function(fn) {
            promise.then(fn);
            return promise;
          }
          promise.error = function(fn) {
            promise.then(null, fn);
            return promise;
          }
          return promise;
        },
      };
    })