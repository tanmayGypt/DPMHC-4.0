import {
  CommentText,
  CommentMetadata,
  CommentGroup,
  CommentContent,
  CommentAvatar,
  CommentActions,
  CommentAction,
  CommentAuthor,
  FormTextArea,
  Button,
  Comment,
  Form,
  Header,
} from "semantic-ui-react";

const CommentSection = () => (
  <div className="my-12 w-10/12">
    <CommentGroup className="">
      <Header as="h3" dividing>
        Comments
      </Header>

      <Comment>
        <CommentAvatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
        <CommentContent>
          <CommentAuthor as="a">Matt</CommentAuthor>
          <CommentMetadata>
            <div>Today at 5:42PM</div>
          </CommentMetadata>
          <CommentText>How artistic!</CommentText>
        </CommentContent>
      </Comment>

      <Form reply>
        <FormTextArea />
        <Button
          content="Add a Comment"
          labelPosition="left"
          icon="edit"
          primary
        />
      </Form>
    </CommentGroup>
  </div>
);

export default CommentSection;
