import React from "react";
import { Flex, IconButton } from "@chakra-ui/core";
import { PostSnippetFragment, useVoteMutation } from "../generated/graphql";

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

export const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [, vote] = useVoteMutation();
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" mr={4}>
      <IconButton
        onClick={async () => {
          await vote({
            postId: post.id,
            value: 1,
          });
        }}
        aria-label="updoot post"
        icon="chevron-up"
      />
      {post.points}
      <IconButton
        onClick={async () => {
          await vote({
            postId: post.id,
            value: -1,
          });
        }}
        aria-label="downdoot post"
        icon="chevron-down"
      />
    </Flex>
  );
};
