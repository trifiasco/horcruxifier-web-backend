const crypto = require('crypto');
const path = require('path');
const { readFile, writeFile, ensureDirectory, removeFile } =  require('../utils/fileSystem');
const { chunkify } = require('../utils/chunkify');
const public_folder = process.env.PWD;

const HORCRUXES = ["Tom Riddle's diary", "Marvolo Gaunt's Ring", "Salazar Slytherin's Locket", "Helga Hufflepuff's Cup", "Rowena Ravenclaw's Diadem", "Harry Potter", "Nagini the Snake"];


const horcruxify = async (path, directory, fileBlob, password, fileExtension) => {
    var cipher = crypto.createCipher('aes-128-cbc', password);
    var encryptedBlob = cipher.update(fileBlob, 'binary', 'hex') + cipher.final('hex');
    let chunks = chunkify(encryptedBlob, 7);
  
    await ensureDirectory(path, directory);

    for(var i = 0; i < 7; i++){
      await writeFile(`${path}/${directory}/${HORCRUXES[i]}.${fileExtension}`, chunks[i], 'binary')
    }
    
    console.log("\nTA DA!!!! your file is horcruxified!!!\n");
    return `${path}/${directory}`;
}

const eventHandler = async (fileName, password, fileExtension) => {
    console.log(fileName);
    const filePath = `${public_folder}/public/${fileName}`
    const content = await readFile(filePath, 'binary');

    const response = horcruxify(`${public_folder}/public`, `horcruxes-of-${fileName}`, content, password, fileExtension);
    await removeFile(filePath);
    return response;
}

module.exports = eventHandler;