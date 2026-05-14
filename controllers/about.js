import logger from "../utils/logger.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    response.send('About the Playlist app');   
  },
};
