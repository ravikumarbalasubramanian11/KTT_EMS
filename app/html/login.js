function handleButtonClick() {
    window.location.href = '/login-form';
  }

  function requireAuth(req, res, next) {
    if (!req.session.user) {
      res.redirect('/employee_dashboard');
    } else {
      next();
    }
  }