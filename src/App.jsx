import { useState } from "react";

function App() {
  const [count, setCount] = useState({ initialNumber: "", sum: 0 });

  function addTwoNumbers() {
    let numbers = count.initialNumber.trim();
    let sumToHandleDynamicDelimiter = 0;
    let concetationOfNegativeNumbers = "";
    let resultOfAddedNumbers = 0;

    if (numbers[0] === "/" && numbers[1] === "/") {
      numbers = numbers.substring(2, numbers.length);
      const updatedStringToHandleSpecialDelimiter = numbers.split(numbers[0]);
      for (
        let i = 1;
        i < updatedStringToHandleSpecialDelimiter.length;
        i = i + 1
      ) {
        if (updatedStringToHandleSpecialDelimiter[i] < 0) {
          concetationOfNegativeNumbers =
            concetationOfNegativeNumbers +
            " , " +
            updatedStringToHandleSpecialDelimiter[i];
        }
        sumToHandleDynamicDelimiter =
          sumToHandleDynamicDelimiter +
          Number(updatedStringToHandleSpecialDelimiter[i]);
      }
    }

    if (!numbers.length) {
      resultOfAddedNumbers = 0;
    } else {
      const newArrayAfterRemovingLineSpaces = numbers.split("\n");
      const updatedArray = newArrayAfterRemovingLineSpaces.map(
        (element, index) => {
          return element.split(",");
        }
      );
      const flattenedArray = updatedArray.flat();

      flattenedArray.forEach((element, index) => {
        if (element < 0 && numbers[0] !== "/" && numbers[1] !== "/") {
          concetationOfNegativeNumbers =
            concetationOfNegativeNumbers + " , " + element;
        }

        resultOfAddedNumbers = resultOfAddedNumbers + Number(element);
      });

      setCount({ initialNumber: "", sum: resultOfAddedNumbers });
      if (concetationOfNegativeNumbers.length) {
        alert(`negative numbers not allowed ${concetationOfNegativeNumbers}`);
        setCount({ initialNumber: "", sum: 0 });
      }
      if (sumToHandleDynamicDelimiter > 0) {
        setCount({ initialNumber: "", sum: sumToHandleDynamicDelimiter });
      }
    }
  }

  function takeUserInput(e) {
    setCount({
      ...count,
      initialNumber: e.target.value,
    });
  }

  return (
    <div className="calculator-container">
      <div>
        <h3>STRING CALCULATOR</h3>
        <label>
          ENTER NUMBERS
          <textarea
            className="input-text"
            type="text"
            onChange={takeUserInput}
            value={count.initialNumber}
          />
          <button className="add-button" onClick={addTwoNumbers}>
            ADD{" "}
          </button>
        </label>
      </div>
      <div>
        {count.sum ? (
          <p>Sum of above numbers is {count.sum}</p>
        ) : (
          <span>Sum of two numbers is 0</span>
        )}
      </div>
    </div>
  );
}

export default App;
