import { ReactNode } from "react";

const layout = ({
  children,
  admin,
  info,
}: {
  children: ReactNode;
  admin: ReactNode;
  info: ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center bg-green-300">
      {children}
      {admin}
      {info}
    </div>
  );
};

export default layout;
