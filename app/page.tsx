// app/page.tsx

import AddPost from "@/components/AddPost";
import Posts from "@/components/Posts";
import { getData } from "@/lib/actions";



const Home = async () => {

  const data = await getData()

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center bg-gray-100">
      <span className="text-3xl font-extrabold uppercase text-blue-600">
        Personal Development Tips
      </span>

      <div className="flex justify-center flex-col items-center md:w-[1000px] sm:w-[500px] rounded-lg shadow-sm">
        <AddPost />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
          {data.map((post, id) => (
            <div
              className="w-full bg-gray-50 rounded-lg shadow-sm"
              key={id}
            >
              <Posts
                post={post}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
