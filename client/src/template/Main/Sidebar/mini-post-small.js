import imagen08 from "../../../images/pic08.jpg"
import imagen09 from "../../../images/pic09.jpg"
import imagen10 from "../../../images/pic10.jpg"
import imagen11 from "../../../images/pic11.jpg"

export default function MiniPostSmall(){

    return(
                  <section>
							<header>
								<h2>Ipsum sed feugiat</h2>
							</header>
							<section class="mini-posts small">
								<article>
									<div class="image"><a href="#"><img src={imagen08} alt="" /></a></div>
									<div class="content">
										<a href="#">Nulla sem, vel iaculis arcu magna et tempus consequat.</a>
										<div class="timestamp">8 hours ago</div>
									</div>
								</article>
								<article>
									<div class="image"><a href="#"><img src={imagen09}  alt="" /></a></div>
									<div class="content">
										<a href="#">Amet vel iaculis tempus lorem nisl amet quis sed ultricies amet.</a>
										<div class="timestamp">14 hours ago</div>
									</div>
								</article>
								<article>
									<div class="image"><a href="#"><img src={imagen10}  alt="" /></a></div>
									<div class="content">
										<a href="#">Magna elit sed dolore lacus venenatis rutrum et vulputate dolor.</a>
										<div class="timestamp">1 day ago</div>
									</div>
								</article>
								<article>
									<div class="image"><a href="#"><img src={imagen11} alt="" /></a></div>
									<div class="content">
										<a href="#">Rutrum et vulputate dolor est sagittis purus laoreet. Nunc imperdiet.</a>
										<div class="timestamp">2 days ago</div>
									</div>
								</article>
								<ul class="actions fixed">
									<li><a href="#" class="button">More Posts</a></li>
								</ul>
							</section>
						</section>

    )
}