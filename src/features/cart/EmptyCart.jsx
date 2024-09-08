import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="h-[90dvh] flex flex-col items-center justify-center gap-7 bg-gray-100">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="font-semibold text-center text-gray-700">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
