const path = require("path");
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');

module.exports={
    mode: 'development',
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"bundle.js",
    },
    module: {
        rules: [
          { test: /\.css$/, 
            use: ["style-loader",'css-loader'] 
           },
           {
             test:/\.html$/,
             use:['html-loader']
           },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options:{
                      name:'[name].[ext]',
                      outputPath:"img"
                    }
                  },
                ],
              },
        ],
      },
      plugins:[
        new HtmlWebpackPlugin({
          template:'index.html'
        }),
        new CleanWebpackPlugin(),
      ]
}