const host = 'http://localhost:4000';

let GET = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}

let POST = {
	method: 'POST',
	headers: {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	},
};


export const getDoctorsList = (data) => {
    return fetch(host + '/doctor' + data, GET )
}

export const getSearchDoctor = (data) => {
    return fetch(host + '/search' + data, GET )
}

export const getHospitalsList = (data) => {
    return fetch(host + '/hospital' + data, GET )
}

export const getSearchHospital = (data) => {
    return fetch(host + '/search' + data, GET )
}

export const getSpecialtiesList = (data) => {
    return fetch(host + '/specialty' + data, GET )
}

export const getSearchSpecialty = (data) => {
    return fetch(host + '/search' + data, GET )
}

export const getDoctorProfile = (data) => {
    return fetch(host + '/doctor/info' + data, GET)
}

export const postDoctorComment = (data) => {
    POST.body = JSON.stringify(data);
    return fetch(host + '/comment/create', POST)
}

export const createDoctor = (data) => {
    POST.body = JSON.stringify(data);
    return fetch(host + '/doctor/create', POST)
}

export const login = (data) => {
    POST.body = JSON.stringify(data);
    return fetch(host + '/login', POST)
}


export const deleteDoctor = (data) => {
    POST.body = JSON.stringify(data);
    return fetch(host + '/doctor/delete', POST)
}