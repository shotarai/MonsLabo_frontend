import { useNavigate } from "react-router-dom";



const SelectMonsterPage = () => {

  const navigate = useNavigate();
  const handleToTalk = () => {
    // モンスターを作成ボタンがクリックされた時の処理
    navigate("/talk");
  };

  const handleToSelectMode = () => {
    // モンスターと会話ボタンがクリックされた時の処理
    navigate("/selectMode");
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-4xl mb-8">モンスターを選んでください</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={handleToTalk}
      >
        このモンスターで遊ぶ
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleToSelectMode}
      >
        戻る
      </button>
    </div>
  );
};

export default SelectMonsterPage;
