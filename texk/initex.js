
var fs = require('fs');
var library = require('./library');

var binary = fs.readFileSync('out.wasm');

var code = new WebAssembly.Module(binary);

var pages = 2500;
var memory = new WebAssembly.Memory({initial: pages, maximum: pages});
library.setMemory(memory.buffer);
library.setInput("\n*latex.ltx \\dump\n\n",
//library.setInput("\n\\show\\filesize{latex.ltx}\n",
                 function() {
                 });


var wasm = new WebAssembly.Instance(code, { library: library,
                                            env: { memory: memory } } );
wasm.exports.main();

let preamble = "\\documentclass{article}\n\\usepackage{nopageno}\n\\def\\pgfsysdriver{pgfsys-ximera.def}\\usepackage{tikz}\n\\usepackage[paperheight=100in,paperwidth=8.5in]{geometry}\n";

preamble = "\\documentclass{article}\n\\usepackage{nopageno}\n\\def\\pgfsysdriver{pgfsys-ximera.def}\\usepackage{tikz}\n";

//preamble = "\\documentclass[margin=0pt]{standalone}\n\\def\\pgfsysdriver{pgfsys-ximera.def}\\usepackage{tikz}\n";

//preamble = "\\RequirePackage[makeroom]{cancel}\n\\RequirePackage{url}\n\\RequirePackage[table]{xcolor}\n\\RequirePackage{tikz}\n\\RequirePackage{pgfplots}\n\\usepgfplotslibrary{groupplots}\n\\usetikzlibrary{calc}\n\\RequirePackage{fancyvrb}\n\\RequirePackage{forloop}\n\\RequirePackage{amssymb}\n\\RequirePackage{amsmath}\n\\RequirePackage{amsthm}\n\\RequirePackage{xifthen}\n\\RequirePackage{multido}\n\\RequirePackage{listings}\n\\RequirePackage{comment}\n\\RequirePackage{gettitlestring}\n\\RequirePackage{nameref}\n\\RequirePackage{epstopdf}";

//preamble = "\\RequirePackage[makeroom]{cancel}\n\\RequirePackage{url}\n\\RequirePackage[table]{xcolor}\n\\RequirePackage{tikz}\n\\RequirePackage{pgfplots}\n\\usepgfplotslibrary{groupplots}\n\\usetikzlibrary{calc}\n\\RequirePackage{fancyvrb}\n\\RequirePackage{forloop}\n\\RequirePackage{amssymb}\n\\RequirePackage{amsmath}\n\\RequirePackage{amsthm}\n\\RequirePackage{xifthen}\n\\RequirePackage{multido}\n\\RequirePackage{listings}\n\\RequirePackage{comment}\n\\RequirePackage{gettitlestring}\n\\RequirePackage{nameref}\n\\RequirePackage{epstopdf}";

preamble = "\\def\\pgfsysdriver{pgfsys-ximera.def}\\RequirePackage[makeroom]{cancel}\n\\RequirePackage{url}\n\\RequirePackage[table]{xcolor}\n\\RequirePackage{tikz}\n\\RequirePackage{pgfplots}\n\\usepgfplotslibrary{groupplots}\n\\usetikzlibrary{calc}\n\\RequirePackage{fancyvrb}\n\\RequirePackage{forloop}\n\\RequirePackage{amssymb}\n\\RequirePackage{amsmath}\n\\RequirePackage{amsthm}\n\\RequirePackage{xifthen}\n\\RequirePackage{multido}\n\\RequirePackage{comment}\n\\RequirePackage{gettitlestring}\n\\RequirePackage{nameref}\n\\RequirePackage{pgffor}\n\\RequirePackage{array}\n\\RequirePackage{tkz-euclide}\n\\RequirePackage{tikz-cd}\n";
//preamble = "\\def\\pgfsysdriver{pgfsys-ximera.def}\\RequirePackage{tikz}\n";
//\\RequirePackage{listings}\n";

//preamble = "\\catcode`\\^^@=9\\RequirePackage{expl3}\n";

//preamble = "\\def\\pgfsysdriver{pgfsys-ximera.def}\\Requi(rePackage[table]{xcolor}\\RequirePackage{ifthen}\\RequirePackage{amsmath}\\RequirePackage{amsthm}\\RequirePackage{amssymb}\\RequirePackage{parskip}\\RequirePackage{tikz}\n";
//preamble = "\\def\\pgfsysdriver{pgfsys-ximera.def}\n";

//preamble = "\\documentclass{article}\n\\begin{document}\\lowercase{HELLO} \\the\\catcode`\\^^@\\Ucharcat 65 10 is an A? \\end{document}\n";
//preamble = "\\input{downcase.tex}\n";

library.setMemory(memory.buffer);
library.setInput("\n&latex\n" + preamble + "\n",
                 function() {
                   var buffer = new Uint8Array( memory.buffer );
                   fs.writeFileSync('core.dump', buffer);
                   process.exit();
                 });
                   
var wasm = new WebAssembly.Instance(code, { library: library,
                                            env: { memory: memory } } );

console.log( wasm.exports );
wasm.exports.main();

