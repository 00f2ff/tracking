import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:8080/character"

export const getCharacters = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const response: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl
    )
    return response
  } catch (error) {
    throw error
  }
}

export const getCharacter = async (id: string): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const response: AxiosResponse<ApiDataType> = await axios.get(
			`${baseUrl}/${id}`
		)
		return response
  } catch (error) {
    throw error
  }
}

export const createCharacter = async (character: ICharacter): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const response: AxiosResponse<ApiDataType> = await axios.post(
			baseUrl,
			character
		)
		return response
  } catch (error) {
    throw error
  }
}

export const updateCharacter = async (character: ICharacter): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const response: AxiosResponse<ApiDataType> = await axios.put(
			baseUrl,
			character
		)
		return response
  } catch (error) {
    throw error
  }
}

export const deleteCharacter = async (id: number): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const response: AxiosResponse<ApiDataType> = await axios.delete(
			`${baseUrl}/${id}`
		)
		return response
  } catch (error) {
    throw error
  }
}