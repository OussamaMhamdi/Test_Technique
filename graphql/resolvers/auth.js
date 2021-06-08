const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {

    addUser: async args => {
        try {
            const user = await User.findOne({ email: args.userInput.email });
            if (user) {
                throw new Error('user exsist already')
            }

            const hashedPassword = await bcrypt.hash(args.userInput.password, 8)

            const newUser = new User({
                email: args.userInput.email,
                password: hashedPassword
            });

            const result = await newUser.save();

            return { ...result._doc, password: null }
        } catch (err) {
            throw err;
        }
    },
    login: async ({ email, password }) => {
        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error('User does not exist !');
        }
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) {
            throw new Error('Password is incorrect')
        }
        const accessToken = jwt.sign({ userId: user.email, email: user.password }, 'somesuprsercretkeys');
        return { userId : user.id, token: accessToken }
    }
}