module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    // load package
    pkg: grunt.file.readJSON('package.json'),

    // concat js and html in assets folder
    concat: {
      dist: {
        src: [
          'src/assets/agent/app/js/*.js',
          'src/assets/agent/app/js/**/*.js',
          'src/assets/agent/app/js/**/**/*.js',
          'src/assets/agent/app/js/**/**/**/*.js'
        ],
        dest: 'src/assets//built/agent.js',
      },
    },

    // watch files and re-build
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
    }

    // TODO: run tests
    
  });

  grunt.registerTask('default', ['concat']);
  grunt.registerTask('server', ['concat', 'watch']);
};
