import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../app/redux/store";
import { setSearch } from "../../../app/redux/Slices/search.slice";

const Search = () => {
  const dispatch: AppDispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setSearch(inputValue));
    }, 300);

    return () => {
      clearTimeout(handler); 
    };
  }, [inputValue, dispatch]);

  return (
    <input
      onChange={(e) => setInputValue(e.target.value)} 
      type="text"
      placeholder="Поиск..."
      className="text-[#494D58] placeholder:text-[#494D58] w-full h-[50px] bg-blue-medium text-[12px] pl-[15px] rounded-[12px] outline-none"
    />
  );
};

export default Search;
