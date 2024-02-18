// components/EditPost.tsx

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
    <div className="relative inline-block">
      <Button
        onClick={handleEdit}
        text={<BiEdit />}
        actionButton
      />
      {editPost && (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  border border-gray-300 p-4 rounded shadow-md min-w-1/4 max-w-3/4 z-50 overflow-auto"
        >
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
        </div>
      )}
    </div>
  );
};

export default EditPost;
