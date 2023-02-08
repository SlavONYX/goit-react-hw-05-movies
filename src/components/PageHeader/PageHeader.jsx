//Style
import { Header, Link } from './PageHeader.styled';

const PageHeader = () => {
  return (
    <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Header>
  );
};

export default PageHeader;