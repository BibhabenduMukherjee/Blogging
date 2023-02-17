import { CodeInput } from '@sanity/code-input';

const CustomField = React.forwardRef((props, ref) => {
  const { type, value, onChange } = props;
  
  return (
    <CodeInput
      language={type.options.language}  // Pass the language from the field options
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
});

export default CustomField;