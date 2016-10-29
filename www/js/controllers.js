angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {

  $scope.heading= [{
      first:"Cultural Aspects",
      text:"Welcome to Barbados, one of the most beautiful islands in the Caribbean. blah blah",
      src: '<img class="full-image" src="img/bim.jpg">'

  },
{
      first:"Accomodation",
      text:"We seek to provide you with a wonderful variety of hotels for you to slect from."

},
{
      first:"Restaurants",
      text:"There are numerous restaurants which you can indulge in while on the island."
},
{
      first:"Nightlife",
      text:"Are you looking for a wonderful night in the club or at a party? Well you've come to the right place!"

},
{
      first:"On the Go(Transportation)",
      text:"For persons looking to be on the go this page is for you."

},
{
      first:"Search",
      text:"Search for a particular activity or service and we will try to provide you with all the related activities"


},
{
      first:"Map",
      text:"This is for you to get a view of the map and many of the landmarks available"

}];


  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
