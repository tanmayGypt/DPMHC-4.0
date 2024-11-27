import React, { useState } from "react";
import {
  CommentText,
  CommentMetadata,
  CommentGroup,
  CommentContent,
  CommentAvatar,
  Button,
  Comment,
  Form,
  Header,
} from "semantic-ui-react";
import { createComment } from "../../../api";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

const CommentSection = ({ comments, setReload, reload }) => {
  const { id } = useParams(); // Retrieve the targetBlogId from the URL
  const [comment, setComment] = useState("");
  const user = Cookies.get("user");

  const submitComment = async (e) => {
    if (!comment.trim()) {
      alert("Comment cannot be empty!");
      return;
    }


    try {
      const resp = await createComment({
        user: user,
        comment,
        targetBlogId: id,
      });

      // Trigger reload to refetch the comments in the parent component (MedicoBlogs)
      setReload(!reload);
      setComment("");  // Reset the comment input
    } catch (error) {
      console.error("Failed to add comment:", error);
      alert("Failed to add comment. Please try again.");
    }
  };

  return (
    <div className="my-12 w-10/12">
      <CommentGroup>
        <Header as="h3" dividing>
          Comments
        </Header>

        {comments?.length > 0 ? (
          comments.map((commentData, index) => (
            <Comment key={index}>
              <CommentAvatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
              <CommentContent>
                <Comment.Author as="a">{commentData?.user?.fullName || "anonymous"}</Comment.Author>
                <CommentMetadata>
                  <div>
                    {commentData?.dateCreated
                      ? new Date(commentData.dateCreated).toLocaleString()
                      : "Just now"}
                  </div>
                </CommentMetadata>
                <CommentText>{commentData?.comment}</CommentText>
              </CommentContent>
            </Comment>
          ))
        ) : (
          <div>No comments available</div>
        )}

        <Form reply>
          <Form.TextArea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment here..."
          />
          <Button
            onClick={submitComment}

            content="Add a Comment"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </CommentGroup>
    </div>
  );
};

export default CommentSection;
