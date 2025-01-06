import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export default function Cta() {
  const navigate = useNavigate();

  return (
    <div className="bg-cta w-full object-contain h-[700px]">
      <div className="flex flex-col gap-11 items-center justify-center h-full">
        <h1 className="text-5xl drop-shadow-xl font-medium">
          Start your journey with us!
        </h1>
        <Button onClick={() => navigate("/user-form")}>Start Form</Button>
      </div>
    </div>
  );
}
