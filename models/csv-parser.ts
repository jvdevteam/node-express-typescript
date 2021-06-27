import csv from 'csv-parser';
import fs from 'fs';

const pathCsv = "data/file.csv";

fs.createReadStream(pathCsv)
  .pipe(csv())
  .on('data', function(line){
    console.log(line);
  })
  .on('end', () => {
    console.log('read file csv success');
  });
