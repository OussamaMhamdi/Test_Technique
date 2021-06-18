import { User } from '../../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Response } from 'express';


    export const addUser = async (args: any,res :Response) => {
        try {
            console.log("oooooo")
            const user = await User.findOne({ email: args.userInput.email });
            console.log(user)
            if (user) {
                throw new Error('user exsist already')
            }

            const hashedPassword = await bcrypt.hash(args.userInput.password, 8)

            const newUser = new User({
                email: args.userInput.email,
                password: hashedPassword
            });
            console.log(newUser)
            const result = await newUser.save();

            return true
        } catch (err) {
            throw err;
        }
    }
    export const login = async (args: any) => {
       
        const user = await User.findOne({ 'email': args.email });

        if (!user) {
            throw new Error('User does not exist !');
        }
        const isEqual = await bcrypt.compare(args.password, user.password);
        if (!isEqual) {
            throw new Error('Password is incorrect')
        }
        const accessToken = jwt.sign({ userId: user.email, email: user.password }, 'somesuprsercretkeys');
        return { userId: user.id, token: accessToken }
    }
