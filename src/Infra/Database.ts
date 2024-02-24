import mysql from "mysql";
import { ConnectionParams } from "../Types";
import dotenv from "dotenv";
dotenv.config();

export default class Database {
  connectionParams: ConnectionParams;
  constructor(connectionParams: ConnectionParams) {
    this.connectionParams = connectionParams;
  }
  connect = (connectionParams: ConnectionParams) => {
    return mysql.createConnection(connectionParams);
  };

  migrate = async (query: string) => {
    const connection = this.connect(this.connectionParams);
    return connection.query(query, (err, result) => {
      if (err) {
        console.error(err);
      }
      if (result) {
        console.log("Migration success");
        connection.destroy();
      }
    });
  };
}
