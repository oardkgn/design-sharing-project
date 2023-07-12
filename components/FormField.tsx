import React from "react";

type Props = {
  type?: string;
  title: string;
  state: string;
  placeholder: string;
  isTextArea?: boolean;
  setState: (value: string) => void;
};

function FormField({
  type,
  title,
  state,
  placeholder,
  isTextArea,
  setState,
}: Props) {
  return (
    <div className="flexStart flex-col w-full gap-4">
      <label className="w-full pl-2">{title}</label>

      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          value={state}
          className="w-full outline-none px-4 py-2 bg-violet-50 rounded-lg"
          onChange={(e) => setState(e.target.value)}
        />
      ) : (
        <input
          type={type || "text"}
          placeholder={placeholder}
          required
          value={state}
          className="w-full outline-none px-4 py-2 bg-violet-50 rounded-lg"
          onChange={(e) => setState(e.target.value)}
        />
      )}
    </div>
  );
}

export default FormField;
