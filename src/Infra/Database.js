import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

export default class Database {
  constructor(connectionParams) {
    this.connectionParams = connectionParams;
  }
  connect = (connectionParams) => {
    return mysql.createConnection(connectionParams);
  };

  migrate = async (query) => {
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
