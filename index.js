const fs = require('fs');
const path = require('path');

const files = ['schema.gql', 'physicalProperties.gql', 'nmr.gql'];
let schema = '';
files.forEach(file => {
  schema +=
    '\n' + fs.readFileSync(path.join(__dirname, `./gql/${file}`), 'utf-8');
});

module.exports = schema;
