const { Board, Ping } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const proximity = new Ping({
    controller: "HCSR04",
    pin: 7
  });

  proximity.on("change", () => {
    const {cm, inches} = proximity;
    console.log("Proximity: ");
    console.log("  cm  : ", cm);
    console.log("  in  : ", inches);
    console.log("-----------------");
  });
});