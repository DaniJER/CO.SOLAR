"use client";
import ProtectedRoutes from "@/components/protected-routes/ProtectedRoutes";

const CustomerDashboard = () => {
  return (
    <ProtectedRoutes allowedRoles={["customer"]}>
      <div>
        <h1>Bienvenido al Dashboard de Cliente</h1>
      </div>
    </ProtectedRoutes>
  );
};

export default CustomerDashboard;
