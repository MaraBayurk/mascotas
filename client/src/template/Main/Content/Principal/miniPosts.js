import image05 from "../../../../images/pic05.jpg"
import image06 from "../../../../images/pic06.jpg"
import image07 from "../../../../images/pic07.jpg"


export default function MiniPost(){

    return(
        <section>
								<header>
									<h2>Urna tempus lorem venenatis</h2>
								</header>
								<section class="mini-posts">
									<article>
										<div class="image"><a href="#"><img src={image05} alt="" /></a></div>
										<div class="content">
											<p>Amet vel iaculis tempus lorem nisl amet quis sed ultricies amet sed tellus magna elit sed dolore lacus venenatis rutrum et vulputate dolor est sagittis purus laoreet. Nunc imperdiet tempus.</p>
											<ul class="actions fixed">
												<li><a href="#" class="button">More</a></li>
											</ul>
										</div>
									</article>
									<article>
										<div class="image"><a href="#"><img src={image06} alt="" /></a></div>
										<div class="content">
											<p>Ultricies amet sed tellus magna elit sed dolore lacus venenatis rutrum et vulputate dolor est sagittis purus laoreet. Nunc imperdiet tempus. Amet vel iaculis tempus lorem nisl amet quis magna.</p>
											<ul class="actions fixed">
												<li><a href="#" class="button">More</a></li>
											</ul>
										</div>
									</article>
									<article>
										<div class="image"><a href="#"><img src={image07}alt="" /></a></div>
										<div class="content">
											<p>Lacus venenatis rutrum et vulputate dolor est sagittis purus laoreet. Nunc imperdiet tempus. Amet vel iaculis tempus lorem nisl amet quis sed ultricies amet sed tellus magna elit sed dolore veroeros.</p>
											<ul class="actions fixed">
												<li><a href="#" class="button">More</a></li>
											</ul>
										</div>
									</article>
								</section>
							</section>
    )
}