const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: localhost,
  user: "root",
  password: "cdac",
  database: "project",
};

const addMessege = async (messege) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `Insert into MESSEGE values (?)`;

  await connection.queryAsync(sql, [messege, messegebody]);

  await connection.endAsync();
};

const messege = {
  messegebody: "hellooooooooooo everyone",
};

addMessege(messege);

const showMessege = async (messege) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `select*from MESSEAGE`;

  let list = await connection.queryAsync(sql);
  console.log(list);

  await connection.endAsync();
  return list;
};
