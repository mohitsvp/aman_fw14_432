const path = require("path");

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
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test:/\.js$/,
            use:['babel-loader']
          },
        ],
      },
}