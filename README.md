# quick-migrate-lib

Lib that migrates auto the code.

# use

import the migrate() and run it, with the sqlFIle path and connection Params:

```
////migration.js
import migrate from 'quick-migrate-lib'

const connectionParams = {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      multipleStatements: true,
}

const sqlFile = './src/Infra/reader_dungeon.sql'

migrate(sqlFile, connectionParams);

```

to execute this method in npm, goto package.json scripts and

node src/migrate.js
