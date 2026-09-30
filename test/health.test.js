const test = require('node:test');
const assert = require('node:assert');
const app = require('../src/app');

test('GET /api/health returns 200 and success status', async () => {
  // Start server on a random available port (0)
  const server = app.listen(0);
  const port = server.address().port;

  try {
    const res = await fetch(`http://localhost:${port}/api/health`);
    assert.strictEqual(res.status, 200, 'HTTP status should be 200');

    const data = await res.json();
    assert.strictEqual(data.status, 'success');
    assert.strictEqual(data.message, 'Backend API Gateway is up and running');
    assert.ok(data.timestamp, 'Timestamp should be present');
  } finally {
    server.close();
  }
});
