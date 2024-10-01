import { FaMoneyBill, FaCameraRetro, FaBook, FaHandHoldingHeart } from "react-icons/fa";

const Feature = () => {
  return (
    <section className="border-b border-border py-10 px-2.5">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between text-xl font-medium gap-6">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
          <FaMoneyBill className="text-primary w-12 h-12" />
          <h5>Ultimate flexibility</h5>
        </div>

        <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
          <FaCameraRetro className="text-primary w-12 h-12" />
          <h5>Memorable experiences</h5>
        </div>

        <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
          <FaBook className="text-primary w-12 h-12" />
          <h5>Quality at our core</h5>
        </div>

        <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
          <FaHandHoldingHeart className="text-primary w-12 h-12" />
          <h5>Award-winning support</h5>
        </div>
      </div>
    </section>
  );
};

export default Feature;