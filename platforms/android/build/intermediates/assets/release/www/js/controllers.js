angular.module('starter.controllers', [])
  
//App
  app.controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

    var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        //location.href = 'https://twitter.com/satish_vr2011';
        window.open('https://twitter.com/satish_vr2011', '_blank');
    });

    // .fromTemplate() method
    var template = '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">My Popover Title</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
                    '       My Popover Contents' +
                    '   </ion-content>' +
                    '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });
})

//Cek Kualitas
  app.controller('CekKualitasCtrl', function ($rootScope, $scope, $stateParams, ionicMaterialInk, CekKualitas, $state) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    $scope.data = {};
    $scope.tambah = function (response) {
        console.log('lllll');
       CekKualitas.tambah($scope.data.jenisKelamin,$scope.data.usia,$scope.data.berat,$scope.data.panjang).success(function() {
        $scope.$emit('todo:laporanChanged');
        $state.go('app.laporan');
        console.log(response);
      }).error(function(err) {
        console.log(err);
        
      });
    };
  }) 
/*        var data = {
            waktu: $scope.data.waktu,
            jenisKelamin: $scope.data.jenisKelamin,
            usia: $scope.data.usia,
            berat: $scope.data.berat,
            panjang: $scope.data.panjang,
            cog: $scope.data.cog,
            hasilCek: $scope.data.hasilCek,
        }
    Cek.tambah(data).success(function () {
      $scope.$emit('todo:laporanChanged');
      $state.go('app.laporan');
    });
  }
})*/

 

//Components
  app.controller('ComponentsCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
})

//Detail
  app.controller('DetailCtrl', function ($rootScope, $scope, $state, $stateParams, ionicMaterialInk, Detail) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    $rootScope.$on('todo:detailChanged', function() {
      $scope.showDetail();
    });
      console.log($stateParams);
    $scope.showData = function(idLaporan) {
      Detail.getDetail($stateParams.idLaporan).success(function (data) {
        $scope.details = data;
        console.log($scope.details)
      });
    };
})

//Extensions
  app.controller('ExtensionsCtrl', function ($scope, $stateParams, $ionicActionSheet, $timeout, $ionicLoading, $ionicModal, $ionicPopup, ionicMaterialInk) {

    // Triggered on a button click, or some other target
    $scope.actionSheet = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [{
                text: '<b>Share</b> This'
            }, {
                text: 'Move'
            }],
            destructiveText: 'Delete',
            titleText: 'Modify your album',
            cancelText: 'Cancel',
            cancel: function() {
                // add cancel code..
            },
            buttonClicked: function(index) {
                return true;
            }
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            hideSheet();
        }, 2000);

    };

    $scope.loading = function() {
        $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        });

        // For example's sake, hide the sheet after two seconds
        $timeout(function() {
            $ionicLoading.hide();
        }, 2000);
    };

    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $scope.modal.show();
        $timeout(function () {
            $scope.modal.hide();
        }, 2000);
    };
    // Cleanup the modal when we're done with it
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    // Popover
    $scope.popover = function() {
        $scope.$parent.popover.show();
        $timeout(function () {
            $scope.$parent.popover.hide();
        }, 2000);
    };

    // Confirm
    $scope.showPopup = function() {
        var alertPopup = $ionicPopup.alert({
            title: 'You are now my subscribed to Cat Facts',
            template: 'You will meow receive fun daily facts about CATS!'
        });

        $timeout(function() {
            //ionic.material.ink.displayEffect();
            ionicMaterialInk.displayEffect();
        }, 0);
    };

    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
})

//Ink
  app.controller('InkCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();
})

//Laporan
  app.controller('LaporanCtrl', function ($rootScope, $scope, $stateParams, ionicMaterialInk, Laporan) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    $rootScope.$on('todo:laporanChanged', function() {
      $scope.showLaporan();
    });
    $scope.showLaporan = function(){
      Laporan.getLaporan().success(function (data) {
        $scope.laporana = data;
        console.log($scope.laporana);
      });
    };
    $scope.showLaporan();
})

