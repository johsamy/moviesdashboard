import http from "@/http-common";

class MovieDataService {
  getAll(): Promise<any> {
    return http.get("/movie/now_playing?api_key=ca9cca9965b491a858c3b5736d140464&language=fr-FR");
  }

  // update(id: any, data: any): Promise<any> {
  //   return http.put(`/movies/${id}`, data);
  // }

  findByTitle(title: string): Promise<any> {
    return http.get(`search/movie?api_key=ca9cca9965b491a858c3b5736d140464&language=fr-FR&page=1&query=${title}`);
    // return http.get(`search/movie?api_key=ca9cca9965b491a858c3b5736d140464&language=fr-FR&page=${this.page}&query=${title}`);
  }

  getGenres(): Promise<any> {
    return http.get(`genre/movie/list?api_key=ca9cca9965b491a858c3b5736d140464&language=fr-FR`);
  }

  getMoviesByGenres(genre: number): Promise<any> {
    return http.get(`discover/movie?api_key=ca9cca9965b491a858c3b5736d140464&language=fr-FR&sort_by=popularity.desc&page=1&with_genres=${genre}`);
  }

  getMovie(id: number): Promise<any> {
    return http.get(`movie/${id}?api_key=ca9cca9965b491a858c3b5736d140464&language=fr-FR`);
  }

  getFavoriteMovies(account_id: number): Promise<any> {
    return http.get(`/account/${account_id}/favorite/movies&language=fr-FR`);
  }
}

export default new MovieDataService();
