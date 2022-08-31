export const Input = (props) => {
  return (
      <div className="p-2 space-y-1">
          <input 
            type={props.type}
            name="Email"
            id={props.id}
            className="
              w-full
              px-3 
              py-3 
              bg-slate-500 
              border 
              focus:ring-2  
              focus:outline-none 
              focus:border-blue-600 
              border-slate-700
              hover:border-blue-600
              rounded-xl 
              text-sm 
              text-white 
              transition duration-300 ease-in-out
            "
            placeholder={props.placeholder}
            />
      </div>
  );
}