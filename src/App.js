import Controller from './components/Controller.js';

class App {
  async run() {
    const controller = new Controller();
    await controller.setCarNames();
    await controller.setTryCount();
    controller.play();
    controller.printWinner();
  }
}

export default App;
