"use client"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { useState,ChangeEvent, FormEvent } from "react";
import Navigation from "../ui/navigation";
import Footer from "../ui/footer";





export default function Faqs() {


  const [name,SetName] = useState<string>("")
  const [comment,SetComment] = useState<string>("")
  const [comments,SetComments] = useState<string[]>([])
  
  
  const input = (e:ChangeEvent<HTMLInputElement>)=>{
      SetName(e.target.value)
  }

  const inputComment = (e:ChangeEvent<HTMLTextAreaElement>)=>{
      SetComment(e.target.value)
  }


  const handlesubmit = (e:FormEvent) => {
      e.preventDefault();
      if(name.trim() && comment.trim()){
          SetComments((prevComments:string[])=>{
             return [
              ...prevComments,
              `${name}:${comment}`,
          ]})
          SetName("")
          SetComment("")
      }
  }


  return (
    <main>
      <Navigation />

        
      <section className="place-self-center py-10">
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-bold">Our Customer`s Feedback`s</h1>
          <p className="container w-[800px] place-self-center text-gray-500 text-xs md:text-sm mt-3">
            Share your experience about our products and 
            For more information about our products & services,
             please feel free to drop your comment. 
          </p>
        </div>
     </section> 

     <div className="container  w-[300px] sm:w-[400px] lg:w-[1000px] place-self-center">
            <div className="pt-5">
                <ul className="grid grid-rows-1 gap-5 pl-6 font-semibold cursor-pointer leading-10">
                      
                    <li className="container w-[300px] sm:w-[400px] lg:w-[1000px] border text-justify marker font-light leading-8 p-5">
                    <span className="font-bold">Umehani:</span><br/> 
                    Pudding and jello jelly aren`t just desserts—they`re a sweet bridge to cherished childhood memories. 
                    Every spoonful takes me back to Bano Anty`s kitchen, where love was served in every bowl. 
                    Now, her daughter Kanwal Merchant continues this beautiful legacy, keeping those flavors and 
                    memories alive. Truly, some traditions are as timeless as the love they carry. 🥰🍮"
                    #ChildhoodMemories #BanoAnty #SweetLove"
                    </li>
                    <li className="container w-[300px] sm:w-[400px] lg:w-[1000px] border  text-justify marker font-light leading-8 p-5">
                    <span className="font-bold">Dr. Sadia,</span><br/>  my children only stop eating SK Royal's china grass after finishing it</li>
                    <li className="container w-[300px] sm:w-[400px] lg:w-[1000px] border  text-justify marker font-light leading-8 p-5">
                    <span className="font-bold"> Mrs. Umair,</span><br/> our iftar is incomplete without china grass.
                    </li>
                    <li className="container w-[300px] sm:w-[400px] lg:w-[1000px] border  text-justify marker font-light leading-8 p-5">
                    <span className="font-bold">Nimra Jawed,</span><br/>  our childhood was spent eating SK Royal's china grass</li>
                        <ul className="space-y-2 list-disc font-semibold">
                            {comments.map((item, index) => (
                                <li
                                    key={index}
                                    className="marker text-black font-light hover:font-bold"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </ul>
                </div>
                <div className="container  w-[300px] sm:w-[400px] lg:w-[1000px] place-self-center">
                <h1 className="text-black font-bold pt-20 text-2xl font-serif tracking-wider">LEAVE A  COMMENT</h1>
                <div className="container  w-[300px] sm:w-[400px] lg:w-[1000px] mt-10 space-y-10 pb-10">
                    <div>
                        <label htmlFor="name"  className="text-black font-serif font-bold">Name:</label>
                        <Input type="text" value={name} onChange={input} className="border-black"/>
                    </div>
                    <div>
                        <label htmlFor="comment" className="text-black font-serif font-bold">Comment:</label>
                        <Textarea value={comment} onChange={inputComment}  rows={5} className="border-black"/>
                    </div>
                    <Button  variant={"secondary"} type="submit" onClick={handlesubmit} className="text-white text-lg font-serif px-10 py-5 bg-pink-500 hover:bg-transparent hover:border-2 hover:bg-pink-600">Post Comment</Button>
                    </div>
                </div>
        </div>
 


      <Footer />
    </main>
  );
}
