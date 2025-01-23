import { client } from "@/sanity/lib/client";



export interface comment {
    name: string;
    email: string;
    message: string;
     }
  

export default async function Data() {
  const comments: comment[] = await client.fetch(
    `*[_type == "contactForm"]{
  name,
  email,
  message
}`
  );

 
  console.log(comments);

  if (!comments || comments.length === 0) {
    return <p>No comments found.</p>;
  }

 

  return (
    <div className="container mx-auto  w-[500px] md:w-[700px] lg:w-[1000px]">
           <h1 className="text-2xl text-center font-bold py-10">
            Comments & Questions of our Customers</h1>
          <div>
            {comments.map((comment, index) => (
          <div key={comment.name} className="items-center px-2 py-2">
            <h1 className="text-base font-bold pt-4 text-black">
                {comment.name}
              </h1>
              
                <p className="text-base font-light pt-2 text-black">
                {comment.message}
                </p>
           </div>
            ))}
        </div>
        </div>
 )
}