module.exports = {
  // Function entry to cause DynamicEntryPlugin to be applied
  entry: () => ({}),

  plugins: [
    {
      apply(compiler) {
        compiler.hooks.compilation.tap("UselessPlugin", compilation => {
          compilation.hooks.seal.tap("UselessPlugin", () => {
            throw new Error(
              "I'm trapped in a Promise chain that won't handle me"
            );
          });
        });
      }
    }
  ]
};
