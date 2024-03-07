import Feedber from "../components/feed/Feedber"
import Leftber from "../components/leftbar/Leftber"
import Topber from "../components/topber/Topber"
import "./home.css"

export default function Home() {
  return (
    <>
      <Topber/>
      <div className="homComtainer">
       <Leftber/>
      <Feedber/>
      </div>
    </>
  )
}

