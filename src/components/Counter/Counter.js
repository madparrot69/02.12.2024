// import React, { useReducer } from "react";

// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return { count: 0 };
//     default:
//       throw new Error(`Unknown action: ${action.type}`);
//   }
// };

// const Counter = () => {
//   const [state, dispatch] = useReducer(counterReducer, { count: 0 });

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Лічильник: {state.count}</h2>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Скинути</button>
//     </div>
//   );
// };

// export default Counter;
