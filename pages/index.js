import { useQuery } from "@apollo/client";
import MyProfilePage from './profile/myProfile.js'

export default function Home() {
  return (
    <div>
      <MyProfilePage></MyProfilePage>
    </div>
  )
}