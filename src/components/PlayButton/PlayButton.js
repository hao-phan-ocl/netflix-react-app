import { PlayArrow, PlayCircleFilled } from "@material-ui/icons";

import Video from "../Video/Video";
import useVideo from "../../store/useVideo";

export default function PlayButton({buttonSize, data}) {
    const [openVideo, setOpenVideo] = useVideo()

    return (
        <>
            {buttonSize === 'large' ? (
                <button className="play" onClick={() => setOpenVideo(true)}>
                    <PlayArrow className="icon" />
                    Play
                </button>
            ) : (
                <PlayCircleFilled className="play" onClick={() => setOpenVideo(true)} />
            )}
            {openVideo && <Video setOpenVideo={setOpenVideo} data={data} />}
        </>
    )
}