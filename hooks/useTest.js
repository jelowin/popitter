import useSWR from "swr"

export function useTest(id) {
  const { data, error } = useSWR(`api/test/${id}`)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
