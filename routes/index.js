const router = require('express').Router();
const passport = require('passport');

router.use('/', require('./swagger'));

router.use('/employees', require('./employees'));
router.use('/movies', require('./movies'));

router.get('/login', passport.authenticate('github'));

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if(err) {
            return next(err);
        }
        req.session.logoutMessage = 'Logout carried out successfully';
        res.redirect('/');
    });
});

module.exports = router;
