angular.module('flapperNews')
.controller('PostsCtrl', ['$scope',/*'$stateParams',*/'posts', 'post',
    function($scope, /*$stateParams,*/ posts, post){
    //$scope.post = posts.posts[$stateParams.id];
    $scope.post = post;
    
    $scope.addComment = function(){
        if($scope.body === ''){ return; }
        /*$scope.post.comments.push({   
            body: $scope.body,
            author: 'user',
            upvotes: 0
        
        });*/
        //new statement
        posts.addComment(post.id, {
            body: $scope.body,
            author: 'user',
        }).success(function(comment) {
            $scope.post.comments.push(comment);
        });
        $scope.body = '';
    };

    $scope.incrementUpvotes = function(comment) {
        posts.upvoteComment(post, comment);
    };
}]);