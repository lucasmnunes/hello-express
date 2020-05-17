module.exports = () => {
  const greetingMessage = "Hi! Everything is ok!";
  const controller = {};

  controller.sayHello = (req, res) => {
    res.status(200).send(greetingMessage);
  }

  return controller;
}