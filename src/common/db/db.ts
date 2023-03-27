// database.ts

import createConnectionPool, { sql } from "@databases/mysql";
import tables from "@databases/mysql-typed";
import DatabaseSchema, { serializeValue } from "../../__generated__";
import departments from "../../__generated__/departments";

export { sql };

const userDB = process.env.DB_USER || "admin";
const hostDB = process.env.DB_HOST || "appsfprce.czaiiuhlefrv.us-east-1.rds.amazonaws.com";
const passwordDB = process.env.DB_PASS || "nirsa112023";
const database = process.env.DB_NAME || "appsforce";

const db = createConnectionPool({
  connectionString: `mysql://${userDB}:${passwordDB}@${hostDB}:3306/${database}`,
});

export default db;

const { users, departments } = tables<DatabaseSchema>({
  serializeValue,
});
export { users, departments };
