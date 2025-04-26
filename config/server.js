const strapi = require('strapi');
const http = require('http');

module.exports = ({ env }) => {
  const app = strapi();
  
  app
    .load()
    .then(() => {
      const server = http.createServer(app.callback());
      
      // Listen on the given port (Vercel will set the PORT automatically)
      server.listen(env.int('PORT', 1337), '0.0.0.0', () => {
        console.log('Strapi is running...');
      });
    })
    .catch((err) => {
      console.error('Error loading Strapi:', err);
      process.exit(1);
    });
};
