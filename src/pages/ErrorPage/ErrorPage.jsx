import Lottie from "lottie-react";
import errorAnimation from "../../assets/images/404.json";
const ErrorPage = () => {
  return (
    <div>
      <Lottie
        animationData={errorAnimation}
        className="h-[100vh] w-[100vw] mx-auto bg-transparent"
      ></Lottie>
    </div>
  );
};

export default ErrorPage;
