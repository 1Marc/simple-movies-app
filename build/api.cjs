"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPopularMovies = void 0;
const API_KEY = process.env.API_KEY;
async function getPopularMovies() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}
exports.getPopularMovies = getPopularMovies;
//# sourceMappingURL=api.cjs.map