module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      css: {
        files: ['dist/1.2/sass/**/*.scss', 'dist/1.2/js/**/*.js'],
        tasks: ['sass_globbing', 'sass', 'concat'],
        options: {
          spawn: false
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/1.2/css/geo-framework.css': 'src/1.2/sass/geo-framework.scss'
        }
      }
    },

    sass_globbing: {
      your_target: {
        files: {
          'src/1.2/sass/helpers.scss': 'src/1.2/sass/helpers/*.scss',
          'src/1.2/sass/bosons.scss': 'src/1.2/sass/bosons/*.scss',
          'src/1.2/sass/atoms.scss': 'src/1.2/sass/atoms/*.scss',
          'src/1.2/sass/molecules.scss': 'src/1.2/sass/molecules/*.scss',
          'src/1.2/sass/organisms.scss': 'src/1.2/sass/organisms/*.scss',
        },
        options: {
          useSingleQuotes: false
        }
      }
    },

    clean: {
      build: {
        src: ['dist/1.2/**']
      }
    },
    cssmin: {
      all: {
        src: [
        'dist/1.2/css/geo-framework.css'
        ],
        dest: 'dist/1.2/css/geo-framework.min.css'
      }
    },
    concat: {
      core: {
        src: ['src/1.2/js/core/*.js'],
        dest: 'dist/1.2/js/geo-framework-core.js'
      },
      plugins: {
        src: ['src/js/plugins/*.js'],
        dest: 'dist/1.2/js/geo-framework-plugins.js'
      },
      vendors: {
        src: ['src/1.2/js/vendors/*.js'],
        dest: 'dist/1.2/js/geo-framework-vendors.js'
      }
    },
    uglify: {
      js: {
        files: {
          'dist/1.2/js/geo-framework.min.js': ['dist/1.2/js/geo-framework-core.js', 'dist/1.2/js/geo-framework-plugins.js', 'dist/1.2/js/geo-framework-vendors.js']
        }
      }
    }
  });

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-sass-globbing');


grunt.registerTask('dev', ['sass_globbing', 'sass','concat', 'watch']);
grunt.registerTask('build', ['clean', 'cssmin', 'concat', 'uglify']);
};
