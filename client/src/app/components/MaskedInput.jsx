import ReactInputMask from 'react-input-mask';
import { FormInput } from 'utils/Sprites';

const MaskedInput = (props, ref) => {
  return (
    <ReactInputMask {...props}>
      {inputProps => (
        <FormInput
          size="large"
          required
          {...inputProps}
          ref={ref}
          disabled={props.disabled ? props.disabled : null}
        />
      )}
    </ReactInputMask>
  );
};

export default MaskedInput;
