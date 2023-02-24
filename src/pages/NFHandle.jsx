import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Pages.css";

function NFHandle() {
  return (
    <div className="nfhandle">
      <h1 className="nfhandle__number">404</h1>
      <h2 className="nfhandle__text">Page Not Found</h2>
      <div className="button__container">
        <Link to="/">
          <Button className="nfhandle__button" variant="outlined">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NFHandle;
