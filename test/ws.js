module.exports = {
    /**
     * Before connection (optional, just for faye)
     * @param {client} client connection
     */
    beforeConnect : function(client) {
      // Example:
      // client.setHeader('Authorization', 'OAuth abcd-1234');
      // client.disable('websocket');
      let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIyIiwiaWF0IjoxNTI2ODAyNjgzfQ.IM7ajv9-GeoVAD1BY4uTHkPBcHXLZW5rNDgymkfbL4s';
      let uid = 2;
      console.log('beforeConnect');
    },

    /**
     * On client connection (required)
     * @param {client} client connection
     * @param {done} callback function(err) {}
     */
    onConnect : function(client, done) {
      console.log('onConnect');
      // Faye client
      // client.subscribe('/channel', function(message) { });

      // Socket.io client
      // client.emit('test', { hello: 'world' });

      // Primus client
      // client.write('Sailing the seas of cheese');

      // WAMP session
      // client.subscribe('com.myapp.hello').then(function(args) { });

      done();
    },

    /**
     * Send a message (required)
     * @param {client} client connection
     * @param {done} callback function(err) {}
     */
    sendMessage : function(client, done) {
      // Example:
      // client.emit('test', { hello: 'world' });
      // client.publish('/test', { hello: 'world' });
      // client.call('com.myapp.add2', [2, 3]).then(function (res) { });
      done();
    },

    /**
     * WAMP connection options
     */
    options : {
      // realm: 'chat'
      project:  'WspusherDemo'
    }
 };