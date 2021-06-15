import { Tache } from '../../models/tache';
import { Partage } from '../../models/partage';
import { User } from '../../models/user';
import { transformPartge,transformEvent } from './merge';




    export const partages = async () => {
        try {
            const partages = await Partage.find();
            return partages.map((partage: any) => {
                return transformPartge(partage);
            })
        } catch (err) {
            throw err;
        }
    }
    export const partager = async (args: any, req : any) => {

        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }

        let createdPartage
        const fetchedTache = await Tache.findOne({ _id: args.tacheid });
        try {
            const partage = new Partage({
                user: req.userId,
                tache: fetchedTache
            })
            const result = await partage.save();
            const userById = await User.findById(req.userId);

            createdPartage = transformEvent(result);

            userById.partages.push(partage);
            await userById.save();
            return transformPartge(partage);
        } catch (err) {
            throw err;
        }
    }
    export const cancelPartege = async (args : any, req : any) => {

        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }

        try {
            const partage = await Partage.findById(args.partageId).populate('tache');

            const tache = transformEvent(partage.tache);

            await Partage.deleteOne({ _id: args.partageId })
            return tache;
        } catch (err) {
            throw err;
        }
    }
    export const partageResolver ={
        ...partager,
        ...partages,
        ...cancelPartege
    }
