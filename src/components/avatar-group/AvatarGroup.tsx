import { AvatarGroup as AvatarGroupC } from "@chakra-ui/react";
import { LegacyRef, ReactNode } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  /** @uxpinignoreprop */
  children: ReactNode;
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  max?: number;
}

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 *
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/media-and-icons/avatar#avatargroup
 */
export const AvatarGroup = (props: IProps) => {
  const { uxpinRef, children, size, max } = props;
  return (
    <AvatarGroupC {...props} ref={uxpinRef} size={size} max={max}>
      {children}
    </AvatarGroupC>
  );
};
