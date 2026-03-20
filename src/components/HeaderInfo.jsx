import { useContext } from "react";
import UserContext from "../context/UserContext";

function HeaderInfo() {
    const user  = useContext(UserContext);
    return (
        <div className="header-info">
            <span>Welcome, {user.name}</span>
        </div>
    );
}

export default HeaderInfo;