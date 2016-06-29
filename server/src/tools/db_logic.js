import mongoskin from 'mongoskin';
const dbConf = require('config.json')('../defaultData.json').dataBase;

let dbUrl = "";
if(dbConf.type != "" && dbConf.host != "" && dbConf.name){
  dbUrl = dbConf.type + "://" + dbConf.user + ":" + dbConf.pass + "@" + dbConf.host + ":" + dbConf.port + "/" + dbConf.name;
}else{
  dbUrl = dbConf.pureurl;
}

const db = mongoClient.db(dbUrl,{
  native_parser: true;
});


export default db;
