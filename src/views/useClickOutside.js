import { useEffect } from "react";

export const useClickOutside = (ref , callBackFn)=>{
    useEffect(() => {
        function handleOutsideClick(event){
            if(ref?.current && !ref.current.contains(event.target)){
                callBackFn();
            }
        }
        document.addEventListener("mousedown", handleOutsideClick);
        return ()=>{
            document.removeEventListener("mousedown",handleOutsideClick)
        }
    }, []);
}