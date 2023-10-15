import jwt from 'jsonwebtoken';

function authenticateToken(req: any, res: any, next: any): void {
  //return next();
  console.log('req.method', req.method);
  console.log('req.method', req.path);

  const nonSecurePaths = ['/users/login'];
  if (nonSecurePaths.includes(req.path)) {
    return next();
  }

  if (req.method === 'GET') {
    return next();
  }

  const authHeader = req.headers['authorization'];
  const headerToken = authHeader && authHeader.split(' ')[1];
  const cookieToken = req.cookies.jwt;
  const token = headerToken || cookieToken;

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_KEY as string, (err: any, user: any) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

export default authenticateToken;
