var child = require('child_process');

module.exports = function(options){
  options = options || {};

  var args = [
    '--nopreview'
  ]

  Object.keys(options || {}).forEach(function(key){
    args.push('--' + key);
    var val = options[key];
    if(val){
      args.push(val);
    }
  })

  args.push('-o')
  args.push('-')

  // the avconv stream that inherits stderr
  return child.spawn('raspivid', args, {
    stdio: ['ignore', 'pipe', process.stderr]
  });
}