'use client'

import { useState } from "react";
import { BiEdit } from "react-icons/bi"
import { Post } from "@prisma/client";

import { edit } from "@/lib/actions";
import Form from "./ui/Form";
import Input from "./ui/Input";
import Button from "./ui/Button";


const EditPost = ({ post }: { post: Post }) => {
  const [editPost, setEditPost] = useState(false)

  const handleEdit = () => {
    setEditPost(!editPost)
  }

  const handleSubmit = () => {
    setEditPost(false)
  }

  return (
    <div className="flex gap-5 items-center">
      <Button
        onClick={handleEdit}
        text={<BiEdit />}
        actionButton
      />
      {editPost ? (
        <Form
          action={edit}
          onSubmit={handleSubmit}

        >
          <Input
            name="inputId"
            value={post.id}
            type="hidden"
          />
          <div className="flex justify-center">
            <Input
              type="text"
              name="NewDescription"
              placeholder="Edit the Post"
            />
            <Button
              type="submit"
              text="Save"
            />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditPost;
