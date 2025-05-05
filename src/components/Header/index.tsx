import { NavLink } from "react-router";
import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";
import reactLogo from '../../assets/react-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={reactLogo} alt="" />
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
