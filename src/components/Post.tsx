import { Post as IPost } from "../Types/Post";
import ChatBubble from "../icons/chatBubble";
import Dots from "../icons/dots";

const Post = ({
  content,
  emoji,
  isEdited,
  numberOfComments,
  profile,
  time,
  username,
}: IPost) => {
  return (
    <div className="flex flex-col bg-[#27292D] w-full max-w-[700px] px-6 py-5 border-2 border-[#35373B] rounded-md">
      <div className="flex items-center mb-5">
        <img
          className="h-11 w-11 object-cover rounded-full"
          src={profile}
          alt="profile_picture"
        />
        <div className="ml-4">
          <p className="text-[#C5C7CA]">{username}</p>
          <p className="text-[#7F8084]">
            {time} {`${isEdited ? " • Edited" : ""}`}
          </p>
        </div>
        <div className="ml-auto">
          <Dots />
        </div>
      </div>
      <div className="max-w-[660px] py-[15px] bg-[#191920] pl-4 rounded-lg flex items-center mb-[14px]">
        <div className="flex items-center justify-center h-12 w-12 bg-[#27292D] rounded-full">
          <div className="w-[18px] h-[18px] leading-[18px]">{emoji}</div>
        </div>
        <p className="text-[#7F8084] p-4 w-full max-w-[551px]">{content}</p>
      </div>
      <div className="flex gap-2">
        <ChatBubble />
        <p className="text-[#7F8084]">{numberOfComments} comments</p>
      </div>
    </div>
  );
};

export default Post;
