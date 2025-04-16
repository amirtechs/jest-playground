import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: 'tsconfig.json', // Path to your tsconfig.json file
      diagnostics: false, // Disable type-checking diagnostics (optional)
    }],
  },
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  reporters: [
    'default',
     [
    //   'jest-junit',
    //   {
    //     outputDirectory: './test-results',
    //     outputName: 'results.xml',
    //   },
    //   ],
    // [
      'jest-html-reporter',
      {
        outputPath: './test-results/result.html',
        includeFailureMsg: true,
        includeConsoleLog: true,
        pageTitle: "Test Report",
        sort: "status"
      },
    ],
  ],
};

export default config;