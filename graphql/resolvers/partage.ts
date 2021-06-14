import { Tache } from '../../models/tache';
import { Partage } from '../../models/partage';
import { User } from '../../models/user';
import { transformPartge,transformEvent } from './merge';
import { Response, Request, NextFunction } from "express";



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
    export const partager = async (args: any, req : Request) => {

        // if (!req.isAuth) {
        //     throw new Error('Unauthenticated!');
        // }

        let createdPartage
        const fetchedTache = await Tache.findOne({ _id: args.tacheid });
        try {
            const partage = new Partage({
                user: "60bd3c091352344a58e2b071",
                tache: fetchedTache
            })
            const result = await partage.save();
            const userById = await User.findById("60bd3c091352344a58e2b071");

            createdPartage = transformEvent(result);

            userById.partages.push(partage);
            await userById.save();
            return transformPartge(partage);
        } catch (err) {
            throw err;
        }
    }
    export const cancelPartege = async (args : any, req : Request) => {

        // if (!req.isAuth) {
        //     throw new Error('Unauthenticated!');
        // }

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
