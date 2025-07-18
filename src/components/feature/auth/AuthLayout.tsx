import React from "react";
import { Outlet } from "react-router-dom";

interface AuthLayoutProps {
  sideComponent?: React.ReactNode;
  fullWidthSide?: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  sideComponent,
  fullWidthSide = false,
}) => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {sideComponent ? (
        fullWidthSide ? (
          // Full width side layout
          <div className="flex w-full">
            {/* Auth form takes the other half */}
            <div className="w-full md:w-1/2 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <Outlet />
            </div>
            {/* Side component takes full height and half width */}
            <div className="hidden md:block w-1/2 h-full min-h-screen">
              {sideComponent}
            </div>
          </div>
        ) : (
          // Regular layout with max width and gap
          <div className="w-full max-w-6xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:order-1 flex items-center justify-center">
                <Outlet />
              </div>
              <div className="md:order-2 hidden md:block">{sideComponent}</div>
            </div>
          </div>
        )
      ) : (
        // No side component layout
        <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthLayout;
