const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
module.exports = {
    entry : "./src/index.js",
    module : {
        rules : [
            {
            test: /\.css$/,
            use : ['style-loader', 'css-loader'],
        },
        {
            test: /\.html$/,
            use : ['html-loader'],
        },
        {
                test: /\.(gif|png|jpe?g|svg|webp)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        progressive: true,
                      },
                      // optipng.enabled: false will disable optipng
                      optipng: {
                        enabled: false,
                      },
                      pngquant: {
                        quality: [0.85, 0.999],
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false,
                      },
                      // the webp option will enable WEBP
                      webp: {
                        quality: 90
                      }
                    }
                  },
                ],
              }]},
    
        plugins : [new HtmlWebpackPlugin(
            {
                filename : 'index.html',
                template : 'src/index.html'
            }
        )],
        devServer : {
            contentBase : path.join(__dirname, 'dist'),
            port : 300,
            hot : true
        },
        mode : development
}

