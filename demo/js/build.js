({
    appDir: "../",
    baseUrl: "./",
    dir: "../../build/",
    //the code minified by UglifyJS
    //optimize: "none",
    mainConfigFile: "config.js",
    skipDirOptimize: true,
    stubModules: ['typescript'],
    modules: [
        {
            name: "js/main",
            include: ["js/main"],
            exclude: ["typescript"]
        }
    ]
})