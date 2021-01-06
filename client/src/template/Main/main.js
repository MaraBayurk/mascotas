import Content from "./Content/content";
import Sidebar from "./Sidebar/sidebar";


export default function Main(){

    return(
        <div id="main">
        <div class="inner">
            <Content/>
            <Sidebar/>
        </div>
        </div>
    )
}