import image01 from "../../../../images/pic01.jpg"
import image02 from "../../../../images/pic02.jpg"
import image03 from "../../../../images/pic03.jpg"
import image04 from "../../../../images/pic04.jpg"

export default function Posts(){

    return(
        <section>
                        <header>
                            <h1>Lorem feugiat dolore</h1>
                            <p>Dolor sit amet adipiscing consequat veroeros</p>
                        </header>
                        <p>Phasellus dapibus convallis scelerisque. Donec tempus augue id tortor ultricies eget sed pellentesque turpis ultrices. Vestibulum ut nulla sem, vel iaculis arcu. Nulla vel lorem nisl, quis ultricies tellus. Nunc imperdiet elit sed dolore lacus venenatis urna dolor est sagittis laoreet. Phasellus dapibus convallis scelerisque. Donec tempus augue id tortor ultricies eget pellentesque turpis ultrices. Vestibulum ut nulla sem.</p>
                        <section class="posts">
                            <article>
                                <div class="image fit"><a href="#"><img src={image01} alt="" /></a></div>
                                <h2>Magna lorem feugiat</h2>
                                <p>Nulla sem, vel iaculis arcu. Nulla vel lorem nisl quis sed ultricies amet tellus magna feugiat.</p>
                                <ul class="actions fixed">
                                    <li><a href="#" class="button">Learn More</a></li>
                                </ul>
                            </article>
                            <article>
                                <div class="image fit"><a href="#"><img src={image02} alt="" /></a></div>
                                <h2>Tempus sed aliquam</h2>
                                <p>Nulla sem, vel iaculis arcu. Nulla vel lorem nisl quis sed ultricies amet tellus magna feugiat.</p>
                                <ul class="actions fixed">
                                    <li><a href="#" class="button">Learn More</a></li>
                                </ul>
                            </article>
                            <article>
                                <div class="image fit"><a href="#"><img src={image03} alt="" /></a></div>
                                <h2>Lorem elit ipsum</h2>
                                <p>Nulla sem, vel iaculis arcu. Nulla vel lorem nisl quis sed ultricies amet tellus magna feugiat.</p>
                                <ul class="actions fixed">
                                    <li><a href="#" class="button">Learn More</a></li>
                                </ul>
                            </article>
                            <article>
                                <div class="image fit"><a href="#"><img src={image04} alt="" /></a></div>
                                <h2>Rutrum et imperdiet</h2>
                                <p>Nulla sem, vel iaculis arcu. Nulla vel lorem nisl quis sed ultricies amet tellus magna feugiat.</p>
                                <ul class="actions fixed">
                                    <li><a href="#" class="button">Learn More</a></li>
                                </ul>
                            </article>
                        </section>
         </section>
    )
}