module.exports = {
  apps: [
    {
      name: "dfsk-admin",
      script: "npm", // Use npm to run the script
      args: "run preview", // Run the `preview` script
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
