import { Image as ImageC } from "@chakra-ui/react";
import { ObjectFit, ObjectPosition, PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  src: string;
  alt?: string;
  boxSize?: string;
  fit?: ObjectFit;
  align?: ObjectPosition;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/layout/Image#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Image(props: IProps) {
  const { src, alt, boxSize, fit, align } = props;
  return (
    <ImageC
      {...props}
      src={src}
      alt={alt}
      boxSize={boxSize}
      fit={fit}
      align={align}
    />
  );
}
