type EnvVariables = {
  API_URL: string;
  // Add more variables here as needed
};

const requiredEnvVariables: (keyof EnvVariables)[] = ["API_URL"];

function validateEnvVariables(): EnvVariables {
  const env: Partial<EnvVariables> = {
    API_URL: process.env.REACT_APP_API_URL,
    // Add more variables here as needed
  };

  requiredEnvVariables.forEach((key) => {
    if (!env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  });

  return env as EnvVariables;
}

const env = validateEnvVariables();

export default env;