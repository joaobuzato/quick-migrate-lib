import Database from "./Infra/Database.js";
import fs from "fs";

export default function migrate(sqlFile, dataBaseParams) {
  const database = new Database(dataBaseParams);
  const data = fs.readFileSync(sqlFile, { encoding: "utf-8" });
  console.log(data);
  return database.migrate(data);
}
