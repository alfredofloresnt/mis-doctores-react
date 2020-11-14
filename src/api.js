const host = 'http://localhost:4000';

let GET = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}


export const getDoctorsList = (data) => {
    return fetch(host + '/doctor' + data, GET )
}

export const getSearchDoctor = (data) => {
    return fetch(host + '/search' + data, GET )
}