import logger from "../utils/logger.js";

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!")
    logger.debug("Loading the playlist", playlist);
    response.json(playlist);   
  },
};
