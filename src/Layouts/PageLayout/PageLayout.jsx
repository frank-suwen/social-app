import {Box, Flex} from '@chakra-ui/react'

const PageLayout = ({Children}) => {
  return (
    <Flex>
        {/* sidebar on the left */}
        <Box>
            <Sidebar />
        </Box>

        {/* page content on the right */}
        <Box>
            {Children}
        </Box>
    </Flex>
  )
}

export default PageLayout