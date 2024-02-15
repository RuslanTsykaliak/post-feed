import Form from "./ui/Form";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { create } from "@/lib/actions";

const AddPost = () => {
  return (
    <Form
      action={create}
      className="w-1/2 m-auto">
      <div className="flex">
        <Input
          name="input"
          type="text"
          placeholder="Share a Tip"
        />
        <Button
          type="submit"
          text="Submit"
        />
      </div>
    </Form>
  )
};

export default AddPost;
