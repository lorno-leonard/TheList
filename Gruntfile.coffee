module.exports = (grunt)->
  require('load-grunt-tasks')(grunt)
  require('time-grunt')(grunt)

  grunt.initConfig
    sass:
      dev:
        options:
          style: 'expanded'
        files:
          'app/css/style.css': 'app/sass/style.scss'
    uncss:
      dist:
        files:
          'app/css/compiled/compiled.min.css': ['app/index.html']
    concat:
      js:
        src: [
          'app/js/jquery.min.js',
          'app/js/jquery-ui.min.js',
          'app/js/bootstrap.min.js',
          'app/js/script.js']
        dest: 'app/js/compiled/compiled.min.js'
    watch:
      html:
        files: ['app/index.html']
        tasks: ['uncss']
        options:
          livereload: 35729
      sass:
        files: ['app/sass/*.scss']
        tasks: ['sass:dev', 'uncss']
        options:
          livereload: 35729
      js:
        files: ['app/js/*.js']
        tasks: ['concat:js']
        options:
          livereload: 35729
    connect:
      server:
        options:
          port: 3000
          base: 'app/'
          keepalive: true
          livereload: 35729
    concurrent:
      dev:
        tasks: ['connect', 'watch']
        options:
          logConcurrentOutput: true

  grunt.registerTask 'dev', ['sass:dev', 'uncss', 'concat:js', 'concurrent']