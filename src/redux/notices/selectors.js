// бере зі стейту оголошення по категорії
export const selectNotices = state => state.notices.items;
// бере зі стейту кількість сторінок у відповіді
export const selectTotalPages = state => state.notices.totalPages;
// бере зі стейту чи завантажується
export const selectIsNoticeLoading = state => state.notices.isLoading;
// export const selectCategory = state => state.notices.category;
export const selectIsFavorite = state => state.notices.isFavorite;

export const selectNotice = state => state.notices.notice;

export const selectNoticesFavorite = state => state.notices.noticesFavorite;

export const selectNoticesMyAds = state => state.notices.noticesMyAds;