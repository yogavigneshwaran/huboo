module.exports = (robot) => {
    robot.hear(/get (.*)/i, (res) => {
      robot.http("http://192.168.2.90:8080/" + res.match[1]).get((err, res, body) => {
        console.log(res);
      });
    });
};
