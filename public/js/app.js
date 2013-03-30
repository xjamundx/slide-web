require.config({
  paths: {
	jquery: "lib/zepto.min",
	underscore: "lib/lodash.custom.min",
	backbone: "lib/backbone-min",
	hbs: "lib/hbs",
	i18nprecompile: "lib/i18nprecompile",
	handlebars: "lib/Handlebars",
	rivets: "lib/rivets.min"
  },
  shim: {
	  'rivets': {
		  exports: 'rivets',
		  init: function(){
			  return this.rivets.configure({
				  adapter: {
					  subscribe: function(obj, keypath, callback) {
						  obj.on('change:' + keypath, callback)
					  },
					  unsubscribe: function(obj, keypath, callback) {
						  obj.off('change:' + keypath, callback)
					  },
					  read: function(obj, keypath) {
						  return obj.get(keypath)
					  },
					  publish: function(obj, keypath, value) {
						  obj.set(keypath, value)
					  }
				  }
			  });
		  }
	  }
  },
  hbs : {
	  disableI18n: true
  }
});

define(function (require) {
	var AppRouter = require('router');
	var router = new AppRouter();
//	var HeaderModel = require('model/header');
// 	var HeaderView = require('view/header');
//
//	router.on('all', function (route) {
//		var header = new HeaderModel();
//		header.set('title', route);
//		new HeaderView({model: header});
//	});
});
