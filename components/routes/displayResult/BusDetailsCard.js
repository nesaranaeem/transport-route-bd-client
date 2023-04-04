import { BsBusFront } from "react-icons/bs";
const BusDetailsCard = ({ bus }) => {
  return (
    <div className="max-w-xl bg-white shadow-lg rounded-lg overflow-hidden m-5">
      <img className="w-full h-48 object-cover" src={bus.image} alt="bus" />
      <div className="py-4 px-6">
        <div className="flex items-center mb-2">
          <BsBusFront className="mr-2 text-xl" />
          <span className="text-gray-700 text-2xl font-bold">
            {bus.englishName}
          </span>
        </div>
        <p className="text-gray-700 text-lg mb-2 text-center">
          {bus.banglaName}
        </p>
        <div className="flex items-center mb-2">
          <p className="mr-2" />
          <span className="text-gray-700 font-bold text-base">
            {bus.routes.join(" > ")}
          </span>
        </div>
        <div className="flex items-center mb-2">
          <p className="mr-2" />
          <span className="text-gray-700 text-base">{bus?.time}</span>
        </div>
        <div className="flex items-center">
          <p className="mr-2" />
          <span className="text-gray-700 text-base">{bus?.service_type}</span>
        </div>
      </div>
    </div>
  );
};

export default BusDetailsCard;
