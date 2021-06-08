const Tache = require('../../models/tache').Taches;
const User = require('../../models/user');

const transformEvent = tache => {
    return {
        ...tache._doc,
        user: user.bind(this, tache.user)
    }
}
const transformPartge = partage => {
    return {
        ...partage._doc,
        user: user.bind(this, partage._doc.user),
        tache: singleTache.bind(this, partage._doc.tache),
        createdAt: new Date(partage._doc.createdAt).toISOString(),
        updateAt: new Date(partage._doc.createdAt).toISOString()
    }
}
const transformComment = comment => {
    return {
        ...comment._doc,
        user: user.bind(this, comment._doc.user),
        tache: singleTache.bind(this, comment._doc.tache),
        createdAt: new Date(comment._doc.createdAt).toISOString(),
        updateAt: new Date(comment._doc.createdAt).toISOString()
    }
}

const taches = async tacheIds => {
    try {
        const taches = await Tache.find({ _id: { $in: tacheIds } });
        taches.map(tache => {
            return transformEvent(tache);
        });
        return taches;
    } catch (err) {
        throw err;
    };
};

const user = async userId => {
    try {
        const createdUser = await User.findById(userId);
        return {
            ...createdUser._doc,
            createdTaches: taches.bind(this, createdUser._doc.createdTaches)
        }
    } catch (err) {
        throw err;
    }
}
const singleTache = async tacheId => {
    try {
        const tache = await Tache.findById(tacheId);
        return transformEvent(tache)
    } catch (err) {
        throw err;
    }
}

exports.transformComment = transformComment;
exports.transformEvent = transformEvent;
exports.transformPartge = transformPartge;