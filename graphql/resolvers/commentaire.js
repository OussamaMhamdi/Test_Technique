const Tache = require('../../models/tache').Taches;
const Comment = require('../../models/commentaire');
const User = require('../../models/user');
const { transformEvent, transformPartge } = require('./merge');

module.exports = {

    comments: async () => {
        try {
            const comments = await Comment.find();
            return comments.map(comment => {
                return transformPartge(comment);
            })
        } catch (err) {
            throw err;
        }
    },
    commenter: async (args, req) => {

        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }

        let createdComment
        const fetchedTache = await Tache.findOne({ _id: args.tacheid });
        try {
            const comment = new Comment({
                description : args.commentInput.description,
                user: req.userId,
                tache: fetchedTache
            })
            const result = await comment.save();
            const userById = await User.findById(req.userId);

            createdComment = transformEvent(result);

            userById.comments.push(comment);
            await userById.save();
            return transformComment(comment);
        } catch (err) {
            throw err;
        }
    },
    deleteComment: async (args, req) => {

        if (!req.isAuth) {
            throw new Error('Unauthenticated!');
        }

        try {
            const comment = await Comment.findById(args.commentId).populate('tache');

            const tache = transformEvent(comment.tache);

            await Comment.deleteOne({ _id: args.commentId })
            return tache;
        } catch (err) {
            throw err;
        }
    }
}