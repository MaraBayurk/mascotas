import imagen01 from "../../../../images/pic01.jpg"
import imagen02 from "../../../../images/pic02.jpg"

export default function Image(){

    return(
        <>
        <h3>Image</h3>
                            <h4>Fit</h4>
                            <span class="image fit"><img src={imagen01} alt="" /></span>
                            <div class="box alt">
                                <div class="row gtr-50 gtr-uniform">
                                    <div class="col-4"><span class="image fit"><img src={imagen01} alt="" /></span></div>
                                    <div class="col-4"><span class="image fit"><img src={imagen01} alt="" /></span></div>
                                    <div class="col-4"><span class="image fit"><img src={imagen01} alt="" /></span></div>

                                    <div class="col-4"><span class="image fit"><img src={imagen01} alt="" /></span></div>
                                    <div class="col-4"><span class="image fit"><img src={imagen01} alt="" /></span></div>
                                    <div class="col-4"><span class="image fit"><img src={imagen01} alt="" /></span></div>

                                    <div class="col-4"><span class="image fit"><img src={imagen01} alt="" /></span></div>
                                    <div class="col-4"><span class="image fit"><img src={imagen01} alt="" /></span></div>
                                    <div class="col-4"><span class="image fit"><img src={imagen01} alt="" /></span></div>
                                </div>
                            </div>
                            <h4>Left &amp; Right</h4>
                            <p>
                                <span class="image left"><img src={imagen02} alt="" /></span>
                                Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget.
                                tempus euismod. Magna et cursus lorem faucibus vestibulum. Blandit adipiscing eu
                                felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
                                praesent tincidunt felis sagittis eget. tempus euismod tempus. Vestibulum ante ipsum
                                primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                                adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis
                                sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
                                Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                                Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida lorem ipsum dolor
                                sit amet dolor feugiat consequat.
                            </p>
                            <p>
                                <span class="image right"><img src={imagen02} alt="" /></span>
                                Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget.
                                tempus euismod. Magna et cursus lorem faucibus vestibulum. Blandit adipiscing eu
                                felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque
                                praesent tincidunt felis sagittis eget. tempus euismod tempus. Vestibulum ante ipsum
                                primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                                adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis
                                sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
                                Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                                Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida lorem ipsum dolor
                                sit amet dolor feugiat consequat.
                            </p>
        </>
    )
}