import { GuestProvider } from "./guests";
import { UserProvider } from "./user";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <GuestProvider>{children}</GuestProvider>
    </UserProvider>
  );
};

export default Providers;
