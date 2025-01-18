export default function Input({ title, id, onChange }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{title}</label>
      <input
        id={id}
        type="text"
        onChange={onChange}
        className="border border-[#118DC0] px-4 py-2 rounded outline-none"
      />
    </div>
  );
}
