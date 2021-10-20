import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:8080"

export const getCharacters = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const response: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/character"
    )
		// console.log(characters)
    return response
  } catch (error) {
    throw new Error("oh no")
  }
}