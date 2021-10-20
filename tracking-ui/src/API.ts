import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:8080/character"

export const getCharacters = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const response: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl
    )
		// console.log(characters)
    return response
  } catch (error) {
    throw new Error("oh no")
  }
}

export const getCharacter = async (id: string): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const response: AxiosResponse<ApiDataType> = await axios.get(
			`${baseUrl}/${id}`
		)
		return response
  } catch (error) {
    throw new Error("oh no")
  }
}