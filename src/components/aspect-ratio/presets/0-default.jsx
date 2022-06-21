import { Image } from "../../image";
import { AspectRatio } from "../AspectRatio";

export default (
  <AspectRatio uxpId="AspectRatio" maxW="400px" ratio="4/3">
    <Image
      uxpId="AspectRatioChild"
      src="https://source.unsplash.com/random"
      alt="image alt"
      objectFit="cover"
    />
  </AspectRatio>
);
