import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MakePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "image/png") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedFile(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleHobbyChange = (event) => {
    setHobby(event.target.value);
  };
  
  const handleModalOpen = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    navigate("/talk", { state: { selectedFile } });
  };

  // const [isLoading, setIsLoading] = useState(false);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   setIsLoading(true);

  //   try {
  //     // Firestoreへの格納の処理を実行する

  //     // 格納が完了したら以下のコードを実行する
  //     // navigate("/talk", { state: { selectedFile } });
  //   } catch (error) {
  //     console.error("Firestoreへの格納中にエラーが発生しました。", error);
  //   }

  //   setIsLoading(false);
  // };



  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <form onSubmit={handleModalOpen}>
          <h1 className="text-center text-2xl mb-4">
            キャラの情報を登録してください。
          </h1>
          <div className="flex items-center">
            <div className="">
              <div className="flex justify-center">
                <div className="mb-4 bg-slate-400">
                  <label htmlFor="file" className="block">
                    Select Image (PNG only):
                  </label>
                  <input
                    type="file"
                    id="file"
                    accept="image/png"
                    onChange={handleFileSelect}
                    className="w-full"
                  />
                </div>
              </div>
              {selectedFile && (
                <div className="border-4">
                  <img
                    src={selectedFile}
                    alt="Selected"
                    className="max-w-full"
                  />
                </div>
              )}
            </div>
            <div className="">
              <div className="mb-4">
                <label htmlFor="name" className="block">
                  名前
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full border border-gray-300 rounded px-2 py-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block">
                  性別
                </label>
                <input
                  type="text"
                  id="gender"
                  value={gender}
                  onChange={handleGenderChange}
                  className="w-full border border-gray-300 rounded px-2 py-1"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="hobby" className="block">
                  趣味
                </label>
                <input
                  type="text"
                  id="hobby"
                  value={hobby}
                  onChange={handleHobbyChange}
                  className="w-full border border-gray-300 rounded px-2 py-1"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded py-2"
          >
            登録
          </button>
        </form>
        {showModal && (
          <div className="bg-gray-600 bg-opacity-50 fixed top-0 left-0 w-full h-screen flex justify-center items-center">
            <div className="bg-white p-4 rounded">
              <h3 className="text-xl mb-2">Confirmation Dialog</h3>
              <p>このキャラクターを登録しますか？</p>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleModalClose}
                  className="mr-2 bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRegister}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  OK!
                </button>
              </div>
            </div>
            {/* <div
              className=" absolute top-0 left-0 w-full h-screen"
              onClick={handleModalClose}
            /> */}
          </div>
        )}
      </div>
    </>
  );
};

export default MakePage;
