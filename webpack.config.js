const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let ip 
require('dns').lookup(require('os').hostname(), function (_err, add, fam) {
ip = add
})
module.exports = {
  // entry: __dirname + "/src/app/index.js", 
  entry:{
    index_new_lots:'./src/index.js', 
    // common_new_lots: './src/assets/scss/index-new_lots.scss',
    index_favorites_lots: './src/index-favorites_lots.js',
    index_favorites_empty: './src/index-favorites_empty.js',
    index_participation_empty: './src/index-participation_empty.js',
    lot: './src/lot.js',
    won_items: './src/won-items.js',
    won_items_delivered: './src/won-items-delivered.js',
    won_items_awaiting: './src/won-items-awaiting.js',
    won_items_intransit: './src/won-items-intransit.js',
    won_items_inprocessing: './src/won-items-inprocessing.js',
    authorization: './src/authorization.js',   
    authorization_2: './src/authorization-step-2.js',
    registration: './src/registration.js',
    registration_2: './src/registration-step-2.js',
    registration_3_social: './src/registration-step-3-social.js',
    registration_3_notsocial: './src/registration-step-3-notsocial.js',
    registration_4: './src/registration-step-4.js',
    registration_5: './src/registration-step-5.js',
    confirm_bet: './src/confirm-bet.js',
    confirm_bet_notokens: './src/confirm-bet-notokens.js',
    completed_lot: './src/completed-lot.js',
    completed_lot_winner: './src/completed-lot-winner.js',
    rating_users: './src/rating-users.js',
    delivery_step_1: './src/delivery-step-1.js',
    delivery_step_2: './src/delivery-step-2.js',
    delivery_step_3: './src/delivery-step-3.js',
    delivery_step_4: './src/delivery-step-4.js',
    profile: './src/profile.js',
    alerts: './src/alerts.js',
    ivents: './src/ivents.js',
    buy_tokens: './src/buy-tokens.js',
    profile_preview: './src/profile-preview.js'
    
  },
  output: {
    path: __dirname + '/dist/pages', 
    filename: '[name]/[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
      outputPath: './dist/pages/[name]/css',
      ignoreOrder: false,
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: __dirname + "/src/public/index.html",
        chunks: ["index_new_lots"],
    }),
    new HtmlWebpackPlugin({
      filename: 'index-favorites_lots.html',
      template: __dirname + "/src/public/index-favorites_lots.html",
      chunks: ["index_favorites_lots"]
    }),
    new HtmlWebpackPlugin({
      filename: 'index-favorites_empty.html',
      template: __dirname + "/src/public/index-favorites_empty.html",
      chunks: ["index_favorites_empty"]
    }),
    new HtmlWebpackPlugin({
      filename: 'index-participation_empty.html',
      template: __dirname + "/src/public/index-participation_empty.html",
      chunks: ["index_participation_empty"]
     }),
     new HtmlWebpackPlugin({
      filename: 'lot.html',
      template: __dirname + "/src/public/lot.html",
      chunks: ["lot"]
     }),
     new HtmlWebpackPlugin({
      filename: 'won-items.html',
      template: __dirname + "/src/public/won-items.html",
      chunks: ["won_items"]
     }),
     new HtmlWebpackPlugin({
      filename: 'won-items-delivered.html',
      template: __dirname + "/src/public/won-items-delivered.html",
      chunks: ["won_items_delivered"]
     }),
     new HtmlWebpackPlugin({
      filename: 'won-items-awaiting.html',
      template: __dirname + "/src/public/won-items-awaiting.html",
      chunks: ["won_items_awaiting"]
     }),
     new HtmlWebpackPlugin({
      filename: 'won-items-intransit.html',
      template: __dirname + "/src/public/won-items-intransit.html",
      chunks: ["won_items_intransit"]
     }),
     new HtmlWebpackPlugin({
      filename: 'won-items-inprocessing.html',
      template: __dirname + "/src/public/won-items-inprocessing.html",
      chunks: ["won_items_inprocessing"]
     }),
     new HtmlWebpackPlugin({
      filename: 'authorization.html',
      template: __dirname + "/src/public/authorization.html",
      chunks: ["authorization"]
     }),
     new HtmlWebpackPlugin({
      filename: 'authorization-step-2.html',
      template: __dirname + "/src/public/authorization-step-2.html",
      chunks: ["authorization_2"]
     }),
     new HtmlWebpackPlugin({
      filename: 'registration.html',
      template: __dirname + "/src/public/registration.html",
      chunks: ["registration"]
     }),
     new HtmlWebpackPlugin({
      filename: 'registration-step-2.html',
      template: __dirname + "/src/public/registration-step-2.html",
      chunks: ["registration_2"]
     }),
     new HtmlWebpackPlugin({
      filename: 'registration-step-3-social.html',
      template: __dirname + "/src/public/registration-step-3-social.html",
      chunks: ["registration_3_social"]
     }),
     new HtmlWebpackPlugin({
      filename: 'registration-step-3-notsocial.html',
      template: __dirname + "/src/public/registration-step-3-notsocial.html",
      chunks: ["registration_3_notsocial"]
     }),
     new HtmlWebpackPlugin({
      filename: 'registration-step-4.html',
      template: __dirname + "/src/public/registration-step-4.html",
      chunks: ["registration_4"]
     }),
     new HtmlWebpackPlugin({
      filename: 'registration-step-5.html',
      template: __dirname + "/src/public/registration-step-5.html",
      chunks: ["registration_5"]
     }),
     new HtmlWebpackPlugin({
      filename: 'confirm-bet.html',
      template: __dirname + "/src/public/confirm-bet.html",
      chunks: ["confirm_bet"]
     }),
     new HtmlWebpackPlugin({
      filename: 'confirm-bet-notokens.html',
      template: __dirname + "/src/public/confirm-bet-notokens.html",
      chunks: ["confirm_bet_notokens"]
     }),
     new HtmlWebpackPlugin({
      filename: 'completed-lot.html',
      template: __dirname + "/src/public/completed-lot.html",
      chunks: ["completed_lot"]
     }),
     new HtmlWebpackPlugin({
      filename: 'completed-lot-winner.html',
      template: __dirname + "/src/public/completed-lot-winner.html",
      chunks: ["completed_lot_winner"]
     }),
     new HtmlWebpackPlugin({
      filename: 'rating-users.html',
      template: __dirname + "/src/public/rating-users.html",
      chunks: ["rating_users"]
     }),
     new HtmlWebpackPlugin({
      filename: 'delivery-step-1.html',
      template: __dirname + "/src/public/delivery-step-1.html",
      chunks: ["delivery_step_1"]
     }),
     new HtmlWebpackPlugin({
      filename: 'delivery-step-2.html',
      template: __dirname + "/src/public/delivery-step-2.html",
      chunks: ["delivery_step_2"]
     }),
     new HtmlWebpackPlugin({
      filename: 'delivery-step-3.html',
      template: __dirname + "/src/public/delivery-step-3.html",
      chunks: ["delivery_step_3"]
     }),
     new HtmlWebpackPlugin({
      filename: 'delivery-step-4.html',
      template: __dirname + "/src/public/delivery-step-4.html",
      chunks: ["delivery_step_4"]
     }),

  new HtmlWebpackPlugin({
    filename: 'profile.html',
    template: __dirname + "/src/public/profile.html",
    chunks: ["profile"]
   }),
   new HtmlWebpackPlugin({
    filename: 'profile-preview.html',
    template: __dirname + "/src/public/profile-preview.html",
    chunks: ["profile_preview"]
   }),
    new HtmlWebpackPlugin({
    filename: 'alerts.html',
    template: __dirname + "/src/public/alerts.html",
    chunks: ["alerts"]
   }),
   new HtmlWebpackPlugin({
    filename: 'ivents.html',
    template: __dirname + "/src/public/ivents.html",
    chunks: ["ivents"]
   }),
   new HtmlWebpackPlugin({
    filename: 'buy-tokens.html',
    template: __dirname + "/src/public/buy-tokens.html",
    chunks: ["buy_tokens"]
   }),
],
// devServer: {  
//     contentBase: './src/public',
//     port: 8000, 
//     host: ip,
//     proxy: {
//             '/api/**': {
//               target: ip,
//               secure: false,
//               changeOrigin: true,
//             }
//           }
// } ,
devServer:{
  port: 8000,
  // contentBase: __dirname + '/src/public/',
  contentBase: './src/public',
  // host: '172.20.10.5',
  // host:'192.168.0.103',
  host: 'localhost',
  // host: ip,
  overlay: true,
  // proxy: {
  //     '/api/**': {
  //       target: '192.168.0.103:8000',
  //       secure: false,
  //       changeOrigin: true,
  //     }
  //   },
},

  module: {  
      rules: [ 
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: [
              /node_modules/
            ]
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  outputPath: './dist/assets/css/[name]',
                  esModule: true,
              }
              },
            ],
          },
          {
            test: /\.(sass|scss)$/,
            use: [
            {
                loader: "style-loader"
            }, 
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                
                hmr: process.env.NODE_ENV === 'development',
              },
          },
                {
                loader: "css-loader" 
            }, 
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        autoprefixer({
                            overrideBrowserslist:['ie >= 8', 'last 4 version']
                        })
                    ],
                    sourceMap: true
                }
            },
            {
                loader: "sass-loader"
            },
        ]
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/, 
            use: [
              {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    publicPath:'./src/public/img',
                    outputPath: '/dist/assets/img'
                  }
              }
          ],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      publicPath:'./fonts',
                      outputPath: 'assets/fonts'
                    }
                }
            ],
        },
      ]
  },

};

