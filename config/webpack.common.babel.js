import path from "path";
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from "eslint-webpack-plugin";


const config = {
  entry: "./src/index.tsx",
  module: {
    rules: [
        /**
       * TypeScript (.ts/.tsx files)
       *
       * The TypeScript loader will compile all .ts/.tsx files to .js. Babel is
       * not necessary here since TypeScript is taking care of all transpiling.
       */
    {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
    },
    // Fonts
    {
    test: /\.(woff(2)?|eot|ttf|otf)$/,
    type: 'asset/inline',
    },
    // Markdown
    {
    test: /\.md$/,
    type: 'asset/source',
    },
    // Images
    {
    test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
    type: 'asset/resource',
    },
    ],
  },
  resolve: {
    // Resolve in this order
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.md'],
    // Allow `@/` to map to `src/client/`
    alias: {
      '@': path.resolve(__dirname, '../src/client'),
      '@resources': path.resolve(__dirname, '../src/resources'),
      stream: 'stream-browserify',
      path: 'path-browserify',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
//   devtool: "inline-source-map",
};

export default config;