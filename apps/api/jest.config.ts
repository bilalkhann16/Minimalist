/* eslint-disable */
export default {
  displayName: 'api',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  "compilerOptions": {
    "outDir": "../../dist/out-tsc",
    "experimentalDecorators": true,
    "allowJs": true,
    "module": "commonjs",
    "types": ["jest", "node"]
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/api',
};
