export const checkStatus = (response = {
    status: 401
}) => {
    return response.status === 200
}