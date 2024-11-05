import type { Config } from 'jest'
import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './',
})
 
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverage: true, // Enables coverage collection
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}', // Include all JS/TS files
    '!**/node_modules/**',  // Exclude node_modules
    '!**/.next/**',         // Exclude Next.js build directory
    '!**/*.config.js',      // Exclude config files
    '!**/*.config.ts',      // Exclude config files in TypeScript
  ],
  coverageDirectory: './coverage', // Specify the directory to store coverage reports
  coverageReporters: ['json', 'lcov', 'text', 'clover'], // Include multiple report formats
}
 
export default createJestConfig(config)