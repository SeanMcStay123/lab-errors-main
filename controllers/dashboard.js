const viewData = {
  title: "Playlist App Dashboard",
  fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
  picture: loggedInUser.picture,
  playlists: sortField ? sorted : playlists,
  search: searchTerm,
  titleSelected: request.query.sort === "title",
  ratingSelected: request.query.sort === "rating",
  ascSelected: request.query.order === "asc",
  descSelected: request.query.order === "desc",
};