export const Input = (props) => {
  return (
      <div className="p-2 space-y-1">
          <input 
            type="text"
            name="Email"
            id="Email"
            className="
              w-full
              px-3 
              py-3 
              bg-slate-500 border 
              focus:ring-2  focus:outline-none 
              focus:border-blue-600 
              border-slate-700 
              rounded-xl 
              text-sm 
              text-white 
              transition duration-500 ease-in-out
            "
            placeholder={props.placeholder}
            />
      </div>
  );
}