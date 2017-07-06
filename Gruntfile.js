module.exports = function(grunt) {
    var output = "web/";
    var source = "src/"
    var layouts = source + 'layouts';
    var assets = source + 'assets';
    var scss = source + '_scss';
    var cssOutputDir = source + 'css';

    grunt.registerTask('installassemble', 'install grunt-assemble', function() {
        var exec = require('child_process').exec;
        var cb = this.async();
        exec('npm install', {cwd: './node_modules/grunt-assemble'}, function(err, stdout, stderr) {
            console.log(stdout);
            cb();
        });
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        open : {
          dev : {
            path: 'http://127.0.0.1:9001/'
          }
        },
        'livereload' : {
		    options : {
		      base : 'web',
		    },
		    files : ['web/**/*']
		},
		'watch': {
		  all: {
		    files: 'src/**/*.*',
		    tasks: ['newer:assemble', 'sync'], // only build changed pages
		    options: {
		      livereload: true,
		    },
		  },
		},
        compass: {
            dist: {
                options: {
                    sassDir: scss,
                    cssDir: cssOutputDir,
                    outputStyle: 'compressed',
                }
            }
        },
        'http-server': {
            'dev': {
                root: "web",
                port: 9001,
                host: "0.0.0.0",
                cache: 0,
                showDir : true,
                autoIndex: true,
                // server default file extension
                ext: "html",
                // run in parallel with other tasks
                runInBackground: true
            }
        },
        sync: {
            "assets" : { // copy files from source to output folder
                files: [
                    {
                        expand: true,
                        cwd   : source,
                        src   : ['**/*.*','!**/*.hbs','!**/*.md','!**/.htm', '!**/*.scss', '!_data/**/*'],
                        dest  : output
                    },
                ],
            }
        },

        clean: {
            all: ['web/*.html']
        },
        
        assemble: {
            options: {
                collections: [{
                        name: 'post',
                        sortby: 'posted',
                        sortorder: 'descending'
                        }],                
                layout: "docs.hbs",
                flatten: false,
                expand: true,
                layoutdir: layouts,
                partials: ['src/partials/**/*'],
                helpers: ['helper-gfm.js', 'helper-ifEq.js','helper-moment', 'src/helpers/helpers.js'],
                assets: assets,
                data: 'src/_data/*'
            },
            
blog: {
    options: {
      layout: 'blog.hbs'
    },
    src: ['src/blog/**/*.md'],
    dest: output
  },
            "pages": { //build all pages, hbs and markdown
                files: [
                    {
                        expand: true,
                        cwd: source,
                        src: ['*.hbs','pages/**/*.hbs','**/*.md','help/**/*.htm'],
                        dest: output,
                        ext: '.html'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-livereload');
    grunt.loadNpmTasks('grunt-git');
    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('default', [
    	"installassemble", //install broken assemble 
        'clean', // clean out any deleted files
        'assemble',  // build pages from scratch on startup
        'sync',  // copy documentation to src, copy resources from src to output
        'open',
        'http-server',  // start server
        'watch'
    ]);

    grunt.registerTask('prod', [
    	"installassemble", //install broken assemble 
        'clean', // clean out any deleted files
        'sync',  // copy documentation to src, copy resources from src to output
        'assemble',  // build pages
    ]);
};
