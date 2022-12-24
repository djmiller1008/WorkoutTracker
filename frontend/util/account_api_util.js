export const updateData = (data) => {
    return (
        $.ajax({
            method: 'PUT',
            url: `/api/users/${data.id}`,
            data: { data }
        })
    )
};