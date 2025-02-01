const TextInput = ({
  type,
  name,
  lable,
  placeholder,
  value,
  isReadOnly,
  handleChange,
}) => {
  return (
    <div className="flex flex-col font-clash-light capitalize gap-1 ">
      <label htmlFor="inputbox">
        {lable}
        <p className="text-red-500  inline-block ">*</p>
      </label>
      <input
        onChange={handleChange}
        name={name}
        type={type}
        id="inputbox"
        value={value}
        placeholder={placeholder}
        readOnly={isReadOnly}
        className="max-w-[364px] bg-slate-100 text-gray rounded-full px-4 py-3 outline-none"
      />
    </div>
  );
};

export default TextInput;
