import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
function AppLaayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(navigation);

  return (
    <div
      className="grid h-screen 
      grid-rows-[auto_1fr_auto]"
    >
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">
        <main className=" max-w-3xl mx-auto ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLaayout;
