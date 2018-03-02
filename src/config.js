import dotenv from "dotenv";
dotenv.config();

const ENV = process.env.NODE_ENV;

const config = {
  URL: "http://localhost:3000",
  API_URL: "http://localhost:3001"
};

if (ENV === "production") {
  (config.URL = "production_url/"), (config.API_URL = "production_url/");
}

export default config;
