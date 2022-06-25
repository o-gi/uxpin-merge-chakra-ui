import { FormHelperText } from "../../form-helper-text/FormHelperText";
import { FormLabel } from "../../form-label/FormLabel";
import { Input } from "../../input/Input";
import { FormControl } from "../FormControl";

export default (
  <FormControl uxpId="FormControl">
    <FormLabel uxpId="FormControlChild-1" htmlFor="email">
      Email address
    </FormLabel>
    <Input
      uxpId="FormControlChild-2"
      id="email"
      type="email"
      placeholder="email address"
    />
    <FormHelperText uxpId="FormControlChild-3">
      We'll never share your email.
    </FormHelperText>
  </FormControl>
);
