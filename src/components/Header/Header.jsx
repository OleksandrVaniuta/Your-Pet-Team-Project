import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';

export const Header = () => {
  const isLogedIn = true;

  return (
    <header>
      <Navigation />
      {isLogedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
