import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [src, setSrc] = useState("");
  useEffect(() => {
    setSrc(
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://qr-code-menu-system-backend.onrender.com/menu"
    );
  }, [src]);

  return (
    <div className="flex flex-col justify-center items-center gap-[3rem] p-2">
      <h1 className="font-bold text-5xl font-serif">QR SYSTEM MENU</h1>
      <h2 className="text-red-500 font-semibold text-2xl">
        Scan the QR to view the Menu
      </h2>
      <img src={src} alt="" />
      <h3 className="text-blue-600 underline underline-offset-4 text-2xl">
        <Link to="/admin">Admin Dashboard</Link>
      </h3>
    </div>
  );
};

export default User;
