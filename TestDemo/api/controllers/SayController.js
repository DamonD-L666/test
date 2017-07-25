/**
 * SayController
 *
 * @description :: Server-side logic for managing Says
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hello: function (req, res) {
    // Make sure this is a socket request (not traditional HTTP)
    if (!req.isSocket) {
      console.log('**********错误的请求***********');
      return res.badRequest();
    }
    console.log('**********广播的方法***********');
    // Have the socket which made the request join the "funSockets" room
    sails.sockets.join(req, 'funSockets');
    // Broadcast a "hello" message to all the fun sockets.
    // This message will be sent to all sockets in the "funSockets" room,
    // but will be ignored by any client sockets that are not listening-- i.e. that didn't call `io.socket.on('hello', ...)`
    sails.sockets.broadcast('funSockets', 'hello', req);
    // Respond to the request with an a-ok message
    return res.JSON({msg:'可以了'});
  }
};

