const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'mutasem-NextjsProject',
        mongodb_password: '2741999',
        mongodb_clusterName: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'mutasem-NextjsProject',
      mongodb_password: '2741999',
      mongodb_clusterName: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
