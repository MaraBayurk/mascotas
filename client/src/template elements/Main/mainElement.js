import Sidebar from "../../template/Main/Sidebar/sidebar";
import ContentElement from "../../template/Main/Content/Elements/contentElement";


export default function Main(){

    return(
        <div id="main">
        <div class="inner">
            <ContentElement/>
            <Sidebar/>
        </div>
        </div>
    )
}