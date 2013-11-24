module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerMultiTask('browser', 'Export a module to the window', function() {
    var opts = this.options();
    this.files.forEach(function(f) {
      var output = ["(function(globals) {"];
   
      output.push.apply(output, f.src.map(grunt.file.read));
   
      output.push(grunt.template.process(
        'window.<%= namespace %> = requireModule("<%= barename %>").App;', {
        data: {
          namespace: opts.namespace,
          barename: opts.barename
        }
      }));
      output.push('})(window);');
   
      grunt.file.write(f.dest, grunt.template.process(output.join("\n")));
    });
  });

  grunt.initConfig({
    // render ejs
    template: {
      dev: {
        src: 'src/assets/agent/app/ejs/index.ejs',
        dest: 'src/assets/built/agent.html',
        variables: {}
      }
    },

    // compile less
    less: {
      development: {
        options: {
          paths: [
            'bower_components/bootstrap/less',
            'bower_components/normalize-css'
          ]
        },
        files: {
          'src/assets/css/base.css': 'src/assets/less/theme.less'
        }
      },
      production: {
        options: {
          paths: [
            'bower_components/bootstrap/less',
            'bower_components/normalize-css'
          ],
          cleancss: true
        },
        files: {
          'src/assets/css/base.css': 'src/assets/less/theme.less'
        }
      }
    },

    // watch files and re-build
    watch: {
      scripts: {
        files: [
          'src/assets/agent/app/js/{**/,**/**/,**/**/**/}*.js'
        ],
        tasks: ['transpile', 'browser']
      },
      templates: {
        files: [
          'src/assets/agent/app/ejs/{**/,**/**/,**/**/**/}*.ejs'
        ],
        tasks: ['template']
      },
      less: {
        files: [
          'src/assets/less/*.less'
        ],
        tasks: ['less:development']
      }
    },

    // amd-ify js
    transpile: {
      amd: {
        type: 'amd',
        files: [{
          expand: true,
          cwd: 'src/assets/agent/app/js/',
          src: [
            '*.js',
            '**/*.js',
            '**/**/*.js',
            '**/**/**/*.js'
          ],
          dest: 'tmp/',
          ext: '.amd.js'
        }]
      }
    },

    // compile amd'd js
    browser: {
      dist: {
          src: [
            'src/assets/lib/loader.js',
            'tmp/*.amd.js',
            'tmp/**/*.amd.js',
            'tmp/**/**/*.amd.js',
            'tmp/**/**/**/*.amd.js'
            ],
        dest: 'src/assets/built/agent.js',
        options: {
          barename: 'index',
          namespace: "App"
        }
      }
    }

    // TODO: run tests
    
  });

  grunt.registerTask('default', ['transpile', 'browser', 'template:dev', 'less:production']);
  grunt.registerTask('server', ['transpile', 'browser', 'template:dev', 'less:development', 'watch']);
};
