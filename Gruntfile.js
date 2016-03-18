module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      build: {
        src: ["src/**", "dist/**"]
      }
    },
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
      },
      images: {
        expand: true,
        cwd: '../geo-framework-doc/images',
        src: '**',
        dest: 'images/'
      },
      imagesUI: {
        expand: true,
        cwd: '../geo-framework-doc/_sass/images',
        src: '**',
        dest: 'dist/css/images/'
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
      core: {
        src: ['src/js/core/*.js'],
        dest: 'dist/js/geo-framework-core.js'
      },
      plugins: {
        src: ['src/js/plugins/*.js'],
        dest: 'dist/js/geo-framework-plugins.js'
      },
      vendors: {
        src: ['src/js/vendors/*.js'],
        dest: 'dist/js/geo-framework-vendors.js'
      }
    },
    uglify: {
      js: {
        files: {
          'dist/js/geo-framework.min.js': ['dist/js/geo-framework-core.js', 'dist/js/geo-framework-plugins.js', 'dist/js/geo-framework-vendors.js']
        }
      }
    }
    });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  

  grunt.registerTask('default', ['clean', 'copy', 'cssmin', 'concat', 'uglify']);

};
