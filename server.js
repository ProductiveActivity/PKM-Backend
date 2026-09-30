require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`[API-GATEWAY] Server is running on port ${PORT}`);
  console.log(`[API-GATEWAY] Health check available at: http://localhost:${PORT}/api/health`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('[API-GATEWAY] SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('[API-GATEWAY] Process terminated.');
  });
});
