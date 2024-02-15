'use client'
import { BsFillTrashFill } from "react-icons/bs";
import { Post } from "@prisma/client";

import { remove } from "@/lib/actions";
import Button from "./ui/Button";
import Form from "./ui/Form";
import Input from "./ui/Input";


const DeletePost = ({ post }: { post: Post }) => {
  return (
    <Form
      action={remove}
    >
      <Input
        type="hidden"
        name="inputId"
        value={post.id}
      />

      <Button
        actionButton
        text={<BsFillTrashFill />}
        type="submit"
      />
    </Form>
  )
};

export default DeletePost;
