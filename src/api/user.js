import request from "./request"

// Read
export function getUser(){
    return request({
        url: "api/user",
        method: "GET",
    })
}

// Create
export function addUser(data){
    return request({
        url: "api/user",
        method: "POST",
        data,
    })
}

// Update
export function editUser(id, data){
    return request({
        url: `api/user/${id}`,
        method: "PATCH", // POST || PATCH
        data,
    })
}

// Delete
export function deleteUser(id){
    return request({
        url: `api/user/${id}`,
        method: "DELETE",
    })
}