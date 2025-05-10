import {z} from "zod";

export let formSchema = z.object({
	name: z.string().min(2, {
		message: "Name is required and needs to be at least 2 characters",
	}),
	email: z.string().email({message: "Invalid email address"}),
	subject: z.string().min(3, {
		message: "Subject is required and needs to be at least 3 characters",
	}),
	message: z
		.string()
		.min(10, {message: "Message needs to be at least 10 characters"}),
});
