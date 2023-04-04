import { BsBusFront, BsFillPinFill, BsClockFill } from "react-icons/bs";
const BusDetailsCard = ({ bus }) => {
  return (
    <div className="max-w-xl bg-white dark:bg-gray-900 dark:text-white shadow-lg rounded-lg overflow-hidden m-5">
      <img className="w-full h-48 object-cover" src={bus.image} alt="bus" />
      <div className="py-4 px-6">
        <div className="flex items-center mb-2">
          <BsBusFront className="mr-2 text-xl" />
          <span className="text-gray-700 dark:text-white text-2xl font-bold">
            {bus.englishName}
          </span>
        </div>
        <p className="text-gray-700 dark:text-white text-lg mb-2">
          {bus.banglaName}
        </p>
        <div className="flex items-center text-lg">
          <BsFillPinFill className="mr-2" />
          <span className="font-bold">Route</span>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-gray-700 dark:text-white text-base">
            {bus.routes.join(" > ")}
          </span>
        </div>
        {bus?.time && (
          <div className="flex items-center mb-2">
            <BsClockFill className="mr-2" />
            <span className="font-bold mr-2">Service Time: </span>
            <span className="text-gray-700 dark:text-white text-base font-bold">
              {bus?.time}
            </span>
          </div>
        )}

        <div className="flex items-center">
          <span className="text-gray-700 text-base dark:text-white">
            {bus?.service_type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BusDetailsCard;
