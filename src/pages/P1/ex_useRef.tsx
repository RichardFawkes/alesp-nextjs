import { useRef } from "react";

const exUseRef = () => {
  const inputRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(`Input value: ${inputRef.current.value}`);
      inputRef.current.value = "";
    } else if (event.keyCode === 8 || event.which === 8) {
      console.log("Backspace key pressed");
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} onKeyDown={handleKeyPress} />
    </div>
  );
};

export default exUseRef;
