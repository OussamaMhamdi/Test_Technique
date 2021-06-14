import { Tache } from '../../models/tache';
import { Commentaire } from '../../models/commentaire';
import { User } from '../../models/user';
import { transformPartge, transformEvent, transformComment } from './merge';
import { Response, Request, NextFunction } from "express";


export const comments = async () : Promise<void> => {
    try {
        const comments = await Commentaire.find();
        return comments.map((comment: any) => {
            return transformPartge(comment);
        })
    } catch (err) {
        throw err;
    }
}
export const commenter = async (args: any, req: any) : Promise<void>  => {

    // if (!req.isAuth) {
    //     throw new Error('Unauthenticated!');
    // }

    let createdComment
    const fetchedTache = await Tache.findOne({ _id: args.tacheid });
    try {
        const comment = new Commentaire({
            description: args.commentInput.description,
            user: "60bd3c091352344a58e2b071",
            tache: fetchedTache
        })
        const result = await comment.save();
        const userById = await User.findById("60bd3c091352344a58e2b071");

        createdComment = transformEvent(result);

        userById.comments.push(comment);
        await userById.save();
        return transformComment(comment);
    } catch (err) {
        throw err;
    }
}
export const deleteComment = async (args: any, req: Request) => {

    // if (!req.isAuth) {
    //     throw new Error('Unauthenticated!');
    // }

    try {
        const comment = await Commentaire.findById(args.commentId).populate('tache');

        const tache = transformEvent(comment.tache);

        await Commentaire.deleteOne({ _id: args.commentId })
        return tache;
    } catch (err) {
        throw err;
    }
}
export  const commentaire = {
    ...commenter,
    ...comments,
    ...deleteComment
}