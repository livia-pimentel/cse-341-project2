const router = require('express').Router();
const passport = require('passport');

router.use('/', require('./swagger'));

router.use('/employees', require('./employees'));
router.use('/movies', require('./movies'));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        req.session.destroy(function(err) {
            if (err) {
                return next(err);
            }
            
            // Limpa o cookie de sessão
            res.clearCookie('connect.sid');
            console.log('After destroyed session:', req.session)

            // Redireciona apenas após a destruição da sessão
            res.status(200).send('Logout carried out successfully');
        });
    });
});


module.exports = router;
