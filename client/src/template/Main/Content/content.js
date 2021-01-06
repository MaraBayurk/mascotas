import Elements from "./Elements";
import MiniPost from "./Generic/miniPost";
import Posts from "./Generic/posts";
import PostsPrincipal from './Principal/posts'
import MiniPostPrincipal from './Principal/miniPosts'


export default function Content(){

    return(
        <div id="content">
			<Posts/>
			<MiniPost/>
			<Elements/>
			<PostsPrincipal/>
			<MiniPostPrincipal/>
		</div>

    )
}