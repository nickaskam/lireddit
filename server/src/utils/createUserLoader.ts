import DataLoader from "dataloader";
import { User } from "../entities/User";

// [1, 7, 8, 9]
// [{id: 1, username: 'tim'}, {id: 7, username: 'bob'}, {}, {}]
export const createUserLoader = () =>
  new DataLoader<number, User>(async (userIds) => {
    const users = await User.findByIds(userIds as number[]);
    const userIdToUser: Record<number, User> = {};
    users.forEach((u) => {
      userIdToUser[u.id] = u;
    });

    return userIds.map((userId) => userIdToUser[userId]);
  });
