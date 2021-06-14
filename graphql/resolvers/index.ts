import { addUser, login } from './auth';
import { commenter, comments, deleteComment } from './commentaire';
import { addTache, taches, deleteTache } from './taches';
import { partager, cancelPartege, partages } from './partage';

export const graphqlResolvers = {
    addUser,
    login,
    addTache,
    taches,
    deleteTache,
    partages,
    partager,
    cancelPartege,
    comments,
    commenter,
    deleteComment

}






