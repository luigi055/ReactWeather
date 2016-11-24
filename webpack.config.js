module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname + '/public', // it can also be './public'
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {},
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  },
  //this creates source maps of our components that the browser will understand
  //for debugging in browser
  devtool: 'cheap-module-eval-source-map' 
};

