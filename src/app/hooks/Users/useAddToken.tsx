import { useMutation } from "@tanstack/react-query"
import { addToken } from "../../services/token.service"


const useAddToken = () => {
  return useMutation({
    mutationKey: ['addToken'], 
    mutationFn: (chat_id: {chat_id: number}) => addToken(chat_id)
  })
}

export default useAddToken