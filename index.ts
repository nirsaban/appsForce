import { APIGatewayEvent, Context } from "aws-lambda";
import { AppsForceApi } from "./server";
const serverless = require("serverless-http");

const port = parseInt(process.env.PORT || "3000");
let _appInstance: AppsForceApi;
if (!_appInstance) {
  console.log("index- " + __filename);
  _appInstance = new AppsForceApi();
  _appInstance
    .start(port)
    .then((port) => console.log(`server running on port ${port}`))
    .catch((err) => console.error(err));
}
export const handler = serverless(_appInstance.export());
