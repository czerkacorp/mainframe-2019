/*
--------------------------------------------------------------------------------
Czerka Mainframe -- import.js
Authored by: Czerka Corporation
Website: https://czerka.io/mainframe
--------------------------------------------------------------------------------
This file is used to help import a sample MySQL database for use in developing Mainframe.

TODO: Refactor script to use database driver instead of raw terminal commands
--------------------------------------------------------------------------------
*/

const config = require('config');
const https = require('https');
const fs = require('fs');
const cp = require('child_process');

/*
Datatables sql file is not needed as SWGEmu information is hardcoded + relies on Berkely DB. I have left it in the files array, but it is not known to be needed at this time.
*/

const files = [
  {
    filename: './db/swgemu/swgemu.sql',
    url:
      'https://review.swgemu.com/gitweb?p=Core3.git;a=blob_plain;f=MMOCoreORB/sql/swgemu.sql;hb=refs/heads/unstable',
  },
  {
    filename: './db/swgemu/mantis.sql',
    url:
      'https://review.swgemu.com/gitweb?p=Core3.git;a=blob_plain;f=MMOCoreORB/sql/mantis.sql;hb=refs/heads/unstable',
  },
  {
    filename: './db/swgemu/datatables.sql',
    url:
      'https://review.swgemu.com/gitweb?p=Core3.git;a=blob_plain;f=MMOCoreORB/sql/datatables.sql;hb=refs/heads/unstable',
  },
];

//Import functions
function download(url, dest) {
  let newfile = fs.createWriteStream(dest);
  let rqst = https.get(url, res => {
    res.pipe(newfile);
  });
}

async function dataImport(path) {
  if (config.db.password && config.db.password.length > 0) {
    await cp.exec(
      `mysql -u${config.db.user} -p${config.db.password} -h${
        config.db.host
      } < ${path}`,
      (err, stdout, stderr) => {
        if (err) console.log(err);
      }
    );
  } else {
    await cp.exec(
      `mysql -u${config.db.user} -h${config.db.host} < ${path}`,
      (err, stdout, stderr) => {
        if (err) console.log(err);
      }
    );
  }
}

// Run import
try {
  dataImport(files[0].filename);
} catch (error) {
  if (error) console.log(error);
}

try {
  dataImport(files[1].filename);
} catch (error) {
  if (error) console.log(error);
}
