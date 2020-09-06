const mongoose = require('mongoose');
//导入config模块
const config = require('config');
// mongoose.connect(`mongodb://${config.get("db.user")}:${config.get("db.pwd")}@${config.get("db.host")}:${config.get("db.port")}/${config.get("db.name")}`,{ useUnifiedTopology: true, useNewUrlParser: true  })
mongoose.connect('mongodb://localhost:27017/blog',{ useUnifiedTopology: true, useNewUrlParser: true  })
.then(()=>{console.log('数据库连接成功')})
.catch(()=>{console.log('数据库连接失败')})

