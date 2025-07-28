"use client";
import ProtectedRoutes from "@/components/protected-routes/ProtectedRoutes";

const TechLeaderDashboard = () => {
  return (
    <ProtectedRoutes allowedRoles={["tech_leader"]}>
      <div>
        <h1>Bienvenido al Dashboard de lider técnico</h1>
      </div>
    </ProtectedRoutes>
  );
};

export default TechLeaderDashboard;
