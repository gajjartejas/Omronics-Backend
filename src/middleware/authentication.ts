// var jwt = require('jsonwebtoken')

function authenticateToken(req: any, res: any, next: any) {
  return next()
  // console.log('req.method',req.method)
  // console.log('req.method',req.path)
  // const nonSecurePaths = ['/users/login']
  // if (nonSecurePaths.includes(req.path)) {
  //   return next() 
  // }


  // if (req.method === 'GET') {
  //   return next()
  // }

  // const authHeader = req.headers['authorization']
  // const token = authHeader && authHeader.split(' ')[1]

  // if (token == null) {
  //   return res.sendStatus(401)
  // }

  // jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
  //   console.log(err)

  //   if (err) return res.sendStatus(403)

  //   req.user = user

  //   next()
  // })
}

export default authenticateToken
