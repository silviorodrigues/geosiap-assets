module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      sass: {
        expand: true,
        cwd: '../geo-framework-doc/_sass/application',
        src: '**',
        dest: 'src/sass/'
      },
      js: {
        expand: true,
        cwd: '../geo-framework-doc/js',
        src: '**',
        dest: 'src/js/'
      },
      css: {
        expand: true,
        cwd: '../geo-framework-doc/_site/css',
        src: '*.css',
        dest: 'dist/css/'
      }
    },
    cssmin: {
      all: {
        src: [
        'dist/css/geo-framework.css'
        ],
        dest: 'dist/css/geo-framework.min.css'
      }
    },
    concat: {
      dist: {
        src: ['src/js/*.js'],
        dest: 'dist/js/geo-framework.js'
      }
    },
    uglify: {
      js: {
        files: {
          'dist/js/geo-framework.min.js': ['dist/js/geo-framework.js']
        }
      }
    }
    });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  

  grunt.registerTask('default', ['copy', 'cssmin', 'concat', 'uglify']);

};
