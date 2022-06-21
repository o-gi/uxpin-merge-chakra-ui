import { AspectRatio as AspectRatioC } from "@chakra-ui/react";
import React, { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends Omit<PropsBase, "w" | "h"> {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  maxW?: string;
  /**
   * @uxpindescription The aspect ratio of the Box. Common values are: `21/9`, `16/9`, `9/16`, `4/3`, `1.85/1`
   **/
  ratio: "21/9" | "16/9" | "9/16" | "4/3" | "1.85/1" | "1";
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/layout/aspect-ratio#embed-video
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function AspectRatio(props: IProps) {
  const { uxpinRef, children, ratio } = props;

  const getCalculatedRatio = React.useCallback(() => {
    if (ratio === "21/9") return 2.33333333333;
    if (ratio === "16/9") return 1.77777777778;
    if (ratio === "9/16") return 0.5625;
    if (ratio === "4/3") return 1.33333333333;
    if (ratio === "1.85/1") return 1.85;
    if (ratio === "1") return 1;
    return 1;
  }, [ratio]);

  return (
    <AspectRatioC {...props} ref={uxpinRef} ratio={getCalculatedRatio()}>
      {children}
    </AspectRatioC>
  );
}
