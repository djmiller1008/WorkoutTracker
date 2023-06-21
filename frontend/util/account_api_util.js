export const updateData = data => {
    return (
        $.ajax({
            method: 'PUT',
            url: `/api/users/${data.id}`,
            data: { data }
        })
    )
};

export const updateWeightUnit = data => {
    return (
        $.ajax({
            method: 'PUT',
            url: '/api/users/update_weight_unit',
            data: { data }
        })
    )
};