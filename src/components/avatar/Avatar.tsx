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
 * @uxpinwrappers
 * SkipContainerWrapper
 *
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/media-and-icons/avatar#usage
 */
export function Avatar(props: IProps) {
  const { src, name, size, isBadge = false, badgeBg } = props;

  if (isBadge)
    return (
      <AvatarC {...props} src={src} name={name} size={size}>
        <AvatarBadge boxSize="1.25em" bg={badgeBg} />
      </AvatarC>
    );

  return <AvatarC {...props} src={src} name={name} size={size} />;
}
