// src/mqtt.js
import mqtt from 'mqtt';

let client = null;
let retryCount = 0;
const MAX_RETRIES = 3;

export const connectMqtt = (presignedUrl, topic) => {
  if (!presignedUrl || !topic) {
    console.error('MQTT: URL or topic missing');
    return;
  }

  if (client) {
    client.end(true);
    client = null;
  }

  retryCount = 0;

  client = mqtt.connect(presignedUrl, {
    protocol: 'wss',
    reconnectPeriod: 2000,
    connectTimeout: 4000,
  });

  client.on('connect', () => {
    console.log('[MQTT] Connected');
    retryCount = 0; // Reset on success
    client.subscribe(topic, (err) => {
      if (err) console.error('[MQTT] Subscribe error:', err);
      else console.log(`[MQTT] Subscribed to ${topic}`);
    });
  });

  client.on('message', (topic, message) => {
    console.log(`[${topic}]: ${message.toString()}`);
  });

  client.on('reconnect', () => {
    retryCount++;
    console.log(`[MQTT] Reconnect attempt ${retryCount}`);
    if (retryCount >= MAX_RETRIES) {
      console.warn('[MQTT] Max reconnect attempts reached. Disconnecting...');
      client.end(true);
      client = null;
    }
  });

  client.on('error', (err) => {
    console.error('[MQTT] Error:', err.message);
  });

  client.on('close', () => {
    console.log('[MQTT] Connection closed');
  });
};
