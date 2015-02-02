 module.exports = (grunt) ->
     
    grunt.initConfig
        # Watchers
        watch:
            sass:
                files: ['sass/**']
                tasks: ['compass:compile']
            js:
                files: ['js/**']
                tasks: ['build:js']

            jade:
                files: ['templates/**']
                tasks: ['jade:compile']
                
        # Compile all JS files into one
        concat:
            options:
                separator: ';'
            main: 
                src: [
                    'js/vendor/bootstrap.js'
                    'js/jquery.carouFredSel-6.2.1-packed.js'
                    'js/common.js'
                ],
                dest: 'js-build/scripts.js'

        
        # Compile styles
        compass:
            compile:
                options:
                    config: 'config.rb'
                 files:
                    "style.css": ["sass/style.scss"]
                style: 'compressed'


        uglify:
            main:
                files:
                    'build/scripts.min.js': '<%= concat.main.dest %>'
            build:
                files: [{
                    expand: true
                    cwd: "js-builds/"
                    src: ['**/*.js','!**/*.min.js']
                    dest: 'js-builds/'
                    ext: '.min.js'
                }]

        #Jade templates
        jade:
          compile:
            options:
              pretty: true
              data:
                debug: true
            files: 
              'index.html': ['templates/index.jade']
              'carousel.html': ['templates/carousel.jade']

    grunt.loadNpmTasks 'grunt-contrib-concat'
    grunt.loadNpmTasks 'grunt-contrib-compass'
    
    grunt.loadNpmTasks 'grunt-contrib-uglify'
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-jade'

    # Default tasks

    grunt.registerTask 'build:js', [
        'concat:main',
        'uglify:main'
    ]

    grunt.registerTask 'default', [
        'jade:compile',
        'compass:compile',
        'concat', 
        'uglify'
    ]

    grunt.registerTask 'run', [
        'default'
        'watch'
    ]
