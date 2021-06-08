const Tache = require('../../models/tache').Taches;
const Partage = require('../../models/partage');
const User = require('../../models/user');
const { transformEvent, transformPartge } = require('./merge');

module.exports = {

    partages: async () => {
        try {
            const partages = await Partage.find();
            return partages.map(partage => {
                return transformPartge(partage);
            })
        } catch (err) {
            throw err;
        }
    },
    partager: async (args, req) => {

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
    },
    cancelPartege: async (args, req) => {

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
}