import { useNavigate } from "react-router-dom";


const SelectModePage = () => {
  
  const navigate = useNavigate();
  const handleCreateMonster = () => {
    // モンスターを作成ボタンがクリックされた時の処理
    navigate("/selectMake");
  };

  const handleTalkToMonster = () => {
    // モンスターと会話ボタンがクリックされた時の処理
    navigate("/selectMonster");
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-8">モンスターゲーム</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={handleCreateMonster}
      >
        モンスターを作成
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleTalkToMonster}
      >
        モンスターと会話
      </button>
    </div>
  );
};

export default SelectModePage