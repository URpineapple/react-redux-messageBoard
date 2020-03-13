export const insertData = data => {
    return {
        type: 'INSERT',
        payload: data
    }
}

export const updateData = data => {
    return {
        type: 'UPDATE',
        payload: data
    }
}

export const deleteData = index => {
    return {
        type: 'DELETE',
        payload: index
    }
}

export const updateIndex = index => {
    return {
        type: 'UPDATE-INDEX',
        payload: index
    }
}