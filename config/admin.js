module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '829b11c05803a8891c3faf1552df12bf'),
  },
});
