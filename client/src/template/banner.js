import banner01 from "../images/banner01.jpg"
import banner02 from "../images/banner02.jpg"
import banner03 from "../images/banner03.jpg"

export default function Banner(){

    return(
        <div id="banner">
				<article data-position="bottom right">
					<div class="inner">
						<img src={banner01} alt=""/>
						<div class="features">
							<a href="#" class="accent1 alt">
								<h2>Amet lorem dolore</h2>
								<p>Lorem ipsum adipiscing et nullam tempus consequat magna phaselus amet veroeros blandit, Magna adipiscing lorem.</p>
							</a>
						</div>
					</div>
				</article>
				<article data-position="bottom right">
					<div class="inner">
						<img src={banner02} alt=""/>
						<div class="features">
							<a href="#" class="accent1 alt">
								<h2>Magna sed ipsum</h2>
								<p>Lorem ipsum adipiscing et nullam tempus consequat magna phaselus amet veroeros blandit, Magna adipiscing lorem.</p>
							</a>
						</div>
					</div>
				</article>
				<article data-position="bottom right">
					<div class="inner">
						<img src={banner03} alt=""/>
						<div class="features">
							<a href="#" class="accent1 alt">
								<h2>Veroeros blandit</h2>
								<p>Lorem ipsum adipiscing et nullam tempus consequat magna phaselus amet veroeros blandit, Magna adipiscing lorem.</p>
							</a>
						</div>
					</div>
				</article>
			</div>
    )
}