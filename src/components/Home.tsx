import { useState } from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import LoginForm from "./Form";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => {
      return !prev;
    });
  };
  return (
    <div className="max-w-[700px] mb-10">
      <div className="flex flex-col w-full max-w-[580px] mb-10">
        <h2 className="text-[#C5C7CA] font-medium text-[28px] leading-[33.89px] mt-[69px] mb-3">
          Hello Jane
        </h2>
        <p className="text-[#7F8084]">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <CreatePost toggleModal={toggleModal} />
        <Post />
        <Post isEdited />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <LoginForm toggleModal={toggleModal} />;
        </div>
      )}
    </div>
  );
};

export default Home;
