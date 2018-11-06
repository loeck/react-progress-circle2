module.exports = {
  presets: ['@babel/preset-react', ['@babel/preset-env', { loose: true }], '@babel/preset-flow'],
  plugins: [['@babel/proposal-class-properties', { loose: true }]],
}
