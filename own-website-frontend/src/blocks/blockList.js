import CallToAction from "./CallToAction";
import Hero from "./Hero";
import SimpleRichText from "./SimpleRichText";
import TwoColumn from "./TwoColumn";

//here we map the slugs of the backend blokcs to the frontend blocks
export const blocks = {
    Hero: Hero, //since this is the name of the slug given to it
    twoColumn: TwoColumn,
    simpleRichText: SimpleRichText,
    callToAction: CallToAction,
}