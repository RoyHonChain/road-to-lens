import { useQuery, useMutation } from "@apollo/client";
import getProfileByHandle from "../../queries/getProfileByHandle";
import Profile from "../../components/Profile.js";
import Post from "../../components/Post.js";

export default function MyProfilePage() {
  
    const { loading, error, data } = useQuery(getProfileByHandle);
  
    if (loading) return "Loading..";
    if (error) return `Error! ${error.message}`;
    
    
    return (
      <div className="flex flex-col p-8 items-center">
        <Profile profile={data.profile} displayFullProfile={true} />
      </div>
    );
  }