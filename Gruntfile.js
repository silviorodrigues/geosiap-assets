module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      css: {
        files: ['src/1.2/sass/**/*.scss', 'src/1.2/js/**/*.js'],
        tasks: ['clean:build', 'sass_globbing', 'sass', 'concat', 'cssmin', 'uglify', 'copy'],
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

    svgstore: {
      options: {
        prefix : 'icon-',
        svg: {
          xmlns: "http://www.w3.org/2000/svg",
          xlink: "http://www.w3.org/1999/xlink"
        },
        formatting : {
          indent_size : 2
        }
      },
      default : {
        files: {
          'images/icons.svg': ['images/compressed/*.svg'],
        }
      }
    },

    'remove-svg-properties': {
      options: {
        namespaces: ['i', 'sketch', 'inkscape'],
        properties: ['fill']
      },
      all: {
        src: 'images/icons/*.svg',
        dest: 'images/compressed'
      }
    },

    clean: {
      build: {
        src: ['dist/1.2/**']
      },
      svg: {
        src: ['images/compressed/**']
      }
    },

    copy: {
      images: {
        expand: true,
        cwd: 'src/1.2/sass/images/',
        src: '**',
        dest: 'dist/1.2/css/images/'
      },
    },
    cssmin: {
      all: {
        src: ['dist/1.2/css/geo-framework.css'],
        dest: 'dist/1.2/css/geo-framework.min.css'
      }
    },
    concat: {
      core: {
        src: ['src/1.2/js/core/*.js'],
        dest: 'dist/1.2/js/geo-framework-core.js'
      },
      plugins: {
        src: ['src/1.2/js/plugins/*.js'],
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
grunt.loadNpmTasks('grunt-svgstore');
grunt.loadNpmTasks('remove-svg-properties');


grunt.registerTask('dev', ['clean:build', 'sass_globbing', 'sass','concat', 'cssmin', 'uglify', 'copy', 'watch']);
grunt.registerTask('svg', ['clean:svg', 'remove-svg-properties', 'svgstore']);
grunt.registerTask('build', ['clean:build', 'cssmin', 'concat', 'uglify']);
};
