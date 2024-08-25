import platform from "../data/platform";
import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
//shiping the constant if we don't want to call the server for platforms
const usePlatforms = () => ({ data: platform, error: null });

export default usePlatforms;
