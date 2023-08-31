// бере зі стейту оголошення по категорії
export const selectNews = state => state.news.items;
// бере зі стейту кількість сторінок у відповіді
export const selectTotalPages = state => state.news.totalPages;
// бере зі стейту чи завантажується
export const selectIsNewsLoading = state => state.news.isLoading;
// export const selectCategory = state => state.notices.category;
