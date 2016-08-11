var fs = require('fs');
var path = require('path');
var dirExists = require('@justinc/dir-exists').dirExistsSync;

function rmdir(dirpath) {

    if (dirExists(dirpath)) {
        var files = fs.readdirSync(dirpath);
        files.forEach(function (file, index) {

            var curPath = path.join(dirpath, file);
            if (fs.statSync(curPath).isDirectory()) {
                rmdir(curPath);
            } else {
                console.log(curPath);
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(dirpath);
    }
}

module.exports = rmdir;