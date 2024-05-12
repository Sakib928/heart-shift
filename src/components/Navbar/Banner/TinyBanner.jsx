import { Link } from "react-router-dom";

const TinyBanner = () => {
  return (
    <div className="p-6 lg:py-12 bg-[#00989E] text-white -mt-2 lg:-mt-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h2 className="text-center text-3xl md:text-5xl lg:text-6xl tracking-tighter font-bold">
              Who we are{" "}
              <span className="hidden md:inline">and what we do</span>
            </h2>
            <p className="text-center text-sm md:text-lg">
              We are an independent, not-for-profit, multi-stakeholder
              co-operative with open membership.
            </p>
          </div>

          <Link
            rel="noreferrer noopener"
            className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600 hover:bg-[#2BBFC3] font-bold"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TinyBanner;
