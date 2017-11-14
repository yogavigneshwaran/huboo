module.exports = (robot) => {
  robot.hear(/make me happy/, (res) => {
      res.reply('You are the best coder..heheheh')
      return
  });
  robot.hear(/how are you?/, (res) => {
      res.reply('I am good. Thanks for asking!')
      return
  });
  robot.hear(/what is your name?/, (res) => {
      res.reply(process.env.HUBOUT_NAME);
      return
  });
  robot.hear(/Thank you!/, (res) => {
    res.reply('You are welcome!');
    return
});
}
