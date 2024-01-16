import ApiService from "./ApiService";

export const GetAllDataPokemon = async ({
  offset = 20,
  limit = 20,
  image = false,
}) => {
  try {
    const response = await ApiService.get(
      `/pokemon?offset=${offset}&limit=${limit}`
    );
    if (image) {
      const mappingResponse = {
        count: response.data.count,
        next: response.data.next,
        previous: response.data.previous,
        results: await Promise.all(
          response.data.results.map(async (item) => {
            const detailedResponse = await ApiService.get(item.url);
            return { name: item.name, detail: detailedResponse.data };
          })
        ),
      };
      return mappingResponse;
    }
    return response.data;
  } catch (error) {
    console.error("Error", error.message);
    return error.message;
  }
};
