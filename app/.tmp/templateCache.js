angular.module('cineclub').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/movie.html',
    "<div class=\"movie-detail\" loading=\"loading\"> <div class=\"row\"> <div class=\"col-md-4\"> <img class=\"movie-poster\" ng-src=\"http://image.tmdb.org/t/p/w500{{movie.poster_path}}\"> </div> <div class=\"col-md-8\"> <div class=\"movie-title\">{{movie.title}}</div> <dl class=\"dl-horizontal\"> <dt>Genre</dt> <dd> <ul> <li ng-repeat=\"genre in movie.genres\">{{genre.name}}</li> </ul> </dd> <dt>Synopsis</dt> <dd>{{movie.overview}}</dd> <dt>Origine</dt> <dd> <ul> <li ng-repeat=\"production in movie.production_countries\">{{production.name}}</li> </ul> </dd> <dt>Date</dt> <dd>{{movie.release_date | date: 'yyyy'}}</dd> </dl> </div> </div> </div>"
  );


  $templateCache.put('views/popular.html',
    "<div class=\"movies-container\" id=\"top\"> <ul class=\"movies\"> <li ng-repeat=\"movie in movies\" class=\"film-box\" background-img=\"http://image.tmdb.org/t/p/w500{{movie.poster_path}}\"> <a class=\"film-description\" ng-href=\"#/movie/{{movie.id}}\"></a> </li> </ul> <div class=\"row\"> <div class=\"col-md-9 col-md-offset-3\"> <uib-pagination total-items=\"totalPages\" ng-model=\"currentPage\" ng-change=\"pageChanged()\" items-per-page=\"18\" max-size=\"5\" boundary-links=\"true\"></uib-pagination> </div> </div> </div>"
  );

}]);
