module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    // load package
    pkg: grunt.file.readJSON('package.json'),

    // concat js and html in assets folder
    concat: {
      dist: {
        src: [
          'src/assets/agent/app/js/{**/,**/**/,**/**/**/}*.js'
        ],
        dest: 'src/assets/built/agent.js',
      },
    },

    // render ejs
    template: {
      dev: {      
        src: 'src/assets/agent/app/ejs/index.ejs',
        dest: 'src/assets/built/index.html',
        variables: {}
      }
    },

    // watch files and re-build
    watch: {
      scripts: {
        files: [
          'src/assets/agent/app/js/{**/,**/**/,**/**/**/}*.js'
        ],
        tasks: ['concat']
      },
      templates: {
        files: [
          'src/assets/agent/app/ejs/{**/,**/**/,**/**/**/}*.ejs'
        ],
        tasks: ['template']
      }
    }

    // TODO: run tests
    
  });

  grunt.registerTask('default', ['concat']);
  grunt.registerTask('server', ['concat', 'template', 'watch']);
};
