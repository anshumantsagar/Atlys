import ChatBubble from "../icons/chatBubble";
import Dots from "../icons/dots";

const Post = ({ isEdited = false }: { isEdited?: boolean }) => {
    return (
      <div className="flex flex-col bg-[#27292D] w-full max-w-[700px] px-6 py-5 border-2 border-[#35373B] rounded-md">
        <div className="flex items-center mb-5">
          <img
            className="h-11 w-11 object-cover rounded-full"
            src="https://s3-alpha-sig.figma.com/img/d876/9b85/25c869bf7a20b010741bad2949259c0d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HoE-raK0~jpV1hiebtklrbwwiwYAYERs-GibIr4INGRpUYw3OKbAIt1Em53BZO1wJelCpUP3BShIQt~pUWP50FJtIrUMBJMYpTTnarlg7h~Oxndlnpg7wWTWy8isQM92ZVHgY1kEpO3JY3Og7eIQH0eWX~nAHhaV7nzVu9T2ocGJPujd-VWQ6CqCpC5LSkaPXFkFJ4Ke1cup5Ni84st~z7-lCrate8O287~srliQT7ZyGLTBra0rF2Ejo6Aak2UtM2MfqQX36793R1MmwqiiVaqu6ivhCUXDVidLBnkIHprHFGS9xfhqlFPzUAvn2zKUODeB1fHgRwbM4FYqX5BRfQ__"
            alt='profile_picture'
          />
          <div className="ml-4">
            <p className="text-[#C5C7CA]">Theresa Webb</p>
            <p className="text-[#7F8084]">
              5mins ago {`${isEdited ? " • Edited" : ""}`}
            </p>
          </div>
          <div className="ml-auto">
            <Dots />
          </div>
        </div>
        <div className="max-w-[660px] py-[15px] bg-[#191920] pl-4 rounded-lg flex items-center mb-[14px]">
          <div className="flex items-center justify-center h-12 w-12 bg-[#27292D] rounded-full">
            <div className="w-[18px] h-[18px] leading-[18px]">👋</div>
          </div>
          <p className="text-[#7F8084] p-4 w-full max-w-[551px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="flex gap-2">
          <ChatBubble />
          <p className="text-[#7F8084]">24 comments</p>
        </div>
      </div>
    );
  };

  export default Post
