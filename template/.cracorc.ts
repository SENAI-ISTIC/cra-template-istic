import path from 'path';

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/*': path.resolve(__dirname, 'src/*'),
    },
  },
};
