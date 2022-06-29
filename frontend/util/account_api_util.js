export const updateData = (data) => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `/api/users/${data.id}`,
            data: { data }
        })
    )
};