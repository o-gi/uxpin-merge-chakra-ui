import {
  Editable as EditableC,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import { LegacyRef } from "react";
import { PropsBase } from "../../cores/types";

interface IProps extends PropsBase {
  /** @uxpinignoreprop */
  uxpinRef: LegacyRef<HTMLDivElement>;
  defaultValue: string;
  placeholder?: string;
  isDisabled?: boolean;
  /**
   * @uxpinpropname onCancel
   */
  onCancel?: () => void;
  /**
   * @uxpinpropname onChange
   */
  onChange?: () => void;
  /**
   * @uxpinpropname onEdit
   */
  onEdit?: () => void;
  /**
   * @uxpinpropname onSubmit
   */
  onSubmit?: () => void;
}

/**
 * @uxpindocurl https://v1.chakra-ui.com/docs/components/form/editable#usage
 *
 * @uxpinwrappers
 * SkipContainerWrapper
 */
export function Editable(props: IProps) {
  const { uxpinRef, defaultValue } = props;
  return (
    <EditableC {...props} ref={uxpinRef} defaultValue="Take some chakra">
      <EditablePreview />
      <EditableInput />
    </EditableC>
  );
}
