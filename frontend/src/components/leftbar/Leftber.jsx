import { AutoAwesome, Explore, Home, PhotoAlbum, ThumbUp } from "@mui/icons-material";
import "./leftber.css";

export default function Leftber() {
  return (
    <div className="leftber">
      <div className="leftberWrapper">
        <ul className="leftberLisr">
          <li className="leftberItem">
            <Home className="leftberIcom" />
            <span className="leftberListItemText">หน้าแรก</span>
          </li>
          <li className="leftberItem">
            <PhotoAlbum className="leftberIcom" />
            <span className="leftberListItemText">My Feed</span>
          </li>
          <li className="leftberItem">
            <ThumbUp className="leftberIcom" />
            <span className="leftberListItemText">Pantip Pick</span>
          </li>
          <li className="leftberItem">
            <AutoAwesome className="leftberIcom" />
            <span className="leftberListItemText">Pantip Hitz</span>
          </li>
          <li className="leftberItem">
            <Explore className="leftberIcom" />
            <span className="leftberListItemText">Explore</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
