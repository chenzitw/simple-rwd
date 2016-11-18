const sass = require('node-sass');
const fs = require('fs');
sass.render({
  file: './class.scss',
  outFile: './class.css',
  outputStyle: 'compressed',
}, function(error, result) {
  if (error) {
    console.log('Error: ', error);
  } else {
    fs.writeFile('./class.css', result.css, function(err){
      if (err) {
        console.log('Error: ', error);
      } else {
        console.log('Build successfully!');
      }
    });
  }
});
