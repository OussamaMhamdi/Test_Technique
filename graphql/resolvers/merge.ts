import { Tache } from '../../models/tache';
import { User } from '../../models/user';


export const transformEvent = (tache : any) =>  {
    return {
        ...tache._doc,
        user: user.bind(this, tache.user)
    }
}
export const transformPartge = (partage : any) => {
    return {
        ...partage._doc,
        user: user.bind(this, partage._doc.user),
        tache: singleTache.bind(this, partage._doc.tache),
        createdAt: new Date(partage._doc.createdAt).toISOString(),
        updateAt: new Date(partage._doc.createdAt).toISOString()
    }
}
export const transformComment = (comment : any) => {
    return {
        ...comment._doc,
        user: user.bind(this, comment._doc.user),
        tache: singleTache.bind(this, comment._doc.tache),
        createdAt: new Date(comment._doc.createdAt).toISOString(),
        updateAt: new Date(comment._doc.createdAt).toISOString()
    }
}

export const taches = async(tacheIds : any) => {
    try {
        const taches = await Tache.find({ _id: { $in: tacheIds } });
        taches.map((tache : any) => {
            return transformEvent(tache);
        });
        return taches;
    } catch (err) {
        throw err;
    };
};

export const user = async(userId : Number) => {
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
export const singleTache = async(tacheId : Number) => {
    try {
        const tache = await Tache.findById(tacheId);
        return transformEvent(tache)
    } catch (err) {
        throw err;
    }
}

