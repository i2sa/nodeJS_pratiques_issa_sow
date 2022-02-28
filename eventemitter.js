const eventemiter = require("events");
const ecoutevent = new eventemiter();
ecoutevent.on("issa", (devellopeur) => {
  console.log(
    `i have done the event emitter par le developpeur ${devellopeur}`
  );
});
ecoutevent.emit("issa", "issa");
