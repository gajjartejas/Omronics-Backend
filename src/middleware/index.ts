import authenticationMiddleware from './authentication';
import isAuthenticated from './isAuthenticated';
// import sentryMiddleware from './sentry'
// import validate from './validate'
// import cache from './cache'

const AppMiddleware = {
  authenticationMiddleware,
  isAuthenticated,
  // sentryMiddleware,
  // validate,
  // cache,
};

export default AppMiddleware;
