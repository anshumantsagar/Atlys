import Message from "../icons/message";

const CreatePost = ({ toggleModal }: { toggleModal: () => void }) => {
    return (
      <div className="flex flex-col bg-[#27292D] w-full max-w-[700px] px-6 py-5 border-2 border-[#35373B] rounded-md">
        <h3 className="text-[#C5C7CA] text-lg font-medium leading-[21.78px] mb-4">
          Create post
        </h3>
        <div className="max-w-[660px] py-[15px] bg-[#191920] pl-4 rounded-lg flex items-center ">
          <div className="w-12 h-12">
            <Message />
          </div>
          <p className="text-[#7F8084] p-4">How are you feeling today?</p>
        </div>
        <button onClick={() => {
          return toggleModal()
        }}  className="w-[111px] rounded ml-auto text-[#ffffff] text-base font-medium leading-[19.36px] bg-[#4A96FF] h-[43px] mt-[20px]">
          Login now
        </button>
      </div>
    );
  };

  export default CreatePost
