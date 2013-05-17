var path = require('path'),
    connect = require('connect'),
    http = require('http');

exports = module.exports = Veyron;

var DEFAULT_PORT = 3000;

function Veyron(target) {
    this.target = target;
}

Veyron.prototype.run = function(port) {
    this.port = port || DEFAULT_PORT;

    var app = connect()
        .use(connect.favicon())
        .use(connect.logger('dev'))
        .use(connect.static(path.join(process.cwd(), this.target)))
        .use(connect.directory(this.target))
        .use(connect.cookieParser())
        .use(connect.session({ secret: 'my secret here' }));

    http.createServer(app).listen(this.port);
}

