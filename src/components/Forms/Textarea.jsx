export const Textarea = ({label, value, name = '', placeholder = '', handleChange}) => {
  return (
    <label className="flex flex-col p-4 border border-neutral-500 text-neutral-200 gap-2">
        <span className="text-sm font-medium text-neutral-600">{label}</span>
        <textarea
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
            className="border-0 bg-transparent outline-none appearance-none"
            value={value}
        />
    </label>
  )
}
