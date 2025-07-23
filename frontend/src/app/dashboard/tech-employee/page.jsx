"use client";
import ProtectedRoutes from "@/components/protected-routes/ProtectedRoutes";

const TechEmployeeDashboard = () => {
  return (
    <ProtectedRoutes allowedRoles={["tech_employee"]}>
      <div>
        <h1>Bienvenido al Dashboard de Técnico</h1>
      </div>
    </ProtectedRoutes>
  );
};
export default TechEmployeeDashboard;
