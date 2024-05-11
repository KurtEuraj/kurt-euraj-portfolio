import trackerThumb from "../assets/images/tracker_thumb.png"
import FC_thumbnail from "../assets/images/FC_Thumbnail.png"
import GC_thumbnail from "../assets/images/GC_thumbnail.png"

export const projects = [
    {
        name: "Tracker",
        thumbnail: trackerThumb,
        projectLink: "https://trackersongs.netlify.app/",
        repoLinks: {
            frontend: "https://github.com/KurtEuraj/tracker",
            backend: "https://github.com/KurtEuraj/tracker-api"
        },
        description: "Provides users with personalized song suggestions based on their favorite tracks.",
        tools: ["React", "Express", "OpenAI API", "Spotify API"]
    },
    {
        name: "GolfCave",
        thumbnail: GC_thumbnail,
        projectLink: "https://www.golfcave.com/",
        description: "GolfCave is a website that utilizes location specific content, interactive maps, and other JS solutions to encourage users to book time at their nearest location.",
        tools: ["Webflow", "Mapbox API"]
    },
    {
        name: "Ferraz Creative",
        thumbnail: FC_thumbnail,
        projectLink: "https://ferrazcreative.com/",
        description: "Ferraz Creative sought a website redesign to overcome limitations in their current solution. The focus was on enhancing the user experience, considering the absence of a structured client inquiry process.",
        tools: ["Webflow", "Make Integration"]
    },
]