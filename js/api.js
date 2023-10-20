const BASE_URL = "http://localhost:8080/api";
const RESOURSE_URL = `${BASE_URL}/stadium`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};


const getAllStadiums = async () => {
    const rawResponse = await baseRequest({ method: "GET" });

    return await rawResponse.json();
};

const postStadium = (body) => baseRequest({ method: "POST", body });

const updateStadium = (body) =>
    baseRequest({ method: "PUT", body });

const deleteStadiumById = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });
