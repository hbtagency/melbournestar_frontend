Readme:

1.Install Node.js
2.Install Ruby for SASS
3.Run "npm install" which will install all npm modules
(Or copy the whole node_modules file)
(Gulp-watch
- Run "npm install --save-dev gulp-watch"
Gulp-concat-css
- Run "npm install --save-dev gulp-concat-css"
Gulp-minify-css
- Run "npm install --save-dev gulp-minify-css"
Gulp-sass 
- Run "npm install --save-dev gulp-sass"
Gulp-batch
- Run "npm install --save-dev gulp-batch"
Browser-sync
- Run "npm install --save-dev browser-sync")

4.Setup file path of initial page( eg: proxy: "http://localhost:80/melStar/home.html",) in gulpfile.js
5.Run "gulp" which will compile scss to css and concat also minify css into one file (style.css)
  Also run "gulp" will turn gulp monitor on watching changes on css changes.

Note: if run gulp once doesn't bring up style.css in final fold, run "gulp" multiple times. (Bug to fix)