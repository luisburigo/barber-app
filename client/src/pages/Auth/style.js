import styled from "styled-components";
import {purple} from "@material-ui/core/colors"

const AuthContainer = styled.div`
      height: 100vh;       
      display: flex;
      justify-content: center;
      align-items: center;
`;

const AuthLogo = styled.div`
      height: 200px;
      background-color: ${purple["900"]};
      margin: 0;
      border-radius: 3px;
`;

export {AuthContainer, AuthLogo}
