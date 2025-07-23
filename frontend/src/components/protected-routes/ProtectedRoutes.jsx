"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoutes = ({ allowedRoles, children }) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false); // control de render

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || !allowedRoles.includes(role)) {
      router.replace("/unauthorized"); // redirige si no cumple
    } else {
      setAuthorized(true); // permite mostrar el contenido
    }
  }, []);

  return authorized ? children : null;
};

export default ProtectedRoutes;
