import { useAtom } from "jotai";
import { TwitterPicker } from "react-color";
import { shoeColorAtom } from "../utils/atom";

export default function ColorPicker() {
  const [shoeColor, setShoeColor] = useAtom(shoeColorAtom);

  const handleChangeComplete = (color) => {
    setShoeColor(color.hex);
  };

  return (
    <div className="colorpicker-container">
      <TwitterPicker
        color={shoeColor}
        onChangeComplete={handleChangeComplete}
      />
    </div>
  );
}
