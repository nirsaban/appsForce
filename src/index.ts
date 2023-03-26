import { AppsForceApi } from "./server";

let _appInstance: AppsForceApi;

const port = parseInt(process.env.PORT || "3000");

if (!_appInstance) {
  console.log("index- " + __filename);
  _appInstance = new AppsForceApi();
  _appInstance
    .start(port)
    .then((port) => console.log(`server running on port ${port}`))
    .catch((err) => console.error(err));
}
