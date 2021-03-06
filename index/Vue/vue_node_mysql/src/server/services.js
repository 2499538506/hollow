// services.js 处理义务逻辑代码


const db = require('./db.js')
exports.start = (req,res) => {
}
// 登录处理 (查)
exports.login = (req,res) => {
	let username = req.body.username
	let pwd = req.body.password
	// 查询语句
	let sql = 'select * from login where username = ?'
	
	db.base(sql,username,(result) => {
		console.log(result);
		if(!result.length) {
			return res.json({ status: 1, msg: '账户不存在，请先注册' })
		}else{
			if(result[0].password == pwd) {
				return res.json({ status: 1, msg: '登录成功' })
			}
			return res.json({ status: 1, msg: '密码错误' })
		}
	})
}
// 注册处理 (增)
exports.register = (req,res) => {
		let username = req.body.username
		let pwd = req.body.password
		// 判断用户输入的格式
		if(username == null || pwd == null) {
			return res.end('请填写正确的格式...')
		}
		// 查询语句
		let selectsql = 'select * from login where username = ?'
		let insertsql = `insert into login(username,password)values('${username}','${pwd}')`

		db.base(selectsql,username,(result) => {
			if(result.length) {
				return res.json({ status: 1, msg: '账户已存在，请返回登录' })
			} else {
				db.base(insertsql, (result) => {
					console.log(result);
					return res.json({ status: 1, msg:' 注册成功 ' })
				})
			}
	})
  // res.send('测试sss')
}

// 修改处理 (改)


// 删除处理 (删)
