import { Avatar as AvatarC, AvatarBadge, ThemeTypings } from "@chakra-ui/react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  src?: string;
  name?: string;
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  /**
   * @uxpinpropname Badge
   */
  isBadge: boolean;
  /**
   * @uxpinpropname -bg
   */
  badgeBg?: ThemeTypings["colors"];
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/media-and-icons/avatar#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Avatar(props: IProps) {
  const { isBadge = false, badgeBg } = props;

  if (isBadge)
    return (
      <AvatarC {...props}>
        <AvatarBadge boxSize="1.25em" bg={badgeBg} />
      </AvatarC>
    );

  return <AvatarC {...props} />;
}
