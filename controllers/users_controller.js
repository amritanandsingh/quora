const User = require('../models/user');

module.exports.user=function(req,res){
    return res.render('user',{
      
    });
}

module.exports.signUp = function(req , res)
{
    if(req.isAuthenticated())
    { 
      return res.redirect('/users/profile');
    }
    return res.render('sign_up');
}


module.exports.signIn = function(req , res)
{
  if(req.isAuthenticated())
  {
    return res.redirect('/users/profile');
  }
    return res.render('sign_in');
}

// get the sign up data
module.exports.create = async function(req, res) {
    try {
      if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
      }
      let user = await User.findOne({ email: req.body.email });
      if (!user) {
        user = await User.create(req.body);
        return res.redirect('/users/sign-in');
      } else {
        return res.redirect('back');
      }
    } catch (err) {
      console.log('Error in signing up:', err);
      return;
    }
  };
  


// get sign in data and create session
module.exports.createSession = function(req,res){
  return res.redirect('/');    

}   

module.exports.destroySession = function(req, res){
  req.logout(function(err) {
      if (err) {
          console.log('Error logging out:', err);
          return;
      }
      //req.flash('success', 'You have been logged out successfully');
      return res.redirect('/');
  });
}
