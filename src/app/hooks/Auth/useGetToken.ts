import { useMutation } from "@tanstack/react-query"
import { getToken } from "../../services/token.service"

const useGetToken = () => {
  return useMutation({
    mutationKey: ['getTokenAuth'],
    mutationFn: (username: {username: string}) => getToken(username)
  })
}

export default useGetToken