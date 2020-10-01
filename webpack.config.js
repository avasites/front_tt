const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/js/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src/js'),
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    "env",
                    {
                      "targets": {
                        "ie": "11"
                      }
                    }
                  ]
                ]
              }
            }
          },
          {
            test: /\.(sass|scss)$/,
            include: path.resolve(__dirname, "src/scss"),
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {}
              },
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                  url: false
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          },
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "./css/style.bundle.css"
        })
    ]
}