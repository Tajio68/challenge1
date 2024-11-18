import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-72 w-72 bg-slate-200">
        <h2 className="text-center">Account</h2>
        {children}
      </div>
    </div>
  );
};

export default layout;
