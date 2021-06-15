import { Tache } from '../../models/tache';
import { transformEvent, user } from './merge';
import { User } from '../../models/user';

    
    export const taches = async () => {
        try {
            const taches = await Tache.find();
            return taches.map((tache : any) => {
                return transformEvent(tache);
            })
        } catch (err) {
            console.log(err);
            throw err;

        }

    }
    export const addTache = async (args : any, req : any) => {

        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }

        let createdTache
        const tache = new Tache({
            name: args.tacheInput.name,
            description: args.tacheInput.description,
            isCompleted: args.tacheInput.isCompleted,
            user: req.userId
        });
        try {
            const result = await tache.save();
            createdTache = {
                ...result._doc,
                user: user.bind(this, result._doc.user)
            }
            const userById = await User.findById(req.userId);

            if (!userById) {
                throw new Error('user Not Found');
            }
            userById.createdTaches.push(tache);
            await userById.save();
            return createdTache;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    export const deleteTache = async (args : any, req : any) => {

        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }

        try {
            const tache = await Tache.findById(args.tacheId);

            await Tache.deleteOne({ _id: args.partageId })
        } catch (err) {
            throw err;
        }
    }
