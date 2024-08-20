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
      className="text-white placeholder:text-white w-full h-[30px] bg-blue-medium text-[12px] pl-[15px] rounded-[4px] outline-none mb-[20px]"
    />
  );
};

export default Search;
