angular.module('starter.services', [])

.factory('Cams', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cams = [{
	id: 0,
	name: 'Camera 1',
	lastText: 'Marjane N89',
	state: 0,
	url: 'www.youtube.com',

  }, {
	id: 1,
	name: 'Camera 2',
	lastText: 'Asfi Rue N6',
	state: 0,
	url: 'www.youtube.com',

  }, {
	id: 2,
	name: 'Camera 3',
	lastText: 'Casablanca Maarif Bloc B',
	state: 0,
	url: 'www.youtube.com',
  }, {
	id: 3,
	name: 'Camera 4',
	lastText: 'Jamaa El fna rue 3 A',
	state: 1,
	url: 'www.youtube.com',
  }, {
	id: 4,
	name: 'Camera 5',
	lastText: 'Faculté des sciences Depart Info',
	state: 1,
	url: 'www.youtube.com',
  }];

  return {
    all: function() {
      return cams;
    },
    remove: function(cam) {
      cams.splice(cams.indexOf(cam), 1);
    },
    get: function(camId) {
      for (var i = 0; i < cams.length; i++) {
        if (cams[i].id === parseInt(camId)) {
          return cams[i];
        }
      }
      return null;
    }
  };
});
