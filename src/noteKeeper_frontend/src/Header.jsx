import { red } from "@material-ui/core/colors";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header style={{backgroundColor: '#00a6ff', padding: '5px 15px'}}>
      <h1 >
        <HighlightIcon />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
