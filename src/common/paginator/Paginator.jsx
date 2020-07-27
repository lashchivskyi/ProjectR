import React from "react";
import classes from "./Paginator.module.css";

const Paginator = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) pages.push(i);

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            key={p}
            className={props.currentPage === p ? classes.selectedPage : ""}
            onClick={(e) => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};
export default Paginator;

// import React, { useState } from "react";
// import classes from "./Paginator.module.css";

// const Paginator = (props) => {
//   let pageCount = Math.ceil(props.totalItemsCount / props.pageSize);

//   let pages = [];
//   for (let i = 1; i <= pageCount; i++) pages.push(i);

//   let portionCount = Math.ceil(props.pageSize / props.portionSize);
//   const [portionNumber, setportionNumber] = useState(1);
//   let leftPortioPage = (portionNumber - 1) * props.portionSize + 1;
//   let rightPortioPage = portionNumber * props.portionSize;

//   return (
//     <div className={classes.paginator}>
//       {portionNumber > 1 && (
//         <button onClick={setportionNumber(portionNumber - 1)}>Back</button>
//       )}
//       {pages
//         .filter((p) => p >= leftPortioPage && p <= rightPortioPage)
//         .map((p) => {
//           return (
//             <span
//               key={p}
//               className={props.currentPage === p ? classes.selectedPage : ""}
//               onClick={(e) => {
//                 props.onPageChanged(p);
//               }}
//             >
//               {p}
//             </span>
//           );
//         })}
//       {portionCount > portionNumber && (
//         <button onClick={setportionNumber(portionNumber + 1)}>Next</button>
//       )}
//     </div>
//   );
// };
// export default Paginator;
