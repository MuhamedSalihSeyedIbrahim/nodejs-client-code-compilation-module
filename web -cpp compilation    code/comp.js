const cp = require('child_process'),
    util = require('util'),
    compiler = 'g++',
    version = '-std=c++14',
    out = '-o',
    infile = 'cp.cpp',
    outfile = 'h.out';
let firstName = 'raja';

//g++ -std=c++ -o hello.out hello.cpp

var child = cp.exec(compiler + " " + version + " " + out + " " + outfile + " " + infile, (error, out, err) => {
    if (error) throw error;
    else {
        var excutable = "./" + outfile;
        var runner = cp.exec(excutable, ['hai'], (error, out, err) => {

                if (out) {

                    console.log(out.replace('\n', '\n\r').trim());

                } else if (err) {
                    console.log(err);
                    throw err;
                }
            })
            //input parameters
        runner.stdin.write(`2 2 3 2 1 2 3 2 2 1`);

        runner.stdin.end();
    }

});