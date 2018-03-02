const ENV = process.env.NODE_ENV || "development";

console.log("Env is :", ENV);

const config = {
  URL: "http://localhost:3000",
  API_URL: "http://localhost:3001"
};

if (ENV === "production") {
  config.URL = "https://slack-like-jerome.herokuapp.com";
  config.API_URL = "https://slack-like-server-jerome.herokuapp.com";
}

export default config;
