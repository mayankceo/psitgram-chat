import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";

const HomePage = () => {
	return (
		<Container maxW={"container.lg"}>
			<Flex gap={9}>
				<Box flex={5} py={10}>
					<FeedPosts />
				</Box>
				<Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"0px"}>
					<SuggestedUsers />
				</Box>
			</Flex>
		</Container>
	);
};

export default HomePage;
