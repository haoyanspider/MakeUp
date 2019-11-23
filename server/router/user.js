const express = require('express')
//引入连接池
const pool = require('../pool')
// 引入jwt
const { generateToken } = require('../jwt')
//创建路由
var router = express.Router()
//添加路由
//1.注册路由
router.post('/api/v1/regist', (req, res) => {
  //获取数据
  var obj = req.body
  var {
    ufirst_name,
    ulast_name,
    email,
    upwd
  } = obj
  //验证是否为空 
  if (!ufirst_name) {
    return res.send({
      code: 1001,
      msg: `名字不能为空`
    })
  }
  if (!ulast_name) {
    return res.send({
      code: 1002,
      msg: `姓氏不能为空`
    })
  }
  if (!email) {
    return res.send({
      code: 1003,
      msg: `电子邮箱不能为空`
    })
  }
  if (!upwd) {
    return res.send({
      code: 1004,
      msg: `密码不能为空`
    })
  }
  //判断电子邮箱格式
  var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  if (!emailReg.test(email)) {
    return res.send({
      code: 1005,
      msg: `电子邮箱填写格式错误`
    })
  }
  //判断名字格式
  var ufirst_nameReg = /^[a-z]{1,15}$/i
  if (!ufirst_nameReg.test(ufirst_name)) {
    return res.send({
      code: 1006,
      msg: `名字填写格式错误`
    })
  }
  //判断姓氏格式
  var ulast_nameReg = /^[a-z]{1,15}$/i
  if (!ulast_nameReg.test(ulast_name)) {
    return res.send({
      code: 1007,
      msg: `姓氏填写格式错误`
    })
  }
  //判断密码格式
  var upwdReg = /^(\w){6,20}$/
  if (!upwdReg.test(upwd)) {
    return res.send({
      code: 1008,
      msg: `密码格式填写错误`
    })
  }
  //查询该电子邮箱是否已注册
  var sql = `select email from cp_user where email=?`
  pool.query(sql, [email], (err, result) => {
    if (err) throw err
    if (result.length > 0) {
      //电子邮箱已存在
      res.send({
        code: 1009,
        msg: `电子邮箱已存在`
      })
    } else {
      //电子邮箱可注册
      var sql = `insert into cp_user (ufirst_name,ulast_name,email,upwd) values (?,?,?,?)`
      pool.query(sql, [ufirst_name, ulast_name, email, upwd], (err, result) => {
        if (err) throw err
        console.log(result)
        if (result.affectedRows > 0) {
          res.send({
            code: 200,
            msg: `注册成功`
          })
        } else {
          res.send({
            code: 1010,
            msg: `注册失败`
          })
        }
      })
    }
  })
})
//2.登录路由
router.post('/api/v1/login', (req, res) => {
  //获取数据
  var {
    email,
    upwd
  } = req.body
  //验证是否为空
  if (!email) {
    return res.send({
      code: 1001,
      msg: `电子邮箱不能为空`
    })
  }
  if (!upwd) {
    return res.send({
      code: 1002,
      msg: `密码不能为空`
    })
  }
  //sql语句
  var sql = `select uid from cp_user where email=? and upwd=?`
  //查询数据库，检测登录信息是否合法
  pool.query(sql,[email,upwd],(err,result)=>{
    if (err) throw err
    if(result.length>0){
      //该用户合法 登录成功
      //生成token
      result = result[0]
      var data ={uid:result.uid}
      var token = generateToken(data)
      res.send({
        code:200,
        msg:`登录成功`,
        token:token
      })
    }else{
      res.send({
        code:1003,
        msg:`登录失败`
      })
    }
  })
})
//3.个人中心
router.get('/api/v1/account',(req,res)=>{
  //获取数据
  var uid = req.user.uid
  console.log(uid)
  res.send({code: 200})
})
module.exports = router