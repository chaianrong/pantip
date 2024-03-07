import "./topber.css";
import { PostAdd, Groups, Search } from "@mui/icons-material";

export default function Topber() {
  return (
    <div className="topberconponents">
      <div className="topberLeft">
        <div className="dropdowns">
          <img className="dropdown" src="images/dropdown.png" alt="" />
        </div>
      </div>

      <div class="topberCenter">
        <div class="searchber">
          <Search className="searvhIcon" />
          <input
            placeholder="ค้นหา"
            className="searchImport"
          ></input>
        </div>
      </div>

      <div className="topberRight">
        <ul className="topberRightList">
          <div className="topberRightListconponents">
            <li className="topberRightItem">
              <PostAdd className="sidebarIcom" />
              <span className="topberRightItemText">ตั้งกระทู้</span>
            </li>
          </div>
          <div className="topberRightListconponents">
            <li className="topberRightItem">
              <Groups className="sidebarIcom" />
              <span className="topberRightItemText">คอมมูนิตี้</span>
            </li>
          </div>
          <div className="topberRightListconponents">
            <li className="topberRightItem">
              <span className="topberRightItemText">
                เข้าสู่ระบบ/สมัครสมาชิก
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
