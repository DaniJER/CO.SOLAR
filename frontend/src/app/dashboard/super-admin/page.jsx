"use client";
import ProtectedRoutes from "@/components/protected-routes/ProtectedRoutes";

const SuperAdminDashboard = () => {
  return (
    <ProtectedRoutes allowedRoles={["super_admin"]}>
      <div>
        <h1>Bienvenido al Dashboard de super administrador</h1>
      </div>
    </ProtectedRoutes>
  );
};

export default SuperAdminDashboard;
