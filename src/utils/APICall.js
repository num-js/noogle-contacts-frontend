/*
 * APICalls.js
 * Created Date: Sunday, April 10th 2022, 4:32:57 am
 * Author: Numan Ahmed
 * Description: Responsible for ALL API Requests
 * Developed with ❤️
 * Copyright (c) Numan
 */

import axios from "axios";
import { toast } from "react-toastify";
import { getCookie } from "./cookieHelper";

/**
 * Fetch Data from the API & return Response
 * @param {String} endpoint 
 * @param {String} method - HTTP Methods - GET | POST | DELETE | PUT | PATCH
 * @param {Object} data 
 * @param {String} endpointPrefix - EndPoint Prefix. default - '/api'
 * @returns - {Object} - API response
 */
export const APICall = async (endpoint, data = null, method = "POST", endpointPrefix = "/api") => {
    const API_URL = process.env.REACT_APP_API_URL + endpointPrefix + endpoint;
    const authServiceToken = getCookie(AUTH_SERVICE_TOKEN);
    const config = {
        method: method,
        url: API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authServiceToken
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