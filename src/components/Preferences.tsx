import { Button } from "./ui/button";

export default function Preferences() {
  return (
    <div className="flex flex-col text-center space-y-8 dark">
      <h1 className="font-bold text-3xl">Preferences</h1>
      <div className="space-x-4">
        <Button variant="outline">Email</Button>
        <Button variant={"outline"}>Phone</Button>
        <Button variant={"outline"}>SMS</Button>
      </div>
      <div className="flex flex-col gap-4">
        <Button className="max-w-md mx-auto w-full">Next</Button>
        <Button variant={"ghost"} className="w-fit mx-auto">
          Skip
        </Button>
      </div>
    </div>
  );
}
