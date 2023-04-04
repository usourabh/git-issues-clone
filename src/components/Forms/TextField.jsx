export const TextField = ({
  label,
  type = 'text',
  placeholder = '',
  name = '',
  value,
  handleChange,
}) => {
  return (
    <label className="flex flex-col p-4 border border-neutral-500 text-neutral-200 gap-2">
      <span className="text-sm font-medium text-neutral-600">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        className="border-0 bg-transparent outline-none appearance-none"
      />
    </label>
  );
};
