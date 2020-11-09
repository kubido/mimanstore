import { useEffect } from 'react'

export const useClickOutsideListener = (node, { insideClick, outsideClick }) => {


  useEffect(() => {
    const handleClick = e => {
      let clickInside = node.current.contains(e.target)
      try {
        if (clickInside) return insideClick()
        outsideClick()
      } catch (error) {
        // console.warn(error);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [insideClick, outsideClick, node])


}