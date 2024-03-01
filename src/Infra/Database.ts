import mysql from "mysql2/promise";
import { ConnectionParams } from "../Types";
import dotenv from "dotenv";
dotenv.config();

export default class Database {
  connectionParams: ConnectionParams;
  constructor(connectionParams: ConnectionParams) {
    this.connectionParams = connectionParams;
  }
  connect = async (connectionParams: ConnectionParams) => {
    return mysql.createConnection(connectionParams);
  };

  migrate = async (query: string) => {
    const connection = this.connect(this.connectionParams);
    return connection.then((connection) => {
      connection.query(query).then((result) => {
        connection.end();
        console.log("Migration completed");
      });
    });
  };
}
