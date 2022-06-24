const fs = require("fs");
const path = require("path");
const sudo = require("sudo-prompt");
const { rootPath, authorizationCommand } = require("./config");
const { existsRoot } = require("./check");

function sudoExecCommand(command) {
  return new Promise((resolve) => {
    sudo.exec(
      command,
      {
        name: "InGop",
        icns: path.join(__dirname, "../../../dist/app-icon.icns"),
      },
      function (err) {
        if (err) {
          resolve(false);
        }
        resolve(true);
      }
    );
  });
}

download = (remtomeURL, fileName) => {};

async function init() {
  if (!existsRoot()) {
    let command = `mkdir ${rootPath} && ${authorizationCommand}`;
    if (fs.existsSync(rootPath)) {
      command = authorizationCommand;
    }
    const status = await sudoExecCommand(command);
    if (!status) {
      return false;
    }
    return existsRoot();
  }
  return true;
}

module.exports = {
  init,
};
