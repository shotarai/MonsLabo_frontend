// import { useRef, useEffect, useState } from "react";

// const TestPage = () => {
//   const canvasRef = useRef(null); // キャンバスの参照を作成
//   const [isDrawing, setIsDrawing] = useState(false); // 描画中かどうかを管理するステート
//   const [context, setContext] = useState(null); // キャンバスのコンテキストを管理するステート

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     setContext(ctx); // コンポーネントがマウントされたときにキャンバスのコンテキストを設定
//   }, []);

//   const startDrawing = (event) => {
//     const { offsetX, offsetY } = event.nativeEvent;
//     context.beginPath(); // 描画を開始
//     context.moveTo(offsetX, offsetY); // 描画の開始位置を設定
//     setIsDrawing(true); // 描画中に設定
//   };

//   const draw = (event) => {
//     if (!isDrawing) return;
//     const { offsetX, offsetY } = event.nativeEvent;
//     context.lineTo(offsetX, offsetY); // 現在の位置から指定した位置まで線を引く
//     context.stroke(); // 描画を行う
//   };

//   const stopDrawing = () => {
//     context.closePath(); // 描画を終了
//     setIsDrawing(false); // 描画中を解除
//   };

//   const clearCanvas = () => {
//     context.clearRect(0, 0, context.canvas.width, context.canvas.height); // キャンバスの内容をクリア
//   };

//   return (
//     <div>
//       <canvas
//         ref={canvasRef}
//         onMouseDown={startDrawing}
//         onMouseMove={draw}
//         onMouseUp={stopDrawing}
//         onMouseLeave={stopDrawing}
//       />
//       <button onClick={clearCanvas}>クリア</button>
//     </div>
//   );
// };

// export default TestPage;

// import React, { useState } from 'react';

// const TestPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // フォームの送信処理などを実行する場合はここに追加します
//     console.log('名前:', name);
//     console.log('メールアドレス:', email);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">名前:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={handleNameChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="email">メールアドレス:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={handleEmailChange}
//         />
//       </div>
//       <button type="submit">送信</button>
//     </form>
//   );
// };

// export default TestPage;
