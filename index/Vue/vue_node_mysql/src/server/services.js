const db = require('./db.js')
exports.start = (req,res)=>{
}
// 登录注册处理
exports.login = (req,res) => {
	let username = req.body.username
	let pwd = req.body.password
	// 查询语句
	let sql = 'select * from login where username = ?'
	db.base(sql,username,(result)=>{
		if(!result.length){
			return res.json({ status: 1, msg: '账户不存在，请先注册' })
		}else{
			// [ RowDataPacket { password: '123', username: 'admin', id: 1 } ]
			if(result[0].password == pwd){
				return res.json({ status: 1, msg: '登录成功' })
			}
			return res.json({ status: 1, msg: '密码错误' })
		}
	})
}
// 注册处理
exports.register = (req,res) => {
    let username = req.body.username
		// 查询语句
		let selectsql = 'select * from login where username = ?'
		// let createsql = ''
		db.base(selectsql,username,(result)=>{
			if(result.length){
				return res.json({ status: 1, msg: '账户已存在，请登录' })
			}else {
				// db.naseP
				return res.json({ status: 1, msg:' 注册成功 ' })
			}
	})
  // res.send('测试sss')
}