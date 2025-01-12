// App.ksxへどうぞ
// import { ColorfulMessage } from "./components/ColorfulMessage";
// import { useEffect, useState } from "react";

// export const App = () => {
//   const [num, setNum] = useState(0);
//   const [isShowFace, setIsShowFace] = useState(false);
//   const onClickButton = () => {
//     setNum((prev) => prev + 1);
//   };
//   const onClickToggle = () => {
//     setIsShowFace(!isShowFace);
//   };

//   useEffect(() => {
//     if (num > 0) {
//       if (num % 3 === 0) {
//         isShowFace || setIsShowFace(true);
//       } else {
//         isShowFace && setIsShowFace(false);
//       }
//     }
//   }, [num]);

//   return (
//     <>
//       <h1 style={{ color: "red" }}>こんにちは</h1>
//       <ColorfulMessage color="green" message="お元気ですわ" />
//       <button onClick={onClickButton}>カウントあっぷ</button>
//       <p>{num}</p>
//       <button onClick={onClickToggle}>on/off</button>
//       {isShowFace && <p>(^^)</p>}
//     </>
//   );
// };

//componentへ
// export const ColorfulMessage = (props) => {
//     const { color, message } = props;
//     const contentStyle = {
//       color,
//       fontSize: "18px",
//     };

//     return <p style={contentStyle}>{message}</p>;
//   };
