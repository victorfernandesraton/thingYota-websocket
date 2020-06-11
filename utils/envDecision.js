module.exports = (nodeEnv) => {
  switch (nodeEnv) {
    case "development":
      return "dev.env";
    case "development-docker":
      return "docker.env";
    case "production":
    default:
      return ".env";
  }
};
