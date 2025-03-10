import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { useChatStore } from "../store/useChatStore";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";
import { ChevronLeft } from "lucide-react";

export default function Home() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleBack = () => {
    setSelectedUser(null);
    setIsSidebarOpen(true);
  };

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 lg:px-4 px-2">
        <div className="bg-base-100 rounded-lg shadow-lg w-full max-w-8xl lg:h-[calc(100vh-8rem)] h-[calc(100vh-5rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            {/* Sidebar: Full width on mobile when no user selected */}
            <div
              className={`${
                isSidebarOpen && !selectedUser
                  ? "w-full"
                  : selectedUser
                  ? "hidden"
                  : "w-20 lg:w-72"
              } lg:block transition-all duration-200`}
            >
              <SideBar />
            </div>

            {/* Chat Area: Show only when user is selected on mobile */}
            <div
              className={`${
                selectedUser ? "w-full" : "hidden lg:block"
              } flex-1 flex flex-col`}
            >
              {selectedUser ? (
                <>
                  <button
                    onClick={handleBack}
                    className="lg:hidden p-4 text-left font-medium flex items-center gap-2 bg-base-100 border-b border-base-300"
                  >
                    <ChevronLeft size={25} />
                    Back
                  </button>
                  <ChatContainer />
                </>
              ) : (
                <div className="flex w-screen h-full justify-center items-center"><NoChatSelected /></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




