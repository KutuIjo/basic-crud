const router = require('express').Router();
let user = require('../../models/user.model');

//// CREATE ----- Post Endpoints
// Create new user
router.route('/').post((req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    const newUser = new user({
        email,
        password
    });
    
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//// READ ----- Get Endpoints
// Get all user
router.route('/').get((req,res) => {
    user.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});
// Get user by id
router.route('/:id').get((req,res) => {
    user.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});


//// UPDATE ----- Put Endpoints
// Reset user password
router.route('/update/:id').put((req,res) => {
    user.findById(req.params.id)
        .then(user => {
            user.email = req.body.email;
            user.password = req.body.password;
 
            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));  
});


// DELETE ----- Delete Endpoints
// Delete user
router.route('/:id').delete((req,res) => {
    user.findByIdAndDeleted(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;