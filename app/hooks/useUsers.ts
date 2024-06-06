import { useEffect, useState, useCallback } from "react";
import { User } from "../lib/definitions";
import { getUsers } from "../api/users";

const LIMIT = 10;

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);

  const fetchUsers = useCallback(async () => {
    if (offset >= 50) return;
    setLoading(true);
    const newUsers = await getUsers(offset, LIMIT);
    setUsers((prevUsers) => [...prevUsers, ...newUsers]);
    setLoading(false);
    if (newUsers.length < LIMIT) {
      setHasMore(false);
    }
  }, [offset]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const loadMore = () => {
    if (hasMore) {
      setOffset((prevOffset) => prevOffset + LIMIT);
    }
  };

  return { users, loading, loadMore, hasMore };
};
