const authResolver = require('./auth');
const tachesResolver = require('./taches');
const partageResolver = require('./partage');

const rootResolver = {
    ...authResolver,
    ...tachesResolver,
    ...partageResolver
}

module.exports = rootResolver;




