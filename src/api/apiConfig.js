const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "13aa7814c14a3daf4115dcaa2cb2b124",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
