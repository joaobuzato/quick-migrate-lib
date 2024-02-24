import Database from "./Infra/Database.js";
import * as fs from "fs";

export default function migrate(
  sqlFile: string,
  dataBaseParams: {
    host: string;
    user: string;
    password: string;
    database?: string;
    multipleStatements: boolean;
  }
) {
  const database = new Database(dataBaseParams);
  const data = fs.readFileSync(sqlFile, { encoding: "utf-8" });
  console.log(data);
  return database.migrate(data);
}
