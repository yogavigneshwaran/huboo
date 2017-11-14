const cmd = require('node-cmd');
const exe = require('child_process').exec;
const shell = require('shelljs');

module.exports = (robot) => {
    robot.hear(/deploy/, (res) => {
     const { stdout, stderr, code }  = shell.exec('/home/yoga/huboo/shellscripts/deploy.sh', {silent: true});
     res.reply(stdout);
        return
    });

    robot.hear(/runpython/, (res) => {
        shell.exec('/home/yoga/huboo/shellscripts/runpython.sh', {silent: true});
        res.reply(stdout);
           return
       });
}