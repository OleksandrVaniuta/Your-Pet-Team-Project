export const selectUserData = state => state.profile.user;

export const selectUserAvatar = state => state.profile.user.avatarURL;

export const selectMyPetsData = state => state.profile.pets;

export const selectIsUpdatingg = state => state.profile.isUpdating;
