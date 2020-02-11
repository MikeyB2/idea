module.exports = {
  name: 'recipe',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/recipe',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
