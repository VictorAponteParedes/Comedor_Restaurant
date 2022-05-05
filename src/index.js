import app from "./app.js";
// Settings of port
app.set("port", process.env.PORT || 2500);

//Server
const init = async () => {
  await app.listen(app.get("port"), () => {
    console.log("Server on port:", app.get("port"));
  });
};
init();
