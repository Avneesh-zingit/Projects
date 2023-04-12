async function  gettxt(file){
    let readFile = await fetch(file);
    let txt = await readFile.text();
    console.log(txt);

}
gettxt("/file.txt");