//Lists  
app.controller('ListsCtrl', function ($scope, $stateParams, ionicMaterialMotion) {

    var reset = function() {
        var inClass = document.querySelectorAll('.in');
        for (var i = 0; i < inClass.length; i++) {
            inClass[i].classList.remove('in');
            inClass[i].removeAttribute('style');
        }
        var done = document.querySelectorAll('.done');
        for (var i = 0; i < done.length; i++) {
            done[i].classList.remove('done');
            done[i].removeAttribute('style');
        }
        var ionList = document.getElementsByTagName('ion-list');
        for (var i = 0; i < ionList.length; i++) {
            var toRemove = ionList[i].className;
            if (/animate-/.test(toRemove)) {
                ionList[i].className = ionList[i].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
            }
        }
    };

    $scope.ripple = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-ripple';
        setTimeout(function() {
            ionicMaterialMotion.ripple();
        }, 500);
    };

    $scope.fadeSlideInRight = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in-right';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideInRight();
        }, 500);
    };

    $scope.fadeSlideIn = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideIn();
        }, 500);
    };

    $scope.blinds = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
        setTimeout(function() {
            ionicMaterialMotion.blinds(); // ionic.material.motion.blinds(); //ionicMaterialMotion
        }, 500);
    };

    $scope.blinds();
})

//Motion
app.controller('MotionCtrl', function ($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    var fab = document.getElementById('fab');

    $scope.moveFab = function(dir) {
        fab.style.display = 'none';
        fab.className = fab.className.replace('button-fab-top-left', '');
        fab.className = fab.className.replace('button-fab-top-right', '');
        fab.className = fab.className.replace('button-fab-bottom-left', '');
        fab.className = fab.className.replace('button-fab-bottom-right', '');
        fab.className += ' button-fab-' + dir;
        $timeout(function() {
            fab.style.display = 'block';
        }, 100);
    };

    $scope.motionFab = function(type) {
        var shouldAnimate = false;
        var classes = type instanceof Array ? type : [type];
        for (var i = 0; i < classes.length; i++) {
            fab.classList.toggle(classes[i]);
            shouldAnimate = fab.classList.contains(classes[i]);
            if (shouldAnimate) {
                (function(theClass) {
                    $timeout(function() {
                        fab.classList.toggle(theClass);
                    }, 300);
                })(classes[i]);
            }
        }
    };

    var reset = function() {
        var inClass = document.querySelectorAll('.in');
        for (var i = 0; i < inClass.length; i++) {
            inClass[i].classList.remove('in');
            inClass[i].removeAttribute('style');
        }
        var done = document.querySelectorAll('.done');
        for (var i = 0; i < done.length; i++) {
            done[i].classList.remove('done');
            done[i].removeAttribute('style');
        }
        var ionList = document.getElementsByTagName('ion-list');
        for (var i = 0; i < ionList.length; i++) {
            var toRemove = ionList[i].className;
            if (/animate-/.test(toRemove)) {
                ionList[i].className = ionList[i].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
            }
        }
    };

    $scope.ripple = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-ripple';
        setTimeout(function() {
            ionicMaterialMotion.ripple();
        }, 500);
    };

    $scope.fadeSlideInRight = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in-right';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideInRight();
        }, 500);
    };

    $scope.fadeSlideIn = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideIn();
        }, 500);
    };

    $scope.blinds = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
        setTimeout(function() {
            ionicMaterialMotion.blinds();
        }, 500);
    };

    $scope.blinds();
    //ionic.material.ink.displayEffect(); ionicMaterialMotion
    ionicMaterialInk.displayEffect();
})

//Setup
app.controller('SetupCtrl', function($scope, $stateParams) {
    /* ionic.material.motion.pushDown({
        selector: '.push-down'
    });
    */
})
  ;