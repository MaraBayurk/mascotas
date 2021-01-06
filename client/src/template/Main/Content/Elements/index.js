import Actions from "./actions";
import Blockquote from "./blockquote";
import Buttons from "./buttons";
import Form from "./form";
import Icons from "./icons";
import Lists from "./lists";
import PerformatteCode from "./performattecode";
import Table from "./table";
import Text from "./text";
import Image from "./image";
import Box from "./box";

export default function(){

    return(
        <section>
                    <header>
                        <h1>Elements</h1>
                    </header>
                    <div class="row">
                        <div class="col-12">
                            <Text/>
                            <Lists/>
                            <Icons/>
                            <Actions/>
                            <Blockquote/>
                            <Table/>
                        </div>
                        <div class="col-12">
                            <Buttons/>
                            <Form/>
                            <Image/>
                            <Box/>
                            <PerformatteCode/>
                        </div>
                     </div>
        </section>
)
}