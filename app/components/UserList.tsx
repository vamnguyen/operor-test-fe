"use client";

import React, { useCallback, useEffect, useRef } from "react";
import MeetingDays from "./MeetingDays";
import { useFetchUsers } from "../hooks/useUsers";

const UserList: React.FC = () => {
  const { users, loading, loadMore, hasMore } = useFetchUsers();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current!;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      loadMore();
    }
  }, [loadMore]);

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto w-full overflow-y-auto h-[50vh]"
    >
      <table className="table-auto w-full text-left border border-gray-300">
        <thead className="sticky -top-0.5 bg-gray-200">
          <tr className="bg-gray-200 py-2">
            <th className="px-4 py-2 text-center">ID</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2 text-center">Gender</th>
            <th className="px-4 py-2 text-center">Days</th>
            <th className="px-4 py-2">Meeting days</th>
            <th className="px-4 py-2 text-center">Free days</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-300">
              <td className="px-4 py-2 text-center">{user.id}</td>
              <td className="px-4 py-2">{user.first_name}</td>
              <td className="px-4 py-2">{user.last_name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2 text-center">{user.gender}</td>
              <td className="px-4 py-2 text-center">{user.days}</td>
              <td className="px-4 py-2">
                <MeetingDays meetings={user.meeting_days} />
              </td>
              <td className="px-4 py-2 text-center">
                {user.days_without_meetings}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <div className="py-2 text-center">Loading more users...</div>}
    </div>
  );
};

export default UserList;
