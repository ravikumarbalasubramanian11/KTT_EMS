const requireAuth = (req, res, next) => {
    if (req.session.isAuthenticated) {
      return next();
    } else {
      res.redirect('/login');
    }
  };

  
function requireAdmin(req, res, next) {
  sessionAdmin = req.session.userName === "admin"
  if (sessionAdmin) {
    userName= req.session.userName
    console.log("true")
    next();
  } else {
    next()
  }

}

module.exports = [requireAuth , requireAdmin];