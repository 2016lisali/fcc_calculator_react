import Key from "./Key"
const Keyboard = ({ handleInput }) => {
  const calcData = [
    { id: "clear", value: "AC", classname: "clear-operator" },
    { id: "divide", value: "/", classname: "operator" },
    { id: "multiply", value: "x", classname: "operator" },
    { id: "seven", value: 7, classname: "number" },
    { id: "eight", value: 8, classname: "number" },
    { id: "nine", value: 9, classname: "number" },
    { id: "subtract", value: "-", classname: "operator" },
    { id: "four", value: 4, classname: "number" },
    { id: "five", value: 5, classname: "number" },
    { id: "six", value: 6, classname: "number" },
    { id: "add", value: "+", classname: "operator" },
    { id: "one", value: 1, classname: "number" },
    { id: "two", value: 2, classname: "number" },
    { id: "three", value: 3, classname: "number" },
    { id: "equals", value: "=", classname: "equal-operator" },
    { id: "zero", value: 0, classname: "number" },
    { id: "decimal", value: ".", classname: "number" },
  ];
  return (
    <div className="keys">
      {calcData.map((key) => (
        <Key className={key.classname} key={key.id} keyData={key} handleInput={handleInput} />
      ))}
    </div>
  )
};

export default Keyboard;