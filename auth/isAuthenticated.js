module.exports = {
    isAuthenticated:function(req, res, next) {
        if(req.isAuthenticated()) {
            console.log('isAuthenticated(): User is authenticated');
            return next();
        }
  
        console.log('isAuthenticated(): User authenticated failed');
        res.redirect('/login')
    }
}