function checkResponseStatus(response) {
    //проверка статуса запроса
    if (response.ok) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`))
    }
}

function getJsonObject(response) {
    // получение JSON-объекта
    return response.json()
}

async function getRequest(url) {
    // GET-запрос
    return (
        fetch(url)
            .then(checkResponseStatus)
            .then(getJsonObject)
    )
}

async function patchRequest(url, data) {
    // PATCH-запрос
    return (
        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(checkResponseStatus)
            .then(getJsonObject)
    )
}

export  {getRequest, patchRequest}
