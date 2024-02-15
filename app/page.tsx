import prisma from "@/lib/prismadb";

import AddPost from "@/components/AddPost";
import Posts from "@/components/Posts";

async function getData() {
  const data = await prisma.post.findMany({
    select: {
      description: true,
      id: true,
      user: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })

  return data
}

const Home = async () => {

  const data = await getData()

  return <div className="w-screen py-20 flex justify-center flex-col items-center">
    <span className="text-3xl font-extrabold uppercase">
      Personal Development Tips
    </span>

    <div className="flex justify-center flex-col items-center w-[1000px]">
      <AddPost />
      <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
        {data.map((post, id) => (
          <div
            className="w-full"
            key={id}
          >
            <Posts
              post={post}
            />
          </div>
        ))}
      </div>
    </div>
  </div>;
};

export default Home;
