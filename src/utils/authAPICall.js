/*
 * Filename: authAPICall.js
 * Created Date: Friday, April 8th 2022, 4:54:51 pm
 * Author: Numan Ahmed
 * Description: Responsible for AUTH API Requests
 * Developed with ❤️
 * Copyright (c) Numan
 */



import axios from "axios";
import { toast } from "react-toastify";

/**
 * Fetch Data from the API & return Response
 * @param {String} endpoint 
 * @param {String} method - HTTP Methods - GET | POST | DELETE | PUT | PATCH
 * @param {Object} data 
 * @param {String} endpointPrefix - EndPoint Prefix. default - '/api'
 * @returns - {Object} - API response
 */
export const authAPICall = async (endpoint, data = null, method = "POST", endpointPrefix = "/api") => {
    const API_URL = process.env.REACT_APP_AUTH_SERVICE_URL + endpointPrefix + endpoint;
    const config = {
        method: method,
        url: API_URL,
        headers: {
            'Content-Type': 'application/json'
        },
        data
    };

    const response = await axios(config)
        .catch((error) => {
            toast.error(error.response.data.error);
            return error.response.data
        });
    return response.data;
}