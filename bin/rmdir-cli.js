#!/usr/bin/env node

'use strict';
var rmdir = require('../index');


if(process.argv[2]){
    rmdir(process.argv[2]);
}