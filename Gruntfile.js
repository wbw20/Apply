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
    browser: {
      dist: {
        src: [
          'src/assets/agent/app/js/*.js',
          'src/assets/agent/app/js/**/*.js',
          'src/assets/agent/app/js/**/**/*.js',
          'src/assets/agent/app/js/**/**/**/*.js'
        ],
        dest: 'src/assets/built/agent.js',
        options: {
          barename: 'apply',
          namespace: "Apply"
        }
      }
    }
    // TODO: run tests
  });

  grunt.registerTask('default', ['browser']);
  grunt.registerTask('server', ['browser', 'watch']);
};
