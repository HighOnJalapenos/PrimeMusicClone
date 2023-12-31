import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i }) => {
  const activeSong = "Test";
  const handlerPauseClick = () => {};

  const handlePlayClick = () => {};

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 items-center justify-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}>
          <PlayPause
            song={song}
            handlePause={handlerPauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song?.thumbnail} />
      </div>

      <div className="flex flex-col mt-4">
        <p className="text-lg font-semibold text-white truncate">
          <Link to={`/song/${song?.key}`}>{song?.title}</Link>
        </p>
        <p className="mt-1 text-sm text-gray-300 truncate">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }>
            {song?.artist[0]?.name}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
