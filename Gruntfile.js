module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
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
        dest: 'src/dist/built.js',
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
    }
    // TODO: run tests
  });

  grunt.registerTask('default', ['concat']);
  grunt.registerTask('server', ['concat', 'watch']);
};
