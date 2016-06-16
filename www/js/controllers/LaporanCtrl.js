app.controller('LaporanCtrl', function ($rootScope, $scope, $stateParams, ionicMaterialInk, Laporan) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    $rootScope.$on('todo:laporanChanged', function() {
      $scope.showLaporan();
    });
    $scope.showLaporan = function(){
      Laporan.getAll().success(function (data) {
        $scope.laporana = data;
      });
    };
    $scope.showLaporan();
})	
;