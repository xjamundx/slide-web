({
    baseUrl: ".",
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
	pragmasOnSave: {
		excludeHbsParser: true,
		excludeHbs: true,
		excludeAfterBuild: true
	},
	hbs : {
		disableI18n: true
	},
//    optimize: "none",
    name: "lib/almond",
    wrap: true,
    insertRequire: ['app'],
    include: "app",
    out: "app.built.js"
})