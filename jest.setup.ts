// File to configure the testing environment. 
// This file can be used to set up any global configurations or imports needed for your tests.
import '@testing-library/jest-dom/extend-expect';
import { loadEnvConfig } from '@next/env'
 
export default async () => {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}