function gamesCrtl($scope) {
  
  $scope.playerGames = [
    {currentTurn:true, pace:'fast'},
    {currentTurn:false, playing:"John", pace:'fast'},
    {currentTurn:true, pace:'slow'},
    {currentTurn:false, playing:"Kevin", pace:'medium'},
    {currentTurn:false, playing:"Jane", pace:'fast'},
    {currentTurn:false, playing:"Karen", pace:'slow'},
    {currentTurn:true, pace:'fast'},
    {currentTurn:false, playing:"Sebastian", pace:'medium'}
  ]

  $scope.availableGames = [
    {pace:'fast'},
    {pace:'fast'},
    {pace:'medium'},
    {pace:'medium'},
    {pace:'slow'},
    {pace:'slow'},
    {pace:'slow'},
    {pace:'slow'}
  ]

  $scope.defaultMaps = [
    {name:'Aruba'},
    {name:'Europe'},
    {name:'Test'},
    {name:'Yay!'},
    {name:'Awsome'},
    {name:'Europe'},
    {name:'Test'},
    {name:'Yay!'},
    {name:'Awsome'}
  ]

}

gamesCrtl.$inject = ['$scope'];