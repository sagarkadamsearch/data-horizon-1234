import { Link } from "react-router-dom";
import styled from "styled-components"

export const Navbar = () => {

    return (
        <NAV>
           <div>Logo</div>
           <div>
              <Link to={"/"}>Home</Link>
              <Link to={"/dashboard"}>Dashboard</Link>
              <Link to={"/login"}>Login</Link>
           </div>
        </NAV>
    )
}

const NAV = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
`