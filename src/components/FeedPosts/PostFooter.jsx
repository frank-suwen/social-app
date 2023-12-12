import { Flex, Box } from "@chakra-ui/react"
import { useState } from "react"
import { NotificationsLogo, UnlikeLogo } from "../../assets/constants"

const PostFooter = () => {
  const [liked, setliked] = useState(false)
  const [likes, setLikes] = useState(1000)

  const handleLike = () => {
    if (liked) {
      setliked(false)
      setLikes(likes - 1)
    } else {
      setliked(true)
      setLikes(likes + 1)
    }
  }

  return (
    <>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"auto"}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
      </Flex>
    </>
  )
}

export default PostFooter