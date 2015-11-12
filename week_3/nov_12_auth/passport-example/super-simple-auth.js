
const express = require( 'express' ),
	  app = require( 'express' )(),
	  bodyParser = require( 'body-parser' ),
	  cookieParser = require( 'cookie-parser' ),
	  session = require( 'express-session' );


const passport = require( 'passport' ),
	  LocalStrategy = require( 'passport-local' ).Strategy;

// const users = {
// 	marty: {
// 		name: 'marty nelson',
// 		password: 'turtle'
// 	},
// 	brian: {
// 		name: 'brian nations',
// 		password: 'bicycle'
// 	}
// };

// local = new LocalStrategy( ( username, password, done ) => {
// 	console.log( 'runnning local strategy' );
// 	  // if (err) { return done(err); }

// 	const user = users[ username ];
// 	if ( !user ) {
// 	return done( null, false, { message: 'Incorrect username.' } );
// 	}

// 	if ( user.password !== password ) {
// 	return done( null, false, { message: 'Incorrect password.' } );
// 	}

// 	return done( null, user);
// });

// passport.use( local );

passport.use(new LocalStrategy(
  function(username, password, done) {
  	console.log('local strategy');
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

app.use( express.static( 'public') );
app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( session({
	secret: 'pdx jsda ftw',
    resave: false,
    saveUninitialized: false
}));

app.use( passport.initialize() );
app.use( passport.session() );

app.get( '/', passport.authenticate('local', { failureRedirect: '/login' }), ( req, res ) => {
	console.log( 'in /' );
	res.end( 'you\'re authed' );
});

app.post('/login', () => {
	console.log( 'POST /login' );
	passport.authenticate( 'local', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	},
	function(req, res) {
		console.log( 'back from auth', req.user );
		res.redirect('/');
	});
});




const port = 5000;
app.listen( port, () => {
	console.log( 'app listening on port', port);
});
