module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerMultiTask('browser', "Export a module to the window", function() {
    var opts = this.options();
    this.files.forEach(function(f) {
      var output = ["(function(globals) {"];
   
      output.push.apply(output, f.src.map(grunt.file.read));
   
      output.push(grunt.template.process(
        'window.<%= namespace %> = requireModule("<%= barename %>");', { 
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
    // concat js and html in assets folder
    concat: {
      dist: {
        src: [
          'src/assets/agent/app/js/*.js',
          'src/assets/agent/app/js/**/*.js',
          'src/assets/agent/app/js/**/**/*.js',
          'src/assets/agent/app/js/**/**/**/*.js'
        ],
        dest: 'src/assets/built/agent.js',
      },
    },
    watch: {
      scripts: {
        files: [
          'src/assets/agent/app/js/*.js',
          'src/assets/agent/app/js/**/*.js',
          'src/assets/agent/app/js/**/**/*.js',
          'src/assets/agent/app/js/**/**/**/*.js'
        ],
        tasks: ['concat']
      }
    },
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
    browser: {
      dist: {
          src: [
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

  grunt.registerTask('default', ['transpile', 'browser']);
  grunt.registerTask('server', ['transpile', 'browser', 'watch']);
};
