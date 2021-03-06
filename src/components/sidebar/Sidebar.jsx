import './Sidebar.scss'
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
      <div className='sidebar'>
          <div className="sidebarWrapper">


              <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Dashboard</h3>
                  <ul className="sidebarList">
                      <li className="sidebarListItem">
                          <LineStyle/>
                          Home
                      </li>
                      <li className="sidebarListItem">
                          <Timeline/>
                          Analytics
                      </li>
                      <li className="sidebarListItem">
                          <TrendingUp/>
                          Sales
                      </li>
                  </ul>
              </div>

              <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Quick Menu</h3>
                  <ul className="sidebarList">
                      <li className="sidebarListItem">
                          <PermIdentity/>
                          Users
                      </li>
                      <li className="sidebarListItem">
                          <Storefront/>
                          Products
                      </li>
                      <li className="sidebarListItem">
                          <AttachMoney/>
                          Transactions
                      </li>
                      <li className="sidebarListItem">
                          <BarChart/>
                          Reports
                      </li>
                  </ul>
              </div>

              <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Notification</h3>
                  <ul className="sidebarList">
                      <li className="sidebarListItem">
                          <MailOutline/>
                          Mail
                      </li>
                      <li className="sidebarListItem">
                          <DynamicFeed/>
                          Feedback
                      </li>
                      <li className="sidebarListItem">
                          <ChatBubbleOutline/>
                          Messages
                      </li>
                  </ul>
              </div>

              <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Staff</h3>
                  <ul className="sidebarList">
                      <li className="sidebarListItem">
                          <WorkOutline/>
                          Manage
                      </li>
                      <li className="sidebarListItem">
                          <Timeline/>
                          Analytics
                      </li>
                      <li className="sidebarListItem">
                          <Report/>
                          Reports
                      </li>
                  </ul>
              </div>


          </div>
      </div>
  )
};

export default Sidebar;
