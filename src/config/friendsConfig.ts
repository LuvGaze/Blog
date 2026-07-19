import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";
import friendsData from "../data/friends.json";

export const friendsPageConfig: FriendsPageConfig = friendsData.pageConfig;

export const friendsConfig: FriendLink[] = friendsData.friends;

export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};