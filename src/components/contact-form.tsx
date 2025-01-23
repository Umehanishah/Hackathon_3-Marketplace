"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { client } from "@/sanity/lib/client"
import { Textarea } from "@/components/ui/textarea";


const formSchema = z.object({
    Name: z.string().min(1).max(50),
    email: z.string().email(),
    message: z.string().min(1).max(500),
});

type FormType = z.infer<typeof formSchema>

const ContactForm = () => {

    const form = useForm<FormType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: FormType) {
        try{
        await client.create({
            _type: "contactForm",
            name: values.Name,
            email: values.email,
            message: values.message,
        });
        alert("Form submitted successfully!");
        form.reset(); // Reset form fields
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit the form. Please try again.");
      }
    }

    return (
        <div className="container w-[500px] md:w-[700px] lg:w-[1000px] place-self-center py-10">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="Name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                <Textarea
                                    placeholder="Write your message here"
                                    rows={5}
                                    {...field}
                                />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white">
                        Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default ContactForm