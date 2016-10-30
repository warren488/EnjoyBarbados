
angular.module('starter')


.factory('userService', function($http) {



        return {    getHeading: function(){

            var heading = [{
                first:"Cultural Aspects",
                text:"Learn more about the culture of the island",
                src: 'img/cropover.jpg',
                ref: '#/rih'

            },
          {
                first:"Accomodation",
                text:"We seek to provide you with a wonderful variety of accomodation for you to slect from.",
                src: 'img/accom.jpg',
                ref: '#'

          },
          {
                first:"Dining",
                text:"Choose from a broad selection of some of the most fine dining, or some simple good old fashioned bajan food",
                src: 'img/food2.jpg',
                ref: '#'
          },
          {
                first:"Nightlife",
                text:"Don't spend all night sleeping, get out and have some fun!",
                src: 'img/nightlife.jpg',
                ref: '#'

          },
          {
                first:"On the Go(Transportation)",
                text:"Active? No need to worry. Find where you're going, and get where you're going.",
                src: 'img/transp.jpeg',
                ref: '#'

          },
          {
                first:"Search",
                text:"Search for a particular activity or service and we will try to provide you with all the related activities",
                src: 'img/bim.jpg',
                ref: '#'


          },
          {
                first:"Map",
                text:"This is for you to get a view of the map and many of the landmarks available",
                src: 'img/bim.jpg',
                ref: '#'

          }];

            return heading;
}

}


})
