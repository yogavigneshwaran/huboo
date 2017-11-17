const cmd = require('node-cmd');
const exe = require('child_process').exec;
const shell = require('shelljs');

module.exports = (robot) => {
    robot.hear(/deploy/, (res) => {
     const { stdout, stderr, code }  = shell.exec('./shellscripts/deploy.sh', {silent: true});
     res.reply(stdout);
        return
    });

    robot.hear(/runpython/, (res) => {
        const { stdout, stderr, code } = shell.exec('./shellscripts/runpython.sh', {silent: true});
        res.reply(stdout);
           return
       });
}
