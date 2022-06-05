export const fetchAllCategories = () => (
    $.ajax({
        method: 'GET',
        url: '/api/exercise_categories'
    })
);

export const fetchCategory = categoryName => (
    $.ajax({
        method: 'GET',
        url: `/api/exercise_categories/${categoryName}`
    })
);

