import { create } from "zustand";
//创建状态管理
const useUserStore=create(
    (set)=>
    (
        {
users: [],
user: null,
setUsers: (users) => set({ users }),
setUser: (user) => set({ user }),

        }
    )
    
)
export default useUserStore;