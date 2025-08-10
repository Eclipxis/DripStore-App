import { injectable } from "inversify";
import { HttpClientDTO, IHttpClient } from "./contracts/http-client";
import axios from "axios";

@injectable()
export class AxiosHttpClient implements IHttpClient {
  async get ({ url, headers, params }: HttpClientDTO.Input): Promise<HttpClientDTO.Output> {
    const result = await axios.request({
      url,
      headers,
      params,
      method: 'get'
    });
    return result.data;
  }

  async post ({ url, data, headers, params }: HttpClientDTO.Input): Promise<HttpClientDTO.Output> {
    const result = await axios.request({
      url,
      data,
      headers,
      params,
      method: 'post'
    });
    return result.data;
  }

  async put ({ url, data, headers, params }: HttpClientDTO.Input): Promise<HttpClientDTO.Output> {
    const result = await axios.request({
      url,
      data,
      headers,
      params,
      method: 'put'
    });
    return result.data;
  }

  async patch ({ url, data, headers, params }: HttpClientDTO.Input): Promise<HttpClientDTO.Output> {
    const result = await axios.request({
      url,
      data,
      headers,
      params,
      method: 'patch'
    });
    return result.data;
  }

  async delete ({ url, data, headers, params }: HttpClientDTO.Input): Promise<HttpClientDTO.Output> {
    const result = await axios.request({
      url,
      data,
      headers,
      params,
      method: 'delete'
    });
    return result.data;
  }
}