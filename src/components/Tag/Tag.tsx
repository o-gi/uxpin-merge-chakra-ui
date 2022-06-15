import { Tag as TagC, TagLeftIcon, TagRightIcon } from "@chakra-ui/react";

import { IconSelector } from "../../IconSelector";

interface IProps {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLSpanElement>;
  /**
   * @uxpinpropname Label
   * @uxpincontroltype input
   */
  children: ReactNode;
  colorScheme?: ThemeTypings["colorSchemes"];
  size?: ThemeTypings["components"]["Tag"]["sizes"];
  variant?: ThemeTypings["components"]["Tag"]["variants"];
  iconLeft?: IconName;
  iconRight?: IconName;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/data-display/tag#usage
 */
export function Tag(props: IProps) {
  const {
    uxpinRef,
    children,
    colorScheme,
    size,
    variant,
    iconLeft,
    iconRight,
  } = props;

  return (
    <TagC
      ref={uxpinRef}
      size={size}
      key={size}
      variant={variant}
      colorScheme={colorScheme}
    >
      {iconLeft && <TagLeftIcon boxSize="12px" as={IconSelector(iconLeft)} />}
      {children}
      {iconRight && (
        <TagRightIcon boxSize="12px" as={IconSelector(iconRight)} />
      )}
    </TagC>
  );
}
