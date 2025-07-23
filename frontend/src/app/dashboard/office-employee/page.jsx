"use client";
import ProtectedRoutes from "@/components/protected-routes/ProtectedRoutes";

const OficceEmployeeDashboard = () => {
  return (
    <ProtectedRoutes allowedRoles={["office_employee"]}>
      <div>
        <h1>Bienvenido al Dashboard del empleado de oficina</h1>
      </div>
    </ProtectedRoutes>
  );
};

export default OficceEmployeeDashboard;
