({
    baseUrl: ".",
	paths: {
		jquery: "lib/zepto.min",
		underscore: "lib/lodash.custom.min",
		backbone: "lib/backbone-min",
		hbs: "lib/hbs",
		i18nprecompile: "lib/i18nprecompile",
		handlebars: "lib/Handlebars"
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