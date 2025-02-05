import Features from "./features";
import MiniPostMinimal from "./mini-post-minimal";
import MiniPostSmall from "./mini-post-small";

export default function Sidebar(){

    return(
        <div id="sidebar">
            <Features/>
            <MiniPostSmall/>
            <MiniPostMinimal/>
        </div>
    )
}