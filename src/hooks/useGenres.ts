import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");
// if we don't want to call the server for genres
const useGenres = () => ({ data: genres, loading: false, error: null });
export default useGenres;
