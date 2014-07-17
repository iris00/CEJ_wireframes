module.exports = function(grunt) {

  // configure tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
          sassDir: 'scss',
          cssDir: 'css',
          config: 'config.rb'
        }
      }
    },
    sass: {
      options: {
          sourceMap: true
      },
      files: {
          'css/style.css': 'scss/**/*.scss'
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['scss/**/*.scss'],
        tasks: ['compass:dist']
      },
      files: ['**/**.html']
    }
  });
  // load plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-sass');

  // register tasks

    grunt.registerTask('default', [
        'compass', 'sass', 'watch'
    ]);
};